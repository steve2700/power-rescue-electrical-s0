export const JOB_TYPES = [
  { id: "emergency", label: "Emergency repair", hint: "Tripping, sparks, no power", image: "/pr/job-emergency.png" },
  { id: "install", label: "New installation", hint: "Lights, plugs, wiring", image: "/pr/job-install.png" },
  { id: "maintenance", label: "Maintenance or COC", hint: "Checks and certificates", image: "/pr/job-maintenance.png" },
  { id: "solar", label: "Solar or backup", hint: "Panels, inverters, batteries", image: "/pr/job-solar.png" },
] as const

export const WHEN_OPTIONS = [
  { id: "now", label: "Right now", hint: "It is an emergency" },
  { id: "today", label: "Later today", hint: "Before the evening" },
  { id: "week", label: "This week", hint: "Any day that suits" },
  { id: "planning", label: "Just planning", hint: "Send me a quote" },
] as const

export const QUICK_AREAS = ["Sandton", "Midrand", "Centurion", "Pretoria East", "Randburg", "Kempton Park"]

export const HERO_PILLS = ["Emergency repairs", "Installations", "Maintenance", "Solar systems"]

export const PROMISES = [
  { title: "Day and night", copy: "Breakers do not trip on a schedule. Our line is answered after hours and over weekends." },
  { title: "Price before work", copy: "You get the cost upfront. No surprise call out add ons once we are already on site." },
  { title: "COC on completion", copy: "Registered electricians who sign off their own work and hand over the paperwork." },
  { title: "We clean up", copy: "Offcuts, dust and old fittings leave with us. Your home looks like we were never there." },
]

export const CALLOUT_STEPS = [
  { n: "01", title: "Send the job card", copy: "Tell us what is wrong, where you are and how soon. It lands on our WhatsApp straight away." },
  { n: "02", title: "We call you back", copy: "An electrician, not a call centre, phones you to understand the problem and give a price." },
  { n: "03", title: "Fixed and signed off", copy: "We arrive, repair it properly, test everything and leave a COC where one is needed." },
]

export const BACKUP_POINTS = [
  "Inverter and battery sized to what you actually run",
  "Essential circuits split out on their own board",
  "Solar ready, so panels can be added later",
  "Neat trunking and labelled isolators",
]
