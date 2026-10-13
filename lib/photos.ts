// One place for what every photo really shows, so captions and alt text are accurate,
// and so the site never presents illustrations, AI images or stock photos as real jobs.
//
//   real          a photo of a Power Rescue job
//   ai            looks AI-generated: fine as a decorative backdrop, not as proof of work
//   illustration  a drawn illustration (used on the job card)
//   stock         looks like a stock or web image: keep it out of "our work" areas
//
// If you re-classify a photo, change its kind here and every page follows.

export type PhotoKind = "real" | "ai" | "illustration" | "stock"
export type PhotoInfo = { kind: PhotoKind; caption: string; alt: string }

export const PHOTOS: Record<string, PhotoInfo> = {
  "hero-db-board": { kind: "ai", caption: "Electrician at a distribution board", alt: "Electrician with a headlamp working on a distribution board" },
  "inverter-install": { kind: "ai", caption: "Inverter and battery installation", alt: "Electrician installing a hybrid inverter and batteries on a wall" },
  "job-emergency": { kind: "illustration", caption: "Emergency repair", alt: "Illustration of a distribution board with a fault" },
  "job-install": { kind: "illustration", caption: "New installation", alt: "Illustration of an electrician fitting a ceiling light" },
  "job-maintenance": { kind: "illustration", caption: "Maintenance and COC", alt: "Illustration of a multimeter, plug and checklist" },
  "job-solar": { kind: "illustration", caption: "Solar and backup", alt: "Illustration of a house with solar panels" },
  "lighting-install": { kind: "ai", caption: "Lighting installation", alt: "Electrician on a ladder fitting pendant lights in a kitchen" },
  "maintenance-test": { kind: "ai", caption: "Testing a wall socket", alt: "Electrician testing a wall socket with a multimeter" },
  "solar-roof": { kind: "ai", caption: "Solar installers on a roof", alt: "Two installers fitting solar panels on a tiled roof" },
  "apollo-solar-geyser-rooftop-installation": { kind: "stock", caption: "Solar geyser on a roof", alt: "Solar geyser with evacuated tubes on a corrugated roof" },
  "automatic-sliding-gate-motor-installation": { kind: "real", caption: "New sliding gate on site", alt: "New wooden sliding gate being installed at a property" },
  "boundary-wall-electric-security-fencing": { kind: "real", caption: "Electric fence on a boundary wall", alt: "Electric security fence mounted on top of a boundary wall" },
  "cctv-security-camera-monitor-display": { kind: "real", caption: "Live CCTV view", alt: "Wall-mounted monitor showing live CCTV camera views" },
  "commercial-battery-room-cable-management": { kind: "real", caption: "Battery room cabling", alt: "Battery room with neatly routed cable trays" },
  "commercial-battery-storage-room-air-conditioning": { kind: "real", caption: "Battery storage room", alt: "Air-conditioned battery storage room with battery cabinets" },
  "commercial-ceiling-lighting-repair": { kind: "real", caption: "Ceiling light repair", alt: "Electricians repairing ceiling lighting in an office" },
  "commercial-distribution-board-rail-wiring": { kind: "real", caption: "Distribution board wiring", alt: "Din-rail breakers wired inside a distribution board" },
  "commercial-electrical-services": { kind: "real", caption: "Neatly wired distribution board", alt: "Open distribution board with neatly wired breakers" },
  "commercial-interior-ceiling-wiring-installation": { kind: "real", caption: "Ceiling wiring", alt: "Ceiling wiring installed in an empty commercial space" },
  "commercial-inverter-and-battery-bank-system": { kind: "real", caption: "Inverters and battery bank", alt: "Wall-mounted inverters beside a rack of lithium batteries" },
  "commercial-park-rooftop-solar-installation-aerial": { kind: "real", caption: "Business park rooftop solar", alt: "Aerial view of rooftop solar on a business park" },
  "commercial-rooftop-solar-array-drone-view": { kind: "real", caption: "Rooftop solar from above", alt: "Aerial view of solar panels on a commercial roof" },
  "commercial-rooftop-solar-array-system": { kind: "real", caption: "Installers on a tiled roof", alt: "Two installers fitting solar panels on a tiled roof" },
  "commercial-sub-panel-installation": { kind: "real", caption: "Sub-panel installation", alt: "Sub-panel enclosure being installed on a wall" },
  "containerized-industrial-solar-generator-system": { kind: "real", caption: "Industrial solar generator unit", alt: "Containerised industrial solar generator unit" },
  "corrugated-roof-solar-panel-array": { kind: "real", caption: "Solar panels on a roof", alt: "Solar panel array on a house roof" },
  "dahua-intercom-access-control-keypad": { kind: "real", caption: "Dahua access terminal", alt: "Dahua access control terminal mounted at a gate" },
  "driveway-gate-automation-wiring": { kind: "real", caption: "Gate automation wiring", alt: "Electrician installing gate automation wiring at a driveway" },
  "electric-fence-installation-warning-sign": { kind: "stock", caption: "Electric fence warning sign", alt: "Danger electric fence warning sign on a fence wire" },
  "electric-fence-repair-and-installation": { kind: "real", caption: "Electric fence equipment", alt: "Electric fence equipment enclosure behind a security cage" },
  "electrical-db-board-maintenance": { kind: "real", caption: "DB board maintenance", alt: "Modern distribution board with an alarm keypad beside it" },
  "electrical-equipment-repair": { kind: "real", caption: "Rewiring a distribution box", alt: "Open distribution box with loose coloured wires ready for rewiring" },
  "electrical-inspection-multimeter-testing": { kind: "real", caption: "Inspecting a DB board", alt: "Electrician testing a distribution board with a multimeter and a checklist" },
  "electrical-wiring-and-conduit-installation": { kind: "stock", caption: "Wiring work", alt: "Electrician working on wiring above a metal frame" },
  "electricians-foundation-conduit-trenching-site": { kind: "real", caption: "Outdoor distribution box", alt: "Electrician in a hi-vis vest working at an outdoor distribution box beside a palisade fence" },
  "freestanding-agricultural-electric-fence-post": { kind: "real", caption: "Free-standing fence", alt: "Free-standing fence post with wire strands" },
  "hybrid-inverter-and-lithium-battery-backup-system": { kind: "real", caption: "Hybrid inverter and lithium batteries", alt: "Wall-mounted hybrid inverter above three stacked lithium batteries" },
  "industrial-capacitor-bank-power-factor-correction": { kind: "real", caption: "Capacitor bank", alt: "Capacitors inside an industrial power factor correction bank" },
  "industrial-main-switchgear-orange-panels": { kind: "real", caption: "Industrial switchgear", alt: "Orange industrial main switchgear panels" },
  "industrial-three-phase-panel-wiring": { kind: "real", caption: "Three-phase panel wiring", alt: "Electrician wiring contactors in a three-phase panel" },
  "industrial-warehouse-rooftop-solar-system": { kind: "real", caption: "Warehouse rooftop solar", alt: "Solar panels on a warehouse roof" },
  "nemtek-electric-fence-warning-sign": { kind: "real", caption: "Electric fence warning sign", alt: "Electric fence warning sign on a residential fence" },
  "nemtek-wizord-4-electric-fence-energizer": { kind: "real", caption: "Nemtek Wizord 4 energiser", alt: "Nemtek Wizord 4 electric fence energiser mounted on a wall" },
  "office-complex-solar-panel-roof-installation": { kind: "real", caption: "Office complex solar", alt: "Aerial view of solar panels on an office complex" },
  "outdoor-beam-alarm-sensor-installation": { kind: "real", caption: "Outdoor beam sensor", alt: "Outdoor alarm beam sensor mounted on a wall" },
  "outdoor-bullet-cctv-camera-brick-wall": { kind: "real", caption: "Bullet CCTV camera", alt: "Bullet CCTV camera mounted on a brick wall" },
  "outdoor-cctv-security-light-repair": { kind: "real", caption: "Security light repair", alt: "Electrician on a ladder repairing a pole-mounted security light" },
  "outdoor-feeder-pillar-box-maintenance": { kind: "real", caption: "Feeder pillar maintenance", alt: "Electrician working inside an open feeder pillar" },
  "outdoor-main-electrical-enclosure-box": { kind: "real", caption: "Outdoor main enclosure", alt: "Orange outdoor main electrical enclosure" },
  "perimeter-free-standing-electric-fencing-plot": { kind: "real", caption: "Perimeter fencing on a plot", alt: "Free-standing perimeter fence posts on an open plot" },
  "plastered-wall-top-electric-fence-installation": { kind: "real", caption: "Wall-top electric fence", alt: "Electric fence on a plastered boundary wall with a warning sign" },
  "residential-cctv-camera-installation": { kind: "real", caption: "Home CCTV camera", alt: "CCTV camera mounted on the brick corner of a house" },
  "residential-distribution-board-installation": { kind: "real", caption: "Home distribution board", alt: "New distribution board with an alarm keypad beside it" },
  "residential-electrical-services": { kind: "real", caption: "Neat board terminals", alt: "Distribution board with neatly terminated wiring" },
  "residential-home-solar-system-installation": { kind: "real", caption: "Home solar system", alt: "Solar panels installed on a brick house roof" },
  "residential-pool-filter-and-water-pump-system": { kind: "real", caption: "Pool filter and pump", alt: "Pool filter and water pump beside a house" },
  "residential-solar-geyser-tiled-roof": { kind: "real", caption: "Solar geyser on a tiled roof", alt: "Solar geyser mounted on a tiled roof" },
  "residential-solar-panel-setup": { kind: "real", caption: "Home solar panels", alt: "Solar panels on a house roof" },
  "residential-wall-top-electric-fence": { kind: "real", caption: "Residential wall-top fence", alt: "Electric fence along a residential boundary wall" },
  "rooftop-solar-panels-and-solar-geyser-system": { kind: "real", caption: "Solar panels on a flat roof", alt: "Solar panels on a flat roof" },
  "solar-installation-team-on-commercial-roof": { kind: "real", caption: "Installers on a commercial roof", alt: "Installation team working on a large solar roof" },
  "solar-panel-roof-maintenance-cleaning": { kind: "real", caption: "Rooftop solar panels", alt: "Solar panels on a roof beside a communications tower" },
  "technician-repairing-outdoor-electrical-distribution-box": { kind: "real", caption: "Orange distribution panel", alt: "Orange outdoor distribution panel" },
  "voltage-multimeter-testing-230v": { kind: "stock", caption: "Multimeter reading 230 volts", alt: "Multimeter reading 230 volts on terminal blocks" },
  "wall-top-electric-fence-bracket-wiring": { kind: "real", caption: "Fence bracket wiring", alt: "Electric fence brackets and wiring on a wall" },
  "solars_1": { kind: "real", caption: "Ground-mounted solar array", alt: "Aerial view of a ground-mounted solar array" },
}

/** Look a photo up by its public path, for example "/pr/power-rescue-nemtek-wizord-4-electric-fence-energizer.jpg" */
export function photoInfo(src: string): PhotoInfo | undefined {
  const name = src.split("/").pop() ?? ""
  const key = name.replace(/\.[a-z0-9]+$/i, "").replace(/^power-rescue-/, "")
  return PHOTOS[key]
}

/** True only for genuine job photos. Use this wherever the page says "our work" or "real jobs". */
export function isRealPhoto(src: string): boolean {
  return photoInfo(src)?.kind === "real"
}
