export type Faq = { q: string; a: string }

export type ServicePageData = {
  slug: string
  metaTitle: string
  metaDescription: string
  h1: string
  h1Accent: string
  lead: string
  heroImage: string
  keyFacts: string[]
  explorer: {
    eyebrow: string
    heading: string
    intro: string
    items: { label: string; meaning: string; action: string }[]
  }
  planner?: { eyebrow: string; heading: string; intro: string }
  smallJobs?: { heading: string; intro: string; items: string[] }
  includes: { title: string; copy: string }[]
  gallery: { src: string; alt: string; caption: string }[]
  stepsHeading: string
  steps: { title: string; copy: string }[]
  faqs: Faq[]
  related: string[]
}

const P = "/pr/power-rescue-"

export const SERVICE_PAGES: Record<string, ServicePageData> = {
  "electrical-installations": {
    slug: "electrical-installations",
    metaTitle: "Electrical Installations & Wiring Gauteng | Power Rescue Electrical",
    metaDescription:
      "Registered electricians for new builds, extensions, rewiring and commercial installations across Gauteng. Planned with you, tested, COC issued. Call 063 039 2007.",
    h1: "Electrical installations and wiring",
    h1Accent: "planned before the walls close.",
    lead: "New builds, extensions, kitchen remodels, rewires and commercial fit-outs. We plan the layout with you first, so plugs, switches and lights end up exactly where you will use them.",
    heroImage: `${P}electrical-wiring-and-conduit-installation.jpg`,
    keyFacts: ["Registered electricians", "COC issued on completion", "Homes, shops and industrial sites", "Tested before handover"],
    explorer: {
      eyebrow: "What are you building?",
      heading: "Tell us the job. We will tell you what it needs.",
      intro: "Pick the closest match to see how we usually approach it.",
      items: [
        { label: "New build", meaning: "Wiring has to be planned around the architect's drawings and how you will live in the house.", action: "We agree the layout with you, install conduit and wiring, fit the DB board, test everything and issue the COC." },
        { label: "Extension or renovation", meaning: "New rooms put extra load on your existing board and circuits.", action: "We check the existing installation, add circuits where they are needed and upgrade the board if it cannot cope." },
        { label: "Full rewire", meaning: "Old or damaged wiring is the usual reason, often found when a house is bought or insured.", action: "We replace the wiring and protection in stages that suit you, then test and certify the whole installation." },
        { label: "Shop, office or workshop", meaning: "Commercial spaces need a layout that suits equipment, lighting and future changes.", action: "We plan circuits and sub-boards around your equipment and keep disruption to trading hours as low as we can." },
        { label: "Three-phase supply", meaning: "Workshops, pumps and heavy machinery often need a three-phase supply and properly rated protection.", action: "We design, install and test the three-phase panel and wiring, and make sure the protection matches the load." },
      ],
    },
    includes: [
      { title: "Planning with you", copy: "A walk-through before work starts, so the layout fits how you live or work." },
      { title: "Conduit and wiring", copy: "Neat, correctly sized cabling run safely through walls, ceilings and trenches." },
      { title: "DB and sub-boards", copy: "A clean, labelled board with the right protection for each circuit." },
      { title: "Plugs, switches and lights", copy: "Fitted and tested, with walls left tidy." },
      { title: "Testing and COC", copy: "The installation is tested and a Certificate of Compliance issued." },
      { title: "Straight quoting", copy: "A clear quote after we have seen the job, so there are no surprises." },
    ],
    gallery: [
      { src: `${P}electrical-wiring-and-conduit-installation.jpg`, alt: "Electrical wiring and conduit installation", caption: "Conduit and wiring" },
      { src: `${P}commercial-sub-panel-installation.jpg`, alt: "Commercial sub-panel installation", caption: "Commercial sub-panel" },
      { src: `${P}industrial-three-phase-panel-wiring.jpg`, alt: "Industrial three-phase panel wiring", caption: "Three-phase panel" },
      { src: `${P}residential-distribution-board-installation.jpg`, alt: "Residential distribution board installation", caption: "Residential distribution board" },
    ],
    stepsHeading: "From first call to certified installation.",
    steps: [
      { title: "Walk the job", copy: "We look at the site or plans and agree what you need." },
      { title: "Clear quote", copy: "You get a straightforward quote, not a vague range." },
      { title: "Install and test", copy: "We wire, fit and test, working around your routine." },
      { title: "Handover and COC", copy: "We walk you through it and issue your certificate." },
    ],
    faqs: [
      { q: "Do you issue a COC after an installation?", a: "Yes. Our electricians are registered and we issue a Certificate of Compliance when the installation is complete and tested." },
      { q: "Can you work from architect's plans?", a: "Yes. Send the plans on WhatsApp or email and we will quote from them, then confirm details on site." },
      { q: "Do you do commercial and three-phase work?", a: "Yes. We install sub-boards, three-phase panels and wiring for shops, offices and workshops." },
      { q: "Can you add plug points or circuits to an existing house?", a: "Yes. We check your board has capacity first, then add the circuits and protection needed." },
    ],
    related: ["db-board-upgrades", "lighting-plug-point-installation", "electrical-coc-certificate"],
  },

  "electrical-maintenance-fault-finding": {
    slug: "electrical-maintenance-fault-finding",
    metaTitle: "Electrical Maintenance & Fault Finding Gauteng | Power Rescue",
    metaDescription:
      "Electrical inspections, fault finding and planned maintenance for homes, offices and complexes across Gauteng. Registered electricians. Call 063 039 2007.",
    h1: "Electrical maintenance and fault finding",
    h1Accent: "before it becomes a call-out.",
    lead: "Flickering lights, warm sockets and breakers that trip now and then are warnings. We test circuits, earth leakage and connections to find the cause, then fix it properly.",
    heroImage: `${P}electrical-inspection-multimeter-testing.jpg`,
    keyFacts: ["Registered electricians", "Homes, offices and complexes", "Planned or once-off", "Fault found, then fixed"],
    explorer: {
      eyebrow: "What are you noticing?",
      heading: "Small signs worth taking seriously.",
      intro: "Choose what you are seeing to learn what it usually points to.",
      items: [
        { label: "Lights flicker or dim", meaning: "Often a loose connection, a failing fitting or an overloaded circuit.", action: "We test the circuit and connections, find the weak point and repair it." },
        { label: "A breaker trips now and then", meaning: "Something is overloading or leaking on that circuit, even if it only happens occasionally.", action: "We isolate the circuit, test it and find what is causing the trip rather than just resetting it." },
        { label: "Warm plugs or switches", meaning: "Heat usually means a loose or overloaded connection, which is a fire risk.", action: "Stop using it and call us. We inspect, tighten or replace the connection and check the circuit." },
        { label: "Buzzing from the DB board", meaning: "Loose terminals or a failing breaker can buzz before they fail.", action: "We inspect the board, tighten and test connections and replace anything worn." },
        { label: "A tingle from a tap or appliance", meaning: "This can point to an earthing fault, which needs attention straight away.", action: "Switch off what you can safely and call us. We test earthing and earth leakage protection." },
        { label: "Scheduled checks for a complex or office", meaning: "Regular testing catches wear before it causes downtime.", action: "We agree a schedule, inspect and test each installation and report what needs attention." },
      ],
    },
    includes: [
      { title: "Circuit testing", copy: "Each circuit checked for faults, overload and wear." },
      { title: "Earth leakage testing", copy: "Protection devices tested so they trip when they should." },
      { title: "Connection checks", copy: "Terminals, plugs and switches checked for heat and looseness." },
      { title: "Clear report", copy: "You are told what we found and what needs doing, in plain language." },
      { title: "Repairs on the spot", copy: "Most faults are fixed during the visit, with parts quoted first." },
      { title: "Planned programmes", copy: "Regular checks for complexes, offices and landlords." },
    ],
    gallery: [
      { src: `${P}electrical-inspection-multimeter-testing.jpg`, alt: "Electrical inspection with multimeter testing", caption: "Inspection and testing" },
      { src: `${P}voltage-multimeter-testing-230v.jpg`, alt: "Voltage multimeter testing at 230V", caption: "Voltage testing" },
      { src: `${P}electrical-db-board-maintenance.jpg`, alt: "Electrical DB board maintenance", caption: "DB board maintenance" },
      { src: `${P}commercial-ceiling-lighting-repair.jpg`, alt: "Commercial ceiling lighting repair", caption: "Commercial lighting repair" },
    ],
    stepsHeading: "How we find and fix the fault.",
    steps: [
      { title: "Tell us the symptoms", copy: "Call or WhatsApp what you are seeing, with photos if you can." },
      { title: "Test on site", copy: "We test circuits and protection to find the actual cause." },
      { title: "Explain and quote", copy: "You hear what we found and what it will take to fix." },
      { title: "Repair and retest", copy: "We fix it, then test again to confirm." },
    ],
    faqs: [
      { q: "What is fault finding?", a: "It is testing the installation to locate the exact cause of a problem such as a tripping breaker or dead circuit, instead of guessing and replacing parts." },
      { q: "Do you offer regular maintenance for complexes and offices?", a: "Yes. We can set up planned inspections and testing, and report on what needs attention." },
      { q: "How often should an electrical installation be inspected?", a: "It depends on age and use. Older installations, rentals and commercial sites benefit from regular checks. We can advise on your property." },
      { q: "Can you also issue a COC after repairs?", a: "Yes. Where repairs or inspection call for a certificate, we issue a COC." },
    ],
    related: ["emergency-electrical-repairs", "db-board-upgrades", "electrical-coc-certificate"],
  },

  "solar-installation": {
    slug: "solar-installation",
    metaTitle: "Solar Installation Gauteng | Home & Business Solar | Power Rescue",
    metaDescription:
      "Solar PV installation for homes and businesses across Gauteng, sized to your real usage. Mounting, wiring, commissioning and paperwork included. Call 063 039 2007.",
    h1: "Solar installation in Gauteng",
    h1Accent: "sized to what you actually use.",
    lead: "Rooftop solar designed around your real consumption, not a sales target. Mounting, wiring, commissioning and the required paperwork are all part of the job.",
    heroImage: `${P}residential-home-solar-system-installation.jpg`,
    keyFacts: ["Designed around your usage", "Grid-tied and hybrid", "Homes and commercial roofs", "Paperwork included"],
    explorer: {
      eyebrow: "Why solar?",
      heading: "What are you trying to solve?",
      intro: "Your goal decides the design. Pick the closest one.",
      items: [
        { label: "High electricity bills", meaning: "Solar can cover a chunk of daytime usage, which is where many bills come from.", action: "We look at your usage and design a system that offsets what you actually consume." },
        { label: "Load shedding", meaning: "Panels alone stop when the grid does. Keeping the lights on needs a hybrid inverter and battery.", action: "We design a hybrid system with essential circuits kept running. See our backup power page." },
        { label: "Business running costs", meaning: "Businesses use most of their power in daylight, which suits solar well.", action: "We assess your roof and consumption and size a system around your operating hours." },
        { label: "Remote or off-grid site", meaning: "Off-grid needs panels, batteries and an inverter designed carefully together.", action: "We design the whole system around your loads and site conditions." },
        { label: "Adding to an existing system", meaning: "More panels or batteries must match your existing inverter and wiring.", action: "We check what you have and tell you honestly what can be added and what cannot." },
      ],
    },
    planner: {
      eyebrow: "Rough load planner",
      heading: "What do you want solar to power?",
      intro: "Tap what matters. You will see a rough running load and can send it to us on WhatsApp.",
    },
    includes: [
      { title: "Usage-based design", copy: "System size based on your real consumption and goals." },
      { title: "Roof assessment", copy: "We check your roof, orientation and mounting options." },
      { title: "Mounting and panels", copy: "Panels fitted securely on tiled, corrugated or flat roofs." },
      { title: "Wiring and protection", copy: "Correct cabling, isolators and protection throughout." },
      { title: "Commissioning", copy: "The system is tested and commissioned before handover." },
      { title: "Paperwork", copy: "The required paperwork and certification are handled with the job." },
    ],
    gallery: [
      { src: `${P}residential-home-solar-system-installation.jpg`, alt: "Residential home solar system installation", caption: "Home solar system" },
      { src: `${P}corrugated-roof-solar-panel-array.jpg`, alt: "Solar panel array on a corrugated roof", caption: "Corrugated roof array" },
      { src: `${P}commercial-rooftop-solar-array-system.jpg`, alt: "Commercial rooftop solar array system", caption: "Commercial rooftop" },
      { src: `${P}residential-solar-panel-setup.jpg`, alt: "Residential solar panel setup", caption: "Residential panel set-up" },
    ],
    stepsHeading: "From first call to power from the sun.",
    steps: [
      { title: "Understand your usage", copy: "We look at your bills, appliances and goals." },
      { title: "Design and quote", copy: "You get a system sized to you, with a clear quote." },
      { title: "Install", copy: "Mounting, wiring and connection by registered electricians." },
      { title: "Commission and hand over", copy: "We test, explain how it works and sort the paperwork." },
    ],
    faqs: [
      { q: "Will solar keep my lights on during load shedding?", a: "Panels on their own switch off with the grid. To keep power on during outages you need a hybrid inverter and battery, which we also install." },
      { q: "How big a system do I need?", a: "It depends on your usage and what you want to achieve. We size it from your real consumption instead of pushing a fixed package." },
      { q: "Do you install on tiled and corrugated roofs?", a: "Yes. We mount on tiled, corrugated and flat roofs, and check the roof first." },
      { q: "Do you handle the paperwork?", a: "Yes. The required paperwork and certification are part of our solar installations." },
      { q: "Do you do commercial solar?", a: "Yes. We install commercial rooftop systems sized around business operating hours." },
    ],
    related: ["inverter-battery-backup", "db-board-upgrades", "electrical-coc-certificate"],
  },

  "inverter-battery-backup": {
    slug: "inverter-battery-backup",
    metaTitle: "Inverter & Battery Backup Installation Gauteng | Power Rescue",
    metaDescription:
      "Hybrid inverter and lithium battery backup installed neatly across Gauteng, with essential circuits split out. Keep lights, fridge and Wi-Fi on. Call 063 039 2007.",
    h1: "Inverter and battery backup installation",
    h1Accent: "keep the lights on.",
    lead: "Hybrid inverters and lithium batteries installed neatly, with essential circuits split out so the fridge, Wi-Fi and lights stay on when the grid goes down.",
    heroImage: "/pr/inverter-install.png",
    keyFacts: ["Hybrid inverters", "Lithium batteries", "Essential circuits split out", "Add solar later"],
    explorer: {
      eyebrow: "Backup power",
      heading: "What do you need to keep running?",
      intro: "Choose your situation to see how we would approach it.",
      items: [
        { label: "Just the basics", meaning: "Lights, Wi-Fi, TV and a fridge is a modest load that a compact system handles well.", action: "We split those circuits onto the inverter and size a battery to match." },
        { label: "Work from home", meaning: "Internet, laptops and lights need to stay up with no gaps.", action: "We prioritise a stable inverter supply for your office circuits and your connectivity." },
        { label: "Gate, alarm and cameras", meaning: "Security equipment is low power but matters most when the grid is down.", action: "We put gate motor, alarm and cameras on protected circuits." },
        { label: "Pumps, geyser or oven", meaning: "Heavy loads draw a lot and can drain a battery fast.", action: "We talk through which loads to include, which to leave on the grid and what system size that implies." },
        { label: "Whole house", meaning: "Backing up everything needs a larger inverter and battery bank, and a clear idea of cost.", action: "We assess your loads on site and design the system properly instead of guessing." },
      ],
    },
    planner: {
      eyebrow: "Rough load planner",
      heading: "Build your essential-load list.",
      intro: "Tap the appliances you want on backup. You will get a rough load guide and can send it straight to us.",
    },
    includes: [
      { title: "Load assessment", copy: "We list what you need to keep running and size around it." },
      { title: "Hybrid inverter", copy: "Installed neatly on the wall with the correct protection." },
      { title: "Lithium battery", copy: "Mounted safely and connected correctly." },
      { title: "Essential-circuit split", copy: "Selected circuits moved onto the backup supply." },
      { title: "Room to grow", copy: "Designed so batteries or panels can be added later." },
      { title: "Testing and COC", copy: "Tested before handover, with certification." },
    ],
    gallery: [
      { src: "/pr/inverter-install.png", alt: "Hybrid inverter and lithium battery installed on a wall", caption: "Hybrid inverter and battery" },
      { src: `${P}outdoor-main-electrical-enclosure-box.jpg`, alt: "Outdoor main electrical enclosure", caption: "Outdoor enclosure" },
      { src: `${P}residential-distribution-board-installation.jpg`, alt: "Residential distribution board installation", caption: "Distribution board" },
      { src: "/pr/solar-roof.png", alt: "Rooftop solar panels", caption: "Add solar later" },
    ],
    stepsHeading: "From load shedding to backup power.",
    steps: [
      { title: "List your essentials", copy: "We agree what must stay on and what can wait." },
      { title: "Design and quote", copy: "You get a system sized to that list, with clear pricing." },
      { title: "Install neatly", copy: "Inverter, battery and circuits wired safely and tidily." },
      { title: "Test and hand over", copy: "We simulate an outage, then show you how it works." },
    ],
    faqs: [
      { q: "What can an inverter and battery run?", a: "That depends on the size of the system. Lights, Wi-Fi, TV and a fridge are easy. Geysers, stoves and pumps need a much bigger system, or stay on the grid." },
      { q: "Do I need solar panels as well?", a: "No. A backup system works with the grid alone. Panels can be added now or later to recharge the battery and cut your bill." },
      { q: "Do you install lithium batteries?", a: "Yes. We install hybrid inverters with lithium batteries." },
      { q: "Can you add backup to an existing house?", a: "Yes. We split out the essential circuits from your existing board and wire them to the inverter." },
    ],
    related: ["solar-installation", "db-board-upgrades", "electrical-installations"],
  },

  "electrical-coc-certificate": {
    slug: "electrical-coc-certificate",
    metaTitle: "Electrical COC Certificate Gauteng | Fast COCs | Power Rescue",
    metaDescription:
      "Need an electrical COC to sell, buy or insure? Registered electricians inspect, repair and issue valid Certificates of Compliance across Gauteng. Call 063 039 2007.",
    h1: "Electrical COC certificates",
    h1Accent: "inspected, fixed and certified.",
    lead: "Selling, buying or sorting an insurance claim? We inspect the installation, repair what fails and issue a valid electrical Certificate of Compliance.",
    heroImage: `${P}electrical-inspection-multimeter-testing.jpg`,
    keyFacts: ["Registered electricians", "Inspection and repairs in one visit", "For sale, insurance or alterations", "Valid certificate issued"],
    explorer: {
      eyebrow: "Do you need a COC?",
      heading: "Which situation matches yours?",
      intro: "Choose your situation to see what usually happens.",
      items: [
        { label: "I am selling my property", meaning: "A valid electrical COC is normally required when a property is sold.", action: "We inspect, quote and fix anything that fails, then issue the certificate so the sale stays on track." },
        { label: "I am buying a property", meaning: "A certificate tells you the installation met the standard on the day it was issued.", action: "We can inspect the property and tell you what repairs the installation needs." },
        { label: "An insurer asked for one", meaning: "Insurers often want proof the installation is safe after a claim or when issuing a policy.", action: "We inspect, repair and issue the COC your insurer needs." },
        { label: "We have just had electrical work", meaning: "New or altered installations should be tested and certified.", action: "We test the installation and issue the certificate for the work." },
        { label: "I am not sure", meaning: "Sometimes the right first step is just finding out what condition the installation is in.", action: "Call or WhatsApp. We will tell you whether you need one and what is likely involved." },
      ],
    },
    includes: [
      { title: "Full inspection", copy: "Wiring, DB board, earthing and protection all checked." },
      { title: "Clear fault list", copy: "You see exactly what needs fixing and why." },
      { title: "Repairs quoted first", copy: "Nothing is done without you knowing the cost." },
      { title: "Retest after repairs", copy: "We test again once the work is complete." },
      { title: "Certificate issued", copy: "A valid COC from a registered electrician." },
      { title: "Works for agents too", copy: "We communicate directly with agents and attorneys where needed." },
    ],
    gallery: [
      { src: `${P}electrical-inspection-multimeter-testing.jpg`, alt: "Electrical inspection with multimeter", caption: "Inspection" },
      { src: "/pr/maintenance-test.png", alt: "Electrician testing an electrical installation", caption: "Testing" },
      { src: `${P}residential-distribution-board-installation.jpg`, alt: "Residential distribution board", caption: "Board checks" },
      { src: `${P}voltage-multimeter-testing-230v.jpg`, alt: "Voltage multimeter testing at 230V", caption: "Voltage checks" },
    ],
    stepsHeading: "From inspection to certificate.",
    steps: [
      { title: "Book the inspection", copy: "Call or WhatsApp with your address and deadline." },
      { title: "We inspect", copy: "Every circuit and the DB board are checked and tested." },
      { title: "Repair what fails", copy: "We quote and fix any issues the inspection finds." },
      { title: "Certificate issued", copy: "Once it passes, we issue your COC." },
    ],
    faqs: [
      { q: "Do I need a COC to sell my house?", a: "In South Africa a valid electrical COC is normally required when a property is sold. Speak to your agent or attorney if you are unsure about your situation." },
      { q: "What if the installation fails the inspection?", a: "We list what needs attention and quote the repairs. Once the work is done and tested, we issue the certificate." },
      { q: "Can you inspect and repair in one go?", a: "Yes. That is the fastest route, since we can quote and fix issues once we have inspected." },
      { q: "Are your electricians registered?", a: "Yes. Our electricians are registered and issue Certificates of Compliance." },
    ],
    related: ["db-board-upgrades", "electrical-maintenance-fault-finding", "electrical-installations"],
  },

  "db-board-upgrades": {
    slug: "db-board-upgrades",
    metaTitle: "DB Board Upgrades & Replacements Gauteng | Power Rescue",
    metaDescription:
      "Old or overloaded DB board? Registered electricians replace distribution boards with clean, labelled, compliant boards across Gauteng. Call 063 039 2007.",
    h1: "DB board upgrades and replacements",
    h1Accent: "safe, labelled and compliant.",
    lead: "Old boards with ceramic fuses, no earth leakage or crowded wiring are a risk. We replace them with a clean, labelled, compliant distribution board.",
    heroImage: "/pr/hero-db-board.png",
    keyFacts: ["Registered electricians", "Earth leakage protection", "Clearly labelled circuits", "COC issued"],
    explorer: {
      eyebrow: "Does your board need replacing?",
      heading: "Signs it is time.",
      intro: "Pick what you see on your board to learn what it means.",
      items: [
        { label: "Ceramic or rewireable fuses", meaning: "That is an old board design with limited protection by today's standards.", action: "We replace it with a modern board with proper breakers and earth leakage protection." },
        { label: "No earth leakage unit", meaning: "Without earth leakage protection, a fault can put you at greater risk of shock.", action: "We install earth leakage protection as part of the new board." },
        { label: "Burn marks or a hot board", meaning: "Heat and discolouration point to loose or overloaded connections.", action: "Switch off if it is safe to reach and call us. We inspect and replace damaged parts or the whole board." },
        { label: "Breakers trip all the time", meaning: "An overloaded board or a fault on a circuit. Resetting does not fix the cause.", action: "We test, find the cause and rebalance or replace the board if needed." },
        { label: "Adding solar or an inverter", meaning: "Backup and solar systems often need new circuits and extra protection.", action: "We upgrade or add a sub-board so the new system is connected safely." },
        { label: "Messy or unlabelled circuits", meaning: "If you cannot tell what each breaker controls, faults take longer and cost more to find.", action: "We install a tidy, labelled board so every circuit is clear." },
      ],
    },
    includes: [
      { title: "New distribution board", copy: "A modern board with the right breakers for each circuit." },
      { title: "Earth leakage protection", copy: "Installed to protect people and appliances." },
      { title: "Surge protection", copy: "Added where it makes sense for your property." },
      { title: "Clear labelling", copy: "Every circuit marked so you can find it." },
      { title: "Tidy wiring", copy: "Neat terminations and clean cable runs." },
      { title: "Testing and COC", copy: "Tested and certified before we leave." },
    ],
    gallery: [
      { src: `${P}residential-distribution-board-installation.jpg`, alt: "Residential distribution board installation", caption: "New residential board" },
      { src: `${P}electrical-db-board-maintenance.jpg`, alt: "DB board maintenance", caption: "Board maintenance" },
      { src: "/pr/hero-db-board.png", alt: "Electrician working on a distribution board", caption: "On the board" },
      { src: `${P}commercial-sub-panel-installation.jpg`, alt: "Commercial sub-panel installation", caption: "Commercial sub-panel" },
    ],
    stepsHeading: "Old board out, safe board in.",
    steps: [
      { title: "Inspect the board", copy: "We check your current board and circuits." },
      { title: "Quote it", copy: "You get a clear price for the new board." },
      { title: "Replace and test", copy: "We swap it, label every circuit and test everything." },
      { title: "COC issued", copy: "We issue your certificate when the work passes." },
    ],
    faqs: [
      { q: "How do I know if my DB board is outdated?", a: "Ceramic fuses, no earth leakage unit, burn marks, or breakers that trip often are common signs. If you are unsure, send us a photo on WhatsApp." },
      { q: "How long does a replacement take?", a: "Most house boards take a part of a day, but it depends on the installation. We will tell you after seeing it." },
      { q: "Will the power be off during the work?", a: "Yes, for part of the job. We plan it with you so the outage is as short as possible." },
      { q: "Do you issue a COC after a board replacement?", a: "Yes. We test the installation and issue a Certificate of Compliance when the work is complete." },
    ],
    related: ["electrical-coc-certificate", "emergency-electrical-repairs", "inverter-battery-backup"],
  },

  "lighting-plug-point-installation": {
    slug: "lighting-plug-point-installation",
    metaTitle: "Lighting & Plug Point Installation Gauteng | Power Rescue",
    metaDescription:
      "Downlights, garden and security lighting and extra plug points fitted cleanly by registered electricians across Gauteng. Small jobs welcome. Call 063 039 2007.",
    h1: "Lighting and plug point installation",
    h1Accent: "small jobs welcome.",
    lead: "Downlights, pendants, garden and security lighting, plus extra plug points, fitted cleanly with no chased walls left behind.",
    heroImage: "/pr/lighting-install.png",
    keyFacts: ["Registered electricians", "Small jobs welcome", "Homes and commercial spaces", "Tidy finish"],
    explorer: {
      eyebrow: "What do you need lit?",
      heading: "Lighting and power, exactly where you need it.",
      intro: "Choose the job closest to yours.",
      items: [
        { label: "Downlights", meaning: "Recessed lighting changes how a room feels but needs planning for placement, ceiling space and dimming.", action: "We agree the layout with you, fit the downlights and wire them tidily." },
        { label: "Garden and outdoor", meaning: "Outdoor lighting has to be weatherproof and safely wired.", action: "We install outdoor fittings and cabling to suit the area and keep it safe." },
        { label: "Security and CCTV lights", meaning: "Lighting at gates, driveways and entrances works with cameras and alarms.", action: "We fit and repair security lights so key areas are covered." },
        { label: "Extra plug points", meaning: "Not enough sockets leads to extension cords and overloaded plugs.", action: "We add plug points where you need them and check the circuit can carry them." },
        { label: "Commercial ceiling lighting", meaning: "Offices and shops need even light and quick repairs when fittings fail.", action: "We repair and replace commercial lighting with as little disruption as possible." },
      ],
    },
    includes: [
      { title: "Layout planning", copy: "We agree where lights and plugs go before drilling starts." },
      { title: "Clean installation", copy: "Neat work with walls and ceilings left tidy." },
      { title: "Indoor and outdoor", copy: "Fittings suited to where they are going." },
      { title: "Circuit checks", copy: "We confirm the circuit can carry the extra load." },
      { title: "Repairs and replacements", copy: "Failed fittings and faulty sockets sorted." },
      { title: "Tested before we leave", copy: "Everything working and safe." },
    ],
    gallery: [
      { src: "/pr/lighting-install.png", alt: "Lighting installation", caption: "Lighting installation" },
      { src: `${P}commercial-ceiling-lighting-repair.jpg`, alt: "Commercial ceiling lighting repair", caption: "Commercial lighting" },
      { src: `${P}outdoor-cctv-security-light-repair.jpg`, alt: "Outdoor CCTV and security light repair", caption: "Security lighting" },
      { src: `${P}electrical-wiring-and-conduit-installation.jpg`, alt: "Electrical wiring and conduit installation", caption: "Neat wiring" },
    ],
    stepsHeading: "From idea to lit-up.",
    steps: [
      { title: "Tell us what you want", copy: "Send photos or a description on WhatsApp." },
      { title: "Quote", copy: "You get a clear price before we start." },
      { title: "Fit it", copy: "We install cleanly and tidy up." },
      { title: "Test", copy: "We check everything works and is safe." },
    ],
    faqs: [
      { q: "Do you do small jobs like a single plug point?", a: "Yes. Small jobs are welcome, and we treat them with the same care as larger ones." },
      { q: "Can you fit downlights in an existing ceiling?", a: "In most cases, yes. We check the ceiling space, agree positions with you and run the wiring neatly." },
      { q: "Can you add outdoor lighting?", a: "Yes. We fit garden, driveway and security lighting with weatherproof wiring." },
      { q: "Will you leave chased walls and mess?", a: "We work to minimise mess and leave things tidy. Where chasing is unavoidable, we tell you beforehand." },
    ],
    related: ["electrical-installations", "electrical-maintenance-fault-finding", "emergency-electrical-repairs"],
  },

  "electric-fence-installation-repairs": {
    slug: "electric-fence-installation-repairs",
    metaTitle: "Electric Fence Installation & Repairs Gauteng | Power Rescue",
    metaDescription:
      "Electric fence installation, repairs and fault finding for walls, boundaries and farms across Gauteng. Small repairs welcome. Call or WhatsApp 063 039 2007.",
    h1: "Electric fence installation and repairs",
    h1Accent: "no job too small.",
    lead: "New wall-top and free-standing fences, plus fast repairs for fences that are dead, weak or setting off the alarm. Big install or a single broken wire, we sort it.",
    heroImage: `${P}boundary-wall-electric-security-fencing.jpg`,
    keyFacts: ["Installation and repairs", "Walls, boundaries and farms", "Small repairs welcome", "Fault found, then fixed"],
    explorer: {
      eyebrow: "What is wrong with your fence?",
      heading: "Tell us the symptom. We will tell you what it usually is.",
      intro: "Pick the closest match to see what we check first.",
      items: [
        { label: "Fence is dead or weak", meaning: "Usually a shorted wire, vegetation touching the fence, a damaged insulator, an earthing problem or a failing energiser.", action: "We test along the fence to find where the voltage drops, fix the fault and check the energiser and earthing." },
        { label: "Alarm keeps going off", meaning: "Loose or sagging wires, plants, damaged insulators or a faulty energiser or siren can all trigger false alarms.", action: "We trace what is tripping it, repair the cause and test the alarm properly." },
        { label: "Cut or broken wires", meaning: "Wires get cut, snapped or pulled loose, and the fence stops being a deterrent.", action: "We repair or replace the damaged sections and re-tension the wires." },
        { label: "Dead during load shedding", meaning: "Energisers normally run from a battery during outages. If the fence dies when the power does, the battery is often the first suspect.", action: "We test and replace the battery or charger and check the energiser." },
        { label: "Damaged by a storm", meaning: "Lightning and surges can damage energisers and controllers, and storms can bring branches down on the fence.", action: "We test the system, replace damaged parts and restore the fence." },
        { label: "I need a new fence", meaning: "Wall-top, free-standing and farm fences are all built differently.", action: "We assess the site, agree the layout with you and install the fence, energiser and warning signs." },
      ],
    },
    smallJobs: {
      heading: "Repairs, big or small.",
      intro: "A single broken wire is a proper job to us. Tap what you need and message us.",
      items: [
        "Dead or weak fence", "Broken wires", "Cracked insulators", "Sagging wires",
        "Energiser replacement", "Battery replacement", "Keypad or siren fault",
        "Fence tripping the alarm", "Extending a fence", "New warning signs",
      ],
    },
    includes: [
      { title: "Fault finding", copy: "We test the fence line to find the exact fault instead of guessing." },
      { title: "Wire and insulator repairs", copy: "Broken wires, damaged insulators and loose fittings fixed." },
      { title: "Energisers and batteries", copy: "Faulty energisers, including Nemtek units, and tired batteries replaced." },
      { title: "Alarms and keypads", copy: "Sirens, keypads and zones tested and repaired." },
      { title: "New wall-top fences", copy: "Brackets, wiring and energiser installed neatly along your wall." },
      { title: "Free-standing and farm fences", copy: "Posts, wire and energisers for plots, perimeters and farms." },
    ],
    gallery: [
      { src: `${P}wall-top-electric-fence-bracket-wiring.jpg`, alt: "Wall-top electric fence bracket and wiring", caption: "Wall-top bracket wiring" },
      { src: `${P}perimeter-free-standing-electric-fencing-plot.jpg`, alt: "Free-standing perimeter electric fence on a plot", caption: "Perimeter fence" },
      { src: `${P}nemtek-wizord-4-electric-fence-energizer.jpg`, alt: "Nemtek Wizord 4 electric fence energiser", caption: "Nemtek energiser" },
      { src: `${P}plastered-wall-top-electric-fence-installation.jpg`, alt: "Electric fence installed on a plastered wall", caption: "Wall-top installation" },
    ],
    stepsHeading: "From dead fence to live fence.",
    steps: [
      { title: "Tell us what you see", copy: "Call or WhatsApp the symptoms, with a photo if you can." },
      { title: "We test the line", copy: "We check voltage along the fence, the energiser and the earthing." },
      { title: "Clear quote", copy: "You hear what is wrong and what the repair involves." },
      { title: "Fix and retest", copy: "We repair it and test the whole fence again." },
    ],
    faqs: [
      { q: "Do you do small electric fence repairs?", a: "Yes. A single broken wire or a cracked insulator is a job we take seriously. No job is too small." },
      { q: "Why is my electric fence not working?", a: "The usual causes are a shorted or broken wire, vegetation touching the fence, damaged insulators, a flat battery or a failing energiser. We test to find which one it is." },
      { q: "Will my fence work during load shedding?", a: "Fence energisers normally run from a battery during outages. If yours stops when the power goes, the battery or charger is usually the first thing we check." },
      { q: "Do you install on walls and free-standing fences?", a: "Yes. We install wall-top fences, free-standing perimeter fences and farm or plot fencing." },
      { q: "Does an electric fence need a certificate?", a: "Electric fence systems are normally expected to be certified, especially when a property is sold. Ask us what your property needs." },
    ],
    related: ["security-gates-installation-repairs", "cctv-installation-repairs", "electrical-coc-certificate"],
  },

  "cctv-installation-repairs": {
    slug: "cctv-installation-repairs",
    metaTitle: "CCTV Installation & Repairs Gauteng | Power Rescue Electrical",
    metaDescription:
      "CCTV camera installation, repairs and fault finding for homes, shops and complexes across Gauteng. One camera or a full system. Call or WhatsApp 063 039 2007.",
    h1: "CCTV installation and repairs",
    h1Accent: "one camera or a full system.",
    lead: "New CCTV systems, extra cameras and quick repairs for cameras that show no picture, will not record or will not connect to your phone. No job is too small.",
    heroImage: `${P}residential-cctv-camera-installation.jpg`,
    keyFacts: ["Installation and repairs", "Homes, shops and complexes", "Remote viewing on your phone", "Small repairs welcome"],
    explorer: {
      eyebrow: "What is your CCTV doing?",
      heading: "Find the fault, or plan the system.",
      intro: "Choose the closest match to see what we check first.",
      items: [
        { label: "Camera shows no picture", meaning: "Often a power supply, cable or connector fault, or a camera that has failed.", action: "We test power and cabling at the camera and recorder, then repair or replace the faulty part." },
        { label: "Cannot view on my phone", meaning: "Network settings, a changed router or a recorder that has gone offline are common causes.", action: "We check the recorder and network and set up remote viewing again." },
        { label: "It is not recording", meaning: "A failed hard drive, a full disk or a recorder fault can stop recording without any warning.", action: "We check the recorder and hard drive and replace what has failed." },
        { label: "Blurry or poor night picture", meaning: "Dirty lenses, bad aim, failing infrared or poor lighting can all hurt picture quality.", action: "We clean, re-aim and test the camera, and advise if it needs replacing or better lighting." },
        { label: "I want to add cameras", meaning: "Extra cameras need power, cabling and spare capacity on your recorder.", action: "We check your recorder, then add cameras where you need coverage." },
        { label: "I need a new system", meaning: "The right layout covers entrances, driveways and blind spots without wasting cameras.", action: "We walk the property with you, plan camera positions and install the full system." },
      ],
    },
    smallJobs: {
      heading: "Repairs, big or small.",
      intro: "One dead camera is worth fixing. Tap what you need and message us.",
      items: [
        "Camera not working", "Replace a damaged camera", "Hard drive replacement", "Cable or connector fault",
        "Power supply replacement", "Remote viewing set-up", "Re-aim a camera", "Add one more camera", "Clean and service cameras",
      ],
    },
    includes: [
      { title: "Site walk-through", copy: "We plan camera positions around entrances, driveways and blind spots." },
      { title: "Cameras and recorder", copy: "Cameras and a recorder matched to your property." },
      { title: "Neat cabling", copy: "Cables run tidily and protected from the weather." },
      { title: "Phone viewing", copy: "Remote viewing set up on your phone." },
      { title: "Repairs on existing systems", copy: "Faults diagnosed and fixed on the system you already have." },
      { title: "Testing and handover", copy: "We check every camera and show you how to use it." },
    ],
    gallery: [
      { src: `${P}outdoor-bullet-cctv-camera-brick-wall.jpg`, alt: "Outdoor bullet CCTV camera mounted on a brick wall", caption: "Outdoor bullet camera" },
      { src: `${P}cctv-security-camera-monitor-display.jpg`, alt: "CCTV security camera monitor display", caption: "Live camera view" },
      { src: `${P}residential-cctv-camera-installation.jpg`, alt: "Residential CCTV camera installation", caption: "Residential installation" },
      { src: `${P}outdoor-cctv-security-light-repair.jpg`, alt: "Outdoor CCTV and security light repair", caption: "CCTV and security light repair" },
    ],
    stepsHeading: "From blind spot to full picture.",
    steps: [
      { title: "Tell us the problem", copy: "Describe what the cameras are doing, or what you want to cover." },
      { title: "Check or walk the site", copy: "We test the system or walk the property with you." },
      { title: "Clear quote", copy: "You get a straightforward price before any work starts." },
      { title: "Install or repair, then test", copy: "We finish the job and check every camera." },
    ],
    faqs: [
      { q: "Do you repair CCTV systems you did not install?", a: "Yes. We diagnose the fault on the system you have and tell you whether it is a repair or a replacement." },
      { q: "Can I add one camera to my existing system?", a: "Usually, yes. We check that your recorder has capacity and that power and cabling can reach the new spot." },
      { q: "Can I watch my cameras on my phone?", a: "Yes. We set up remote viewing so you can check the cameras from your phone." },
      { q: "Why has my CCTV stopped recording?", a: "Common causes are a full or failed hard drive, a recorder fault or a power problem. We test to find which one." },
    ],
    related: ["security-gates-installation-repairs", "electric-fence-installation-repairs", "lighting-plug-point-installation"],
  },

  "security-gates-installation-repairs": {
    slug: "security-gates-installation-repairs",
    metaTitle: "Security Gate Motors & Automation Repairs Gauteng | Power Rescue",
    metaDescription:
      "Gate motor installation, gate automation and repairs across Gauteng. Remotes, batteries, intercoms and gates that will not open. Call or WhatsApp 063 039 2007.",
    h1: "Security gate installation and repairs",
    h1Accent: "gate stuck? we come running.",
    lead: "Gate motor installation, automation wiring and fast repairs for gates that will not open, will not close or stopped working in the last power cut. No job is too small.",
    heroImage: `${P}automatic-sliding-gate-motor-installation.jpg`,
    keyFacts: ["Installation and repairs", "Sliding and swing gates", "Remotes, batteries and intercoms", "Small repairs welcome"],
    explorer: {
      eyebrow: "What is your gate doing?",
      heading: "Gate problems we fix every week.",
      intro: "Pick the closest match to see what we usually find.",
      items: [
        { label: "Gate will not open or close", meaning: "A flat battery, a motor or control board fault, a blocked track or a tripped safety device are the usual causes.", action: "We test power, battery, controller and safety devices to find the fault, then repair it." },
        { label: "Remote not working", meaning: "A flat remote battery, an unprogrammed remote or a failing receiver.", action: "We test the remote and receiver, then replace or reprogram as needed." },
        { label: "Gate stops halfway or struggles", meaning: "Worn gears, a dragging gate, a misadjusted limit or an ageing motor.", action: "We inspect the motor, gearing and travel, adjust or replace worn parts and retest." },
        { label: "Dead since load shedding", meaning: "Gate motors depend on a battery during power cuts. A tired battery leaves you with a stuck gate.", action: "We test and replace the battery and charger, so the gate keeps working during outages." },
        { label: "Intercom or keypad faults", meaning: "Wiring, power or unit faults can leave visitors unable to call you or you unable to let them in.", action: "We find the fault and repair or replace the unit, including Dahua intercom and keypad systems." },
        { label: "I want to automate a gate", meaning: "Gate type, weight and layout decide which motor and accessories you need.", action: "We assess your gate, agree the setup with you and install the motor, safety devices and remotes." },
      ],
    },
    smallJobs: {
      heading: "Repairs, big or small.",
      intro: "A new remote or a gate battery counts as a proper job. Tap what you need and message us.",
      items: [
        "Remote programming", "Extra or lost remotes", "Gate battery replacement", "Safety beam alignment",
        "Motor replacement", "Control board repair", "Keypad faults", "Intercom faults",
        "Limit adjustment", "Gate will not close fully",
      ],
    },
    includes: [
      { title: "Motor installation", copy: "Sliding and swing gate motors fitted and set up properly." },
      { title: "Automation wiring", copy: "Power and control wiring run neatly and safely." },
      { title: "Remotes and access", copy: "Remotes, keypads and intercoms supplied and programmed." },
      { title: "Safety devices", copy: "Safety beams and stops installed and aligned." },
      { title: "Battery backup", copy: "Batteries and chargers sorted so the gate works in a power cut." },
      { title: "Repairs and servicing", copy: "Faulty motors, boards and parts diagnosed and repaired." },
    ],
    gallery: [
      { src: `${P}automatic-sliding-gate-motor-installation.jpg`, alt: "Automatic sliding gate motor installation", caption: "Sliding gate motor" },
      { src: `${P}driveway-gate-automation-wiring.jpg`, alt: "Driveway gate automation wiring", caption: "Automation wiring" },
      { src: `${P}dahua-intercom-access-control-keypad.jpg`, alt: "Dahua intercom and access control keypad", caption: "Intercom and keypad" },
      { src: `${P}outdoor-beam-alarm-sensor-installation.jpg`, alt: "Outdoor beam alarm sensor installation", caption: "Beam sensors" },
    ],
    stepsHeading: "From stuck gate to smooth gate.",
    steps: [
      { title: "Tell us what it does", copy: "Describe the fault, or send a photo or video of the gate." },
      { title: "We test it", copy: "We check power, battery, motor, controller and safety devices." },
      { title: "Clear quote", copy: "You hear what is wrong and what it costs to fix." },
      { title: "Repair and retest", copy: "We fix it and run the gate through its full travel." },
    ],
    faqs: [
      { q: "Do you do small gate repairs?", a: "Yes. Remotes, batteries and alignment jobs are things we do all the time. No job is too small." },
      { q: "Why does my gate stop working during load shedding?", a: "Gate motors rely on a battery when the power is off. If the battery is tired, the gate stops. We test and replace batteries and chargers." },
      { q: "Can you automate my existing gate?", a: "In most cases, yes. We check the gate type, weight and layout, then fit the right motor and safety devices." },
      { q: "Do you repair gate motors you did not install?", a: "Yes. We diagnose the fault and tell you whether it is a repair or a replacement." },
    ],
    related: ["electric-fence-installation-repairs", "cctv-installation-repairs", "inverter-battery-backup"],
  },

  "solar-geyser-installation-repairs": {
    slug: "solar-geyser-installation-repairs",
    metaTitle: "Solar Geyser Installation & Repairs Gauteng | Power Rescue",
    metaDescription:
      "Solar geyser installation, repairs and servicing across Gauteng. No hot water, leaks, elements and controllers. Small jobs welcome. Call or WhatsApp 063 039 2007.",
    h1: "Solar geyser installation and repairs",
    h1Accent: "hot water from the sun.",
    lead: "Switch to a solar geyser and cut what your geyser costs to run, or get your existing one fixed. No hot water, a tripping geyser or a faulty element, we sort it. No job is too small.",
    heroImage: `${P}residential-solar-geyser-tiled-roof.jpg`,
    keyFacts: ["Installation and repairs", "Cut your geyser running costs", "Most popular makes", "Small repairs welcome"],
    explorer: {
      eyebrow: "What is your geyser doing?",
      heading: "Find the fault, or plan the switch.",
      intro: "Choose the closest match to see what we usually find.",
      items: [
        { label: "No hot water", meaning: "Often a failed element, a faulty thermostat, a tripped breaker or a controller or pump fault on a solar system.", action: "We test the electrical supply, element, thermostat and controls, then repair the fault." },
        { label: "Water is not hot enough", meaning: "A worn element, a wrong thermostat setting or a solar system that is not circulating properly.", action: "We check the heating and, on solar geysers, the controller and pump, and fix what is wrong." },
        { label: "Geyser keeps tripping", meaning: "A failing element or damaged wiring can leak current and trip your earth leakage.", action: "We test the geyser circuit, find the fault and make it safe." },
        { label: "Leaking or dripping", meaning: "Leaks can come from valves, connections or the geyser itself. The cause decides whether it is a repair or a replacement.", action: "We check where it is coming from and tell you honestly what it needs." },
        { label: "Solar panels or controller fault", meaning: "Dirty or damaged panels and failed controllers or pumps stop a solar geyser doing its job.", action: "We inspect the roof side and controls, clean or repair what we can and replace failed parts." },
        { label: "I want to switch to solar", meaning: "Roof orientation, space and your hot water usage decide what size system makes sense.", action: "We assess your roof and usage, then install and commission a solar geyser." },
      ],
    },
    smallJobs: {
      heading: "Repairs, big or small.",
      intro: "A geyser element or thermostat is a proper job to us. Tap what you need and message us.",
      items: [
        "Element replacement", "Thermostat replacement", "Geyser tripping", "Controller replacement",
        "Pump replacement", "Timer fitting", "Isolator or wiring fault", "Panel cleaning", "Leak checks",
      ],
    },
    includes: [
      { title: "Fault finding", copy: "We test the electrical side and the controls to find the real cause." },
      { title: "Element and thermostat repairs", copy: "Failed elements and thermostats replaced." },
      { title: "Controllers and pumps", copy: "Solar geyser controllers and circulation pumps repaired or replaced." },
      { title: "New solar geyser installation", copy: "Panels, geyser, wiring and controls installed and commissioned." },
      { title: "Safe electrical connection", copy: "Correct wiring, isolation and protection on the geyser circuit." },
      { title: "Servicing and cleaning", copy: "Panels cleaned and the system checked so it keeps performing." },
    ],
    gallery: [
      { src: `${P}apollo-solar-geyser-rooftop-installation.jpg`, alt: "Apollo solar geyser rooftop installation", caption: "Rooftop solar geyser" },
      { src: `${P}residential-solar-geyser-tiled-roof.jpg`, alt: "Solar geyser on a tiled roof", caption: "Tiled roof installation" },
      { src: `${P}solar-panel-roof-maintenance-cleaning.jpg`, alt: "Solar panel roof maintenance and cleaning", caption: "Panel maintenance" },
      { src: "/pr/solar-roof.png", alt: "Rooftop solar panels", caption: "Roof-mounted solar" },
    ],
    stepsHeading: "From cold showers to hot water.",
    steps: [
      { title: "Tell us the symptoms", copy: "Describe what the geyser is doing, or what you want to achieve." },
      { title: "Test or assess", copy: "We test the system, or assess your roof and usage for a new one." },
      { title: "Clear quote", copy: "You get a straightforward price before we start." },
      { title: "Repair or install, then test", copy: "We finish the job and check the hot water is back." },
    ],
    faqs: [
      { q: "Do you do small geyser repairs?", a: "Yes. Elements, thermostats and controllers are jobs we do regularly. No job is too small." },
      { q: "Will a solar geyser reduce my electricity bill?", a: "A solar geyser uses the sun to heat water, which cuts the electricity a normal geyser uses. How much you save depends on your usage and your roof." },
      { q: "Do you repair solar geysers you did not install?", a: "Yes. We diagnose the fault and tell you whether it is a repair or a replacement, whichever make it is." },
      { q: "Why does my geyser keep tripping the breaker?", a: "A failing element or damaged wiring often leaks current to earth. We test the circuit, find the fault and make it safe." },
    ],
    related: ["solar-installation", "inverter-battery-backup", "emergency-electrical-repairs"],
  },
}
