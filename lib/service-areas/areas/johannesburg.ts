import type { ServiceArea } from "../types"

export const johannesburg: ServiceArea = {
  slug: "johannesburg",
  name: "Johannesburg",
  municipality: "City of Johannesburg",
  character: "An old, overworked network. Planning for the next outage is the job.",
  geo: { lat: -26.2041, lng: 28.0473 },
  metaTitle: "Plumber, Water Tanks & Boreholes in Johannesburg",
  metaDescription:
    "Emergency plumbing, burst pipes, JoJo tanks, pressure pumps and boreholes across Johannesburg, from Melville and Houghton to the CBD. Homes and businesses. Call 072 411 5472.",
  keywords: [
    "plumber Johannesburg",
    "emergency plumber Johannesburg",
    "water tank installation Johannesburg",
    "borehole Johannesburg",
    "pressure pump Johannesburg",
    "commercial water backup Johannesburg",
  ],
  headline: "Plumbing, pumps and water backup across Johannesburg",
  lede:
    "From Melville to Houghton and the CBD, Joburg's water network is old and under strain. We help homes and businesses stop depending on it completely.",
  heroPhotos: ["/Pump-and-tanks.jpg", "/emergency_plumber_Gauteng.jpg", "/pump_supply_replacements.jpg"],
  facts: [
    { label: "Municipality", value: "City of Johannesburg" },
    { label: "We cover", value: "Suburbs, CBD and commercial" },
    { label: "Most asked for", value: "Backup tanks, burst pipes" },
    { label: "Also common", value: "Boreholes, commercial storage" },
  ],
  story: {
    heading: "Living with Joburg's water network",
    paragraphs: [
      "Johannesburg Water has been dealing with ageing pipes, reservoir pressure and repeated outages across the city. For many households a day without water is no longer unusual, and a week is not unheard of.",
      "We look at each property and suggest the simplest thing that will actually work: a tank and pump for most homes, a borehole where the ground and the stand allow it, and proper repairs to the plumbing already in the walls.",
      "Businesses have the same problem with higher stakes. Restaurants, salons and small factories cannot trade without water, so we set up commercial storage and pumping that carries them through an outage.",
    ],
    pullQuote: "Planning for the next outage is cheaper than paying for the last one.",
    photo: "/emergency_plumber_Gauteng.jpg",
  },
  callouts: [
    {
      service: "emergency",
      title: "Burst pipes and emergency callouts",
      copy: "Tell us your suburb and what is happening, and you get a straight answer on when we can be there.",
      photo: "/emergency_plumber_Gauteng.jpg",
    },
    {
      service: "tanks",
      title: "Tank and pump backup systems",
      copy: "Storage that fills when supply is on, with a pump and bypass so the house or shop keeps running when it is off.",
      photo: "/Pump-and-tanks.jpg",
    },
    {
      service: "borehole",
      title: "Boreholes where the stand allows",
      copy: "Drilled, tested and plumbed into storage, so the water ends up in your taps and not only in the ground.",
      photo: "/borehole_pump_water_tank_installation.jpg",
    },
    {
      service: "pumps",
      title: "Pump breakdowns and replacements",
      copy: "Diagnosed on site, repaired where it makes sense, replaced with the right size when it does not.",
      photo: "/pump_supply_replacements.jpg",
    },
    {
      service: "solar",
      title: "Solar pumping for larger stands",
      copy: "Where a borehole is possible, a solar pump takes the heaviest water use off both the municipal supply and the power grid.",
      photo: "/solar_borehole_tank_installation.jpg",
    },
    {
      service: "irrigation",
      title: "Irrigation and food gardens",
      copy: "Drip systems fed from a tank or borehole, so gardens and food beds keep growing through restrictions and outages.",
      photo: "/young_crops_drip_irrigation.jpg",
    },
    {
      service: "plumbing",
      title: "Plumbing for older Joburg properties",
      copy: "Repairs, replacements and leak detection in homes and commercial premises, from Melville to the CBD.",
      photo: "/professional-plumber-working-on-pipes-installation.jpg",
    },
    {
      service: "geysers",
      title: "Geysers for homes and businesses",
      copy: "Burst or failing geysers replaced, valves and elements repaired, with a compliance certificate where needed.",
      photo: "/kwikot_geyser_installation.jpg",
    },
    {
      service: "drains",
      title: "Blocked drains, homes and businesses",
      copy: "Restaurants, salons and households cleared quickly, and the cause found so it does not come straight back.",
      photo: "/blocked_drains.jpg",
    },
  ],
  suburbs: [
    "Parktown", "Melrose", "Hyde Park", "Bryanston", "Norwood", "Houghton", "Johannesburg CBD", "Melville",
    "Greenside", "Parkhurst", "Illovo",
  ],
  faqs: [
    {
      q: "Do you offer emergency plumbing in Johannesburg?",
      a: "Yes. Burst pipes, major leaks and geyser failures are priority callouts. Call, tell us your suburb, and we will give you a realistic arrival time.",
    },
    {
      q: "Can businesses in the CBD get backup water?",
      a: "Yes. We install commercial tanks and pump sets for shops, restaurants and small factories, sized to your actual daily use.",
    },
    {
      q: "Do I need to register my borehole with the City?",
      a: "The City of Johannesburg expects private boreholes to be registered. We explain the process and what you need when we quote.",
    },
    {
      q: "Can you fix low pressure without a tank?",
      a: "Sometimes. If the cause is a failing valve, a faulty pressure reducer or corroded pipes, repairing that may be enough. We check before recommending a tank.",
    },
  ],
  nearby: ["sandton", "rosebank", "randburg", "roodepoort", "bedfordview", "midrand"],
  marquee: [
    "/Pump-and-tanks.jpg",
    "/emergency_plumber_Gauteng.jpg",
    "/pump_supply_replacements.jpg",
    "/borehole_pump_water_tank_installation.jpg",
    "/pump_tank_storage_installation.jpg",
    "/blocked_drains.jpg",
  ],
}
