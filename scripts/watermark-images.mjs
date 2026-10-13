// Bakes the Power Rescue mark into every job photo and shrinks it for the web.
//
//   originals/pr/   untouched photos (kept OUT of public/, so nobody can download them)
//   public/pr/      watermarked, web-sized copies (same file names, so no code changes)
//
// Run:  npm run images
// Safe to re-run any time: it always starts from the originals.

import sharp from "sharp"
import { mkdir, readdir, readFile, stat } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const SRC = path.join(root, "originals", "pr")
const OUT = path.join(root, "public", "pr")
const MARK = path.join(root, "public", "logo-mark.svg")

const MAX_WIDTH = 1800 // plenty for full-width hero photos, much lighter than camera originals
const CORNER_SIZE = 0.1 // corner mark width as a share of the photo width
const CENTER_SIZE = 0.34 // faint centre mark: harder to crop out than a corner mark
const CORNER_OPACITY = 0.9
const CENTER_OPACITY = 0.1
const EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp"])

// Privacy fixes applied to the web copies. The untouched originals in originals/pr are never changed.
// Positions are fractions of the photo (0 to 1), so they work at any resolution.
//   cropTop: cut this share off the top   hide: pixelate these boxes {x, y, w, h}
const FIXES = {
  // Burned-in GPS coordinates and date stamp across the top of the photo
  "power-rescue-commercial-inverter-and-battery-bank-system.jpg": { cropTop: 0.24 },
  // A client's house number on the wall
  "power-rescue-driveway-gate-automation-wiring.jpg": { hide: [{ x: 0.74, y: 0.18, w: 0.24, h: 0.17 }] },
}

async function applyFixes(input, file) {
  const fix = FIXES[file]
  const loaded = await sharp(input).rotate().toBuffer({ resolveWithObject: true })
  let { data } = loaded
  const { info } = loaded
  if (!fix) return data
  let height = info.height
  if (fix.cropTop) {
    const cut = Math.round(info.height * fix.cropTop)
    data = await sharp(data).extract({ left: 0, top: cut, width: info.width, height: info.height - cut }).toBuffer()
    height = info.height - cut
  }
  for (const b of fix.hide ?? []) {
    const left = Math.round(b.x * info.width)
    const top = Math.round(b.y * height)
    const width = Math.min(info.width - left, Math.round(b.w * info.width))
    const h = Math.min(height - top, Math.round(b.h * height))
    // Pixelate hard so the digits cannot be recovered
    // (two separate steps on purpose: sharp only applies the last resize in a chain)
    const tiny = await sharp(data)
      .extract({ left, top, width, height: h })
      .resize({ width: Math.max(2, Math.round(width / 10)), height: Math.max(2, Math.round(h / 10)), fit: "fill" })
      .toBuffer()
    const patch = await sharp(tiny).resize({ width, height: h, fit: "fill", kernel: "nearest" }).toBuffer()
    data = await sharp(data).composite([{ input: patch, left, top }]).toBuffer()
  }
  return data
}

// Fade an image by multiplying its alpha channel
async function withOpacity(buf, opacity) {
  return sharp(buf)
    .ensureAlpha()
    .composite([
      {
        input: Buffer.from([255, 255, 255, Math.round(255 * opacity)]),
        raw: { width: 1, height: 1, channels: 4 },
        tile: true,
        blend: "dest-in",
      },
    ])
    .png()
    .toBuffer()
}

async function renderMark(svg, width) {
  return sharp(svg, { density: 600 }).resize({ width }).png().toBuffer()
}

async function stamp(file) {
  const input = path.join(SRC, file)
  const ext = path.extname(file).toLowerCase()

  // Auto-rotate from camera data, then shrink if the photo is huge
  const fixed = await applyFixes(input, file)
  const { data, info } = await sharp(fixed)
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .toBuffer({ resolveWithObject: true })

  const svg = await readFile(MARK)
  const cornerW = Math.max(36, Math.round(info.width * CORNER_SIZE))
  const centerW = Math.round(info.width * CENTER_SIZE)
  const margin = Math.round(info.width * 0.025)

  const corner = await renderMark(svg, cornerW)
  const cornerMeta = await sharp(corner).metadata()
  const shadow = await withOpacity(
    await sharp(corner).modulate({ brightness: 0 }).blur(Math.max(2, cornerW / 28)).png().toBuffer(),
    0.5,
  )
  const centre = await withOpacity(await renderMark(svg, centerW), CENTER_OPACITY)
  const centreMeta = await sharp(centre).metadata()

  const left = Math.max(0, info.width - cornerMeta.width - margin)
  const top = Math.max(0, info.height - cornerMeta.height - margin)

  let pipeline = sharp(data).composite([
    {
      input: centre,
      left: Math.max(0, Math.round((info.width - centreMeta.width) / 2)),
      top: Math.max(0, Math.round((info.height - centreMeta.height) / 2)),
    },
    { input: shadow, left: Math.min(left + 2, info.width - cornerMeta.width), top: Math.min(top + 3, info.height - cornerMeta.height) },
    { input: await withOpacity(corner, CORNER_OPACITY), left, top },
  ])

  if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 82, mozjpeg: true })
  else if (ext === ".png") pipeline = pipeline.png({ compressionLevel: 9, effort: 8 })
  else pipeline = pipeline.webp({ quality: 80 })

  const output = path.join(OUT, file)
  await pipeline.toFile(output)
  const [before, after] = await Promise.all([stat(input), stat(output)])
  return { file, before: before.size, after: after.size }
}

async function main() {
  let files
  try {
    files = (await readdir(SRC)).filter((f) => EXTENSIONS.has(path.extname(f).toLowerCase()))
  } catch {
    console.error(`Could not find ${SRC}\nMove your photos there first:  mv public/pr originals/pr`)
    process.exit(1)
  }
  if (!files.length) {
    console.error(`No photos found in ${SRC}`)
    process.exit(1)
  }

  await mkdir(OUT, { recursive: true })
  const kb = (n) => `${Math.round(n / 1024)} KB`
  let totalBefore = 0
  let totalAfter = 0

  for (const f of files) {
    try {
      const r = await stamp(f)
      totalBefore += r.before
      totalAfter += r.after
      console.log(`✓ ${r.file}  ${kb(r.before)} -> ${kb(r.after)}`)
    } catch (err) {
      console.error(`✗ ${f}: ${err.message}`)
    }
  }
  console.log(`\nDone: ${files.length} photos, ${kb(totalBefore)} -> ${kb(totalAfter)}`)
}

main()
