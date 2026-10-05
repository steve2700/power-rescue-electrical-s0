export const SERVICES = {
  borehole: { name: "Borehole drilling", href: "/borehole-drilling" },
  pumps: { name: "Pump installation and repairs", href: "/pump-installation-repairs" },
  solar: { name: "Solar borehole pumps", href: "/solar-borehole-pumps" },
  tanks: { name: "JoJo water tanks", href: "/jojo-water-tank-installation" },
  irrigation: { name: "Irrigation systems", href: "/irrigation-systems" },
  plumbing: { name: "Plumbing", href: "/plumbing-services" },
  geysers: { name: "Geyser installation and repairs", href: "/geyser-installation-repairs" },
  drains: { name: "Blocked drains", href: "/blocked-drains-unblocking" },
  emergency: { name: "Burst pipes and emergencies", href: "/emergency-plumber-burst-pipes" },
} as const

export type ServiceKey = keyof typeof SERVICES

export const JOB_TYPES = [
  "No water or low pressure",
  "Borehole pump not working",
  "New borehole",
  "Water tank and pump",
  "Burst pipe or leak",
  "Geyser problem",
  "Blocked drain",
  "Irrigation or solar pump",
] as const
