type PhotoMeta = { caption: string; watermark: boolean }

// Real Borehole Works job photos from /gallery. Irrigation shots already carry
// their own watermark in the source file, so the droplet overlay is skipped.
export const GALLERY = {
  "/borehole_drilling_water_gushing.jpg": { caption: "Borehole drilling, water strike", watermark: true },
  "/borehole_drilling_rig_action.webp": { caption: "Drilling rig on site", watermark: true },
  "/pump_installation_hero.jpg": { caption: "Pump installation", watermark: true },
  "/water_pump_installation.jpg": { caption: "Submersible pump installation", watermark: true },
  "/pump_systems_boreholes.jpg": { caption: "Borehole pump system", watermark: true },
  "/borehole_pump_water_tank_installation.jpg": { caption: "Borehole pump feeding a storage tank", watermark: true },
  "/pressure_pumps_installations.jpg": { caption: "Pressure pump installation", watermark: true },
  "/pump_supply_replacements.jpg": { caption: "Pump breakdown and replacement", watermark: true },
  "/jojo_installation.jpg": { caption: "Water tank installation", watermark: true },
  "/jojo_tank_installation.jpg": { caption: "Tank on stand", watermark: true },
  "/jojo_tank_installation_randburg.jpg": { caption: "Tank installation, Randburg", watermark: true },
  "/3_jojo_tank_installation.jpg": { caption: "Multiple tank installation", watermark: true },
  "/water_pump_for_Jojo_tank.jpg": { caption: "Pump fitted for a tank system", watermark: true },
  "/eco_water_tanks_installation.jpg": { caption: "Eco water tank installation", watermark: true },
  "/green_water_tank_installation.jpg": { caption: "Water tank installation", watermark: true },
  "/pump_tank_storage_installation.jpg": { caption: "Pump installed for tank storage", watermark: true },
  "/solar_borehole_pump_aerial_view.jpg": { caption: "Solar borehole pump, aerial view", watermark: true },
  "/solar_borehole_tank_installation.jpg": { caption: "Solar-powered tank installation", watermark: true },
  "/solar_geyser_installation_pretoria.jpg": { caption: "Solar geyser installation, Pretoria", watermark: true },
  "/apollo_solar_geyser_installation.jpg": { caption: "Apollo solar geyser installation", watermark: true },
  "/pump_system_installation.webp": { caption: "Pump system installation", watermark: true },
  "/water-pump-tank-pipes-green.webp": { caption: "Pump and tank pipework", watermark: true },
  "/water-pump-tank-pipes-green-controls.webp": { caption: "Pump control system", watermark: true },
  "/Pump-and-tanks.jpg": { caption: "Pump and water tank installation", watermark: true },
  "/large_scale_drip_irrigation_farm.jpg": { caption: "Large scale drip irrigation", watermark: false },
  "/farm_workers_drip_irrigation.jpg": { caption: "Drip irrigated field", watermark: false },
  "/young_crops_drip_irrigation.jpg": { caption: "Young crops under drip irrigation", watermark: false },
  "/emergency_plumber_Gauteng.jpg": { caption: "Emergency plumbing callout", watermark: true },
  "/burst_pipe_centurion.jpg": { caption: "Burst pipe repair, Centurion", watermark: true },
  "/blocked_drains.jpg": { caption: "Blocked drain clearing", watermark: true },
  "/blocked_drains_pretoria.jpg": { caption: "Blocked drain clearing, Pretoria", watermark: true },
  "/geyser-installation.jpg": { caption: "Geyser installation", watermark: true },
  "/kwikot_geyser_installation.jpg": { caption: "Kwikot geyser installation", watermark: true },
  "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg": { caption: "Plumber at work on pipework", watermark: true },
  "/professional-plumber-working-on-pipes-installation.jpg": { caption: "Plumbing installation", watermark: true },
} as const satisfies Record<string, PhotoMeta>

export type GalleryPhoto = keyof typeof GALLERY

export function photoAlt(src: GalleryPhoto, areaName?: string) {
  const caption = GALLERY[src].caption
  return areaName ? `${caption} - Borehole Works, serving ${areaName}` : `${caption} - Borehole Works`
}
