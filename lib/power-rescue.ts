export type Service = {
  slug: string
  title: string
  short: string
  copy: string
  tag: string
  image: string
}

export const SERVICES: Service[] = [
  {
    slug: "emergency-electrical-repairs",
    title: "Emergency Electrical Repairs",
    short: "Tripping, burning smells, no power",
    copy: "Main switch keeps tripping, half the house is dark or something smells like it is burning. We isolate the fault first, make it safe, then fix it properly.",
    tag: "Day and night",
    image: "/pr/hero-db-board.png",
  },
  {
    slug: "electrical-installations",
    title: "Electrical Installations and Wiring",
    short: "New builds, renovations, additions",
    copy: "Wiring for new builds, extensions and kitchen remodels, planned with you before the walls close up, so plugs and switches end up where you actually need them.",
    tag: "Homes and businesses",
    image: "/pr/lighting-install.png",
  },
  {
    slug: "electrical-maintenance-fault-finding",
    title: "Electrical Maintenance and Fault Finding",
    short: "Scheduled checks and repairs",
    copy: "Routine inspections for homes, offices and complexes. We test circuits, earth leakage and connections, and catch the small problems before they become callouts.",
    tag: "Planned or once off",
    image: "/pr/maintenance-test.png",
  },
  {
    slug: "solar-installation",
    title: "Solar PV Installation",
    short: "Panels sized to your usage",
    copy: "Rooftop solar designed around your real consumption, not a sales target. Mounting, wiring, commissioning and paperwork included.",
    tag: "Grid tied and hybrid",
    image: "/pr/solar-roof.png",
  },
  {
    slug: "inverter-battery-backup",
    title: "Inverter and Battery Backup Installation",
    short: "Keep the lights on through load shedding",
    copy: "Hybrid inverters and lithium batteries installed neatly, with essential circuits split out so the fridge, Wi-Fi and lights stay on.",
    tag: "Load shedding ready",
    image: "/pr/inverter-install.png",
  },
  {
    slug: "electrical-coc-certificate",
    title: "Electrical COC Certificates",
    short: "COC for selling or insurance",
    copy: "Selling your home or sorting an insurance claim? We inspect, repair what needs repairing and issue a valid electrical Certificate of Compliance (COC).",
    tag: "Registered electricians",
    image: "/pr/maintenance-test.png",
  },
  {
    slug: "db-board-upgrades",
    title: "DB Board Upgrades and Replacements",
    short: "Old boards replaced safely",
    copy: "Old distribution boards with ceramic fuses or missing earth leakage replaced with a clean, labelled, compliant DB board.",
    tag: "Safety first",
    image: "/pr/hero-db-board.png",
  },
  {
    slug: "lighting-plug-point-installation",
    title: "Lighting and Plug Point Installation",
    short: "Indoor, outdoor and security lights",
    copy: "Downlights, pendants, garden and security lighting plus extra plug points, fitted cleanly with no chased walls left behind.",
    tag: "Small jobs welcome",
    image: "/pr/lighting-install.png",
  },
]

export const AREAS = [
  "Johannesburg",
  "Sandton",
  "Randburg",
  "Roodepoort",
  "Midrand",
  "Centurion",
  "Pretoria",
  "Pretoria East",
  "Kempton Park",
  "Benoni",
  "Boksburg",
  "Germiston",
  "Alberton",
  "Soweto",
  "Krugersdorp",
  "Fourways",
]
