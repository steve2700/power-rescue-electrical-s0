export type WorkItem = {
  number: string
  title: string
  copy: string
  image: string
  href: string
}

export const WORK: WorkItem[] = [
  {
    number: "01",
    title: "Water where you need it",
    copy: "Borehole drilling, pump systems and tanks designed around the way your property actually uses water.",
    image: "/borehole_drilling_water_gushing.jpg",
    href: "/borehole-drilling",
  },
  {
    number: "02",
    title: "The pressure, sorted",
    copy: "From a weak shower to a dry JoJo tank, we diagnose the system and install the right fix without guesswork.",
    image: "/pressure_pumps_installations.jpg",
    href: "/pump-installation-repairs",
  },
  {
    number: "03",
    title: "A team that leaves it better",
    copy: "Clean workmanship, clear communication and practical advice from the first call to the final test.",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    href: "/plumbing-services",
  },
]

export type ServiceIndexItem = {
  number: string
  title: string
  tag: string
  copy: string
  image: string
  href: string
}

export const SERVICE_INDEX: ServiceIndexItem[] = [
  {
    number: "01",
    title: "Borehole Drilling",
    tag: "Homes · Farms · Businesses",
    copy: "A free site assessment first, then drilling, casing and yield testing, so you know what your borehole can deliver before you build around it.",
    image: "/borehole_drilling_water_gushing.jpg",
    href: "/borehole-drilling",
  },
  {
    number: "02",
    title: "Pump Installation & Repairs",
    tag: "Homes · Farms · Businesses",
    copy: "Submersible, borehole and pressure pumps installed and repaired, with faults diagnosed properly instead of guessed at.",
    image: "/pump_installation_hero.jpg",
    href: "/pump-installation-repairs",
  },
  {
    number: "03",
    title: "Solar Borehole Pumps",
    tag: "Farms · Remote sites · Homes",
    copy: "Off-grid solar pumping sized to your borehole's yield, so water keeps flowing through load shedding.",
    image: "/solar_borehole_pump_aerial_view.jpg",
    href: "/solar-borehole-pumps",
  },
  {
    number: "04",
    title: "Irrigation Systems",
    tag: "Farms · Smallholdings · Gardens",
    copy: "Drip irrigation for farms, plots and gardens, fed straight from your borehole and designed around your land.",
    image: "/large_scale_drip_irrigation_farm.jpg",
    href: "/irrigation-systems",
  },
  {
    number: "05",
    title: "Water Tank Installation",
    tag: "Homes · Farms · Businesses",
    copy: "Tank sizing, stands, plumbing and pump systems, pressure tested before we hand over.",
    image: "/jojo_installation.jpg",
    href: "/jojo-water-tank-installation",
  },
  {
    number: "06",
    title: "Plumbing Services",
    tag: "Homes · Businesses",
    copy: "Installations, repairs and leak detection that connect your water system to your home or business.",
    image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg",
    href: "/plumbing-services",
  },
  {
    number: "07",
    title: "Emergency Plumber & Burst Pipes",
    tag: "24/7 · Homes · Businesses",
    copy: "Burst pipes and floods stopped first, day or night, before permanent repairs begin.",
    image: "/burst_pipe_centurion.jpg",
    href: "/emergency-plumber-burst-pipes",
  },
  {
    number: "08",
    title: "Geyser Installation & Repairs",
    tag: "Homes · Businesses",
    copy: "Electric, solar and Kwikot geysers installed, repaired and serviced, with insurance replacements handled.",
    image: "/kwikot_geyser_installation.jpg",
    href: "/geyser-installation-repairs",
  },
  {
    number: "09",
    title: "Blocked Drains Unblocking",
    tag: "Homes · Businesses",
    copy: "High-pressure jetting and CCTV inspection, so blockages are cleared properly and the cause is found.",
    image: "/blocked_drains.jpg",
    href: "/blocked-drains-unblocking",
  },
]

export type AudienceItem = {
  title: string
  copy: string
  image: string
  href: string
}

export type Audience = {
  label: string
  intro: string
  items: AudienceItem[]
}

export const AUDIENCES = {
  homes: {
    label: "Homes",
    intro: "Independent water, steady pressure and backup for when the municipality lets you down.",
    items: [
      { title: "Borehole Drilling", copy: "Your own water supply, assessed honestly before we drill.", image: "/borehole_drilling_rig_action.webp", href: "/borehole-drilling" },
      { title: "Pump Installation & Repairs", copy: "Steady pressure from the tap to the garden.", image: "/water_pump_installation.jpg", href: "/pump-installation-repairs" },
      { title: "Water Tank Installation", copy: "Storage and backup so dry taps stop being a surprise.", image: "/eco_water_tanks_installation.jpg", href: "/jojo-water-tank-installation" },
    ],
  },
  farms: {
    label: "Farms & smallholdings",
    intro: "Reliable water for crops, livestock and the whole property, wherever the grid doesn't reach.",
    items: [
      { title: "Borehole Drilling", copy: "A dependable source for the whole property, tested for yield first.", image: "/borehole_drilling_water_gushing.jpg", href: "/borehole-drilling" },
      { title: "Irrigation Systems", copy: "Drip irrigation fed straight from your borehole.", image: "/large_scale_drip_irrigation_farm.jpg", href: "/irrigation-systems" },
      { title: "Solar Borehole Pumps", copy: "Off-grid pumping for remote fields and troughs.", image: "/solar_borehole_tank_installation.jpg", href: "/solar-borehole-pumps" },
    ],
  },
  business: {
    label: "Businesses",
    intro: "Reliable water and fast callouts, so downtime doesn't cost you customers.",
    items: [
      { title: "Pump Installation & Repairs", copy: "Pressure systems and breakdown repairs done properly.", image: "/pump_system_installation.webp", href: "/pump-installation-repairs" },
      { title: "Plumbing Services", copy: "Installations, repairs and leak detection.", image: "/professional-plumber-working-on-pipes-installation.jpg", href: "/plumbing-services" },
      { title: "Emergency Plumber", copy: "Burst pipes and floods dealt with fast, day or night.", image: "/emergency_plumber_Gauteng.jpg", href: "/emergency-plumber-burst-pipes" },
    ],
  },
} as const satisfies Record<string, Audience>

export type AudienceKey = keyof typeof AUDIENCES
export const AUDIENCE_KEYS = Object.keys(AUDIENCES) as AudienceKey[]

export const GALLERY_STRIP: string[] = [
  "/pump_system_installation.webp",
  "/jojo_tank_installation.jpg",
  "/solar_borehole_tank_installation.jpg",
  "/blocked_drains.jpg",
  "/geyser-installation.jpg",
]

export type HeroImage = { src: string; alt: string }

export const HERO_IMAGES: HeroImage[] = [
  { src: "/borehole_drilling_rig_action.webp", alt: "Borehole drilling rig working in Gauteng" },
  { src: "/pump_installation_hero.jpg", alt: "Borehole pump installation in Gauteng" },
  { src: "/jojo_tank_installation.jpg", alt: "JoJo water tank installation in Gauteng" },
  { src: "/borehole_pump_water_tank_installation.jpg", alt: "Borehole pump and water tank system" },
]
