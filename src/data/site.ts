export const site = {
  name: "Vedant Steel Corporation",
  shortName: "Vedant Steel",
  brandName: "Vedant Steel Corporation",
  tagline: "SS Flexible Hose & Expansion Bellows Manufacturer",
  description:
    "Vedant Steel Corporation manufactures and supplies stainless steel flexible hoses, corrugated and braided hose pipe, expansion joint bellows, and automotive exhaust connectors for critical industrial applications.",
  email: "Info@vedantsteel.com",
  enquiryEmail: "info@vedantsteel.com",
  phone: "971-565686811",
  phoneHref: "tel:+971565686811",
  whatsapp: "https://wa.me/971565686811",
  founded: "2010",
  hours: "Mon – Fri: 9:00 AM – 6:00 PM\nSat: 9:00 AM – 2:00 PM\nSun: Closed",
  hoursShort: "Mon – Fri · 9:00 AM – 6:00 PM",
  address: {
    line1: "Dubai, Abu Dhabi, UAE",
    line2: "",
    line3: "",
    full: "Dubai, Abu Dhabi, UAE",
    maps: "https://share.google/QTpD6j8sHv6G5qsWu",
  },
  social: {
    linkedin: "https://www.linkedin.com/company/vedant-steel/",
    instagram: "https://www.instagram.com/vedantsteel",
    facebook: "https://www.facebook.com/profile.php?id=61592819913045",
  },
  logo: "/logo/vedant-logo.jpeg",
  heroImage: "/image.png",
} as const;

export const navItems = [
  // Industries tab hidden for now
  /*
  {
    label: "Industries",
    href: "/industries",
    children: [
      { label: "Power (Coal, Thermal & Gas)", href: "/industries/power-coal-thermal-gas" },
      { label: "Power (Nuclear & Atomic)", href: "/industries/power-nuclear-atomic" },
      { label: "Chemicals, Petrochemicals, Oil & Gas Refinery", href: "/industries/chemicals-petrochemicals-refinery" },
      { label: "Pulp and Paper", href: "/industries/pulp-and-paper" },
      { label: "Cement Industry", href: "/industries/cement-industry" },
      { label: "Ship Building & Marine", href: "/industries/ship-building-marine" },
      { label: "Cryogenics & LNG Transfer", href: "/industries/cryogenics-lng-transfer" },
      { label: "Commercial Food Services", href: "/industries/commercial-food-services" },
      { label: "Hospitality (Hotels, Hospitals)", href: "/industries/hospitality" },
      { label: "Water Treatment & Waste Water", href: "/industries/water-treatment" },
      { label: "Steel Industry", href: "/industries/steel-industry" },
      { label: "Aerospace & Defense", href: "/industries/aerospace-defense" },
      { label: "Mining & Construction", href: "/industries/mining-construction" },
      { label: "Automotive & OEM", href: "/industries/automotive-oem" },
      { label: "Data Centers", href: "/industries/data-centers" },
    ],
  },
  */
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "SS Corrugated Hose", href: "/products/ss-corrugated-hose" },
      { label: "SS Hose with Braid", href: "/products/ss-braided-hose" },
      { label: "SS Hose without Braid", href: "/products/ss-unbraided-hose" },
      { label: "SS Bellows", href: "/products/ss-bellows" },
      { label: "SS Fittings", href: "/products/ss-fittings" },
      { label: "SS Hose Assemblies", href: "/products/hose-assemblies" },
      { label: "Rubber Bellows", href: "/products/rubber-bellows" },
      { label: "Automotive Exhaust Connectors", href: "/products/exhaust-connectors" },
      { label: "EGR Tubes", href: "/products/egr-tubes" },
      { label: "Interlock Hoses", href: "/products/interlock-hoses" },
    ],
  },
  { label: "Technical", href: "/technical" },
  { label: "Certifications", href: "/certifications" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blogs" },
  { label: "Network", href: "/network" },
] as const;

export const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Who We Are", href: "/about" },
  { label: "Products", href: "/services" },
  { label: "Structural Steel", href: "/services?tab=infrastructure" },
  { label: "Stainless & Alloys", href: "/services?tab=rental" },
  { label: "Sheets & Coils", href: "/services?tab=supply" },
  { label: "Clients", href: "/clients" },
  { label: "Contact", href: "/contact" },
] as const;

export const hero = {
  eyebrow: "ENGINEERED PERFECTION",
  titleLine1: "SS FLEXIBLE HOSES",
  titleLine2: "& EXPANSION BELLOWS",
  description:
    "Manufacturer, supplier and exporter of stainless steel flexible hoses, corrugated and braided hose pipes, expansion joint bellows and automotive exhaust connectors — engineered in Delhi NCR, India.",
  primaryCta: "View Products",
  primaryHref: "/products",
  secondaryCta: "Get a Quote",
  secondaryHref: "/contact",
  image: "/products/hero-hose.jpg",
  images: [
    {
      src: "/products/hero-hose.jpg",
      alt: "Macro view of braided stainless steel flexible hose",
      eyebrow: "ENGINEERED PERFECTION",
      titleLine1: "SS FLEXIBLE HOSES",
      titleLine2: "& EXPANSION BELLOWS",
    },
    {
      src: "/products/product-bellows.jpg",
      alt: "Stainless steel expansion joint bellows",
      eyebrow: "EJMA COMPLIANT",
      titleLine1: "EXPANSION BELLOWS",
      titleLine2: "& FLEX JOINTS",
    },
    {
      src: "/products/factory-floor.jpg",
      alt: "Stainless steel corrugated hose wire braiding in factory",
      eyebrow: "PRECISION MANUFACTURING",
      titleLine1: "CORRUGATED HOSES",
      titleLine2: "& WIRE BRAIDS",
    },
  ],
  processTabs: ["FLEXIBLE HOSES", "EXPANSION BELLOWS"],
} as const;

export const mission = {
  eyebrow: "OUR MANUFACTURING STANDARDS",
  title: "PRECISION, QUALITY, AND RELIABILITY DRIVE OUR MISSION",
  images: [
    {
      src: "/products/quality-check.jpg",
      alt: "Dimensional inspection of a braided stainless steel hose",
    },
    {
      src: "/products/pressure-testing.jpg",
      alt: "Hydrostatic pressure testing of flexible hose assembly",
    },
    {
      src: "/products/gallery-hoses.jpg",
      alt: "Stainless steel braided hose assemblies ready for dispatch",
    },
  ],
  tabs: [
    {
      id: "inspection",
      label: "INSPECTION",
      body: "Every flexible hose assembly and expansion bellow is 100% inspected and pressure tested at 1.5× working pressure before leaving our plant.",
      checks: [
        "1.5× Hydrostatic Pressure Test",
        "Air-Under-Water Leak Detection",
        "EN 10204 3.1 Mill Heat Traceability",
        "Dimensional & CMM Verification",
        "Liquid Dye Penetrant Weld Check",
        "Dispatch QA Release Certificate",
      ],
    },
    {
      id: "approach",
      label: "APPROACH",
      body: "Vedant Steel Corporation manufactures certified flexible piping and expansion solutions — SS corrugated hoses, braided hose pipes, bellows, fittings, exhaust connectors, and EGR tubes.",
      checks: [
        "Hydroformed Annular Core",
        "High-Tensile AISI 304/316 Braid",
        "EJMA Multi-Ply Bellows Design",
        "Custom Flange & Thread Standards",
        "Two Modern NCR Production Plants",
        "Dedicated Technical Engineering Desk",
      ],
    },
    {
      id: "performance",
      label: "PERFORMANCE",
      body: "Reliability, leak-tight containment, and vibration absorption define our products across extreme temperature and high cyclic operations.",
      checks: [
        "ISO 9001:2015 Certified QMS",
        "Tested to ISO 10380 & BS 6501",
        "Cryogenic (-270 °C) to Hot (700 °C)",
        "High Burst Safety Factor (4:1)",
        "Prompt Breakdown Turnaround",
        "Full Worldwide Export Compliance",
      ],
    },
  ],
  cta: "Get Started",
  ctaHref: "/contact",
} as const;

export const partners = {
  eyebrow: "OUR COMPANY",
  title: "TRUSTED INDUSTRIAL PARTNERS",
} as const;

export const productGroups = [
  {
    id: "flexible-hoses",
    label: "Flexible Hoses & Bellows",
    eyebrow: "Industrial Flexible Systems",
    description:
      "Hydroformed corrugated stainless steel hoses, high-tensile wire braided assemblies, expansion joint bellows, and precision pipe fittings for critical fluid and gas transfer.",
    homeEyebrow: "Flexible Systems",
    homeTitle: "SS Flexible Hoses & Bellows",
    homeSubtitle:
      "Engineered annular corrugated hoses, wire braids, bellows, and fittings tested to 1.5× working pressure for high-temperature and high-vibration duties.",
    items: [
      {
        slug: "ss-corrugated-hose",
        title: "SS Corrugated Hose",
        image: "/products/product-corrugated.jpg",
        description:
          "Annular close-pitch corrugation for extreme pressure, cyclic flexing, and vibration absorption.",
      },
      {
        slug: "ss-braided-hose",
        title: "SS Hose with Braid",
        image: "/products/product-braid.jpg",
        description:
          "High-tensile AISI 304/316 wire braiding preventing elongation and boosting working pressure up to 4×.",
      },
      {
        slug: "ss-unbraided-hose",
        title: "SS Hose without Braid",
        image: "/products/product-no-braid.jpg",
        description:
          "Maximum axial and lateral movement capacity for low-to-medium pressure and vacuum lines.",
      },
      {
        slug: "ss-bellows",
        title: "SS Bellows",
        image: "/products/product-bellows.jpg",
        description:
          "Multi-ply expansion bellows engineered to EJMA standards for axial, lateral, and angular movement.",
      },
      {
        slug: "ss-fittings",
        title: "SS Fittings",
        image: "/products/product-fittings.jpg",
        description:
          "Precision-machined stainless flanges, unions, elbows, tees, and nipples in ASTM A182 grades.",
      },
      {
        slug: "hose-assemblies",
        title: "SS Hose Assemblies",
        image: "/products/product-assembly.jpg",
        description:
          "Turnkey custom hose assemblies fabricated to drawing and 100% hydrostatically pressure tested.",
      },
      {
        slug: "rubber-bellows",
        title: "Rubber Bellows",
        image: "/products/product-rubber.jpg",
        description:
          "Single and twin-sphere elastomeric expansion joints silencing vibration and pump shock.",
      },
      {
        slug: "interlock-hoses",
        title: "Interlock Hoses",
        image: "/products/product-interlock.png",
        description:
          "Spirally interlocked metal strip delivering exceptional crush strength and flexible casing.",
      },
    ],
  },
  {
    id: "automotive",
    label: "Automotive Division",
    eyebrow: "Powertrain & Exhaust Solutions",
    description:
      "Automotive exhaust flexible connectors and EGR tube assemblies engineered for BS-VI/Euro 6 compliance and 650 °C cyclic operation.",
    homeEyebrow: "Automotive Division",
    homeTitle: "Exhaust Connectors & EGR Tubes",
    homeSubtitle:
      "Flexible connectors and formed stainless tubing isolating vibration and thermal expansion across engines and after-treatment systems.",
    items: [
      {
        slug: "exhaust-connectors",
        title: "Automotive Exhaust Connectors",
        image: "/products/product-exhaust.png",
        description:
          "2-ply corrugated bellows with protective wire braid and interlock liner absorbing engine rock.",
      },
      {
        slug: "egr-tubes",
        title: "EGR Tubes",
        image: "/products/product-egr.png",
        description:
          "CNC bent and hydroformed stainless tubing withstanding 650 °C cyclic exhaust temperatures.",
      },
    ],
  },
] as const;

export const serviceHighlights = {
  eyebrow: "SERVICE HIGHLIGHTS",
  title: "DESIGNED FOR YOUR NEEDS",
  cta: "View All Services",
  ctaHref: "/services",
  items: [
    {
      title: "FENCING PANELS & HOARDINGS",
      description:
        "Temporary and continuous corrugated fencing panels for construction sites, project boundaries, and secure site enclosures.",
      href: "/products/fencing-panels",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "WIRE MESH, HERAS & CHAIN LINK",
      description:
        "Weld mesh, Heras, and chain link fence systems for temporary security and perimeter control.",
      href: "/products/wire-mesh-fence",
      image:
        "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "GI & PPGI COLOR COATED COILS",
      description:
        "Mill-finish galvanized coils and pre-painted color coils for roofing, cladding, and profiling.",
      href: "/products/gi-mill-finish-coils",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: "ROOFING, PURLINS & SANDWICH PANELS",
      description:
        "Decking, Z and C purlins, sandwich panels, flashings, gutters, and GRP skylight sheets.",
      href: "/products/decking-sheets",
      image:
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    },
  ],
} as const;

export const journey = {
  eyebrow: "STEPS TO SUCCESS",
  title: "OUR SUCCESSFUL JOURNEY",
  image:
    "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
  milestones: [
    {
      year: "2023",
      title: "ANNUAL INDUSTRY SUCCESS",
      description:
        "Vedant Steel began supplying certified structural steel and industrial metals to fabricators and contractors.",
      side: "right" as const,
    },
    {
      year: "2024",
      title: "KEY INDUSTRY MILESTONES",
      description:
        "Expanded stainless, alloy, plate, and coil stock to support larger construction and manufacturing orders.",
      side: "left" as const,
    },
    {
      year: "2025",
      title: "INDUSTRY PROGRESS REPORT",
      description:
        "Grew a trusted buyer network with mill-certified grades and on-schedule yard dispatch.",
      side: "right" as const,
    },
    {
      year: "2026",
      title: "CORPORATE SUCCESS",
      description:
        "Corporate Success highlights our strategic achievements and continuous growth.",
      side: "left" as const,
    },
  ],
  metricsTitle: "YEARLY SUCCESS METRICS",
  metricsSub: "Yearly Industrial Progress reflects our continuous growth.",
  marquee: ["HONORS AND ACHIEVEMENTS", "OUTSTANDING PERFORMANCE"],
} as const;

export const pricing = {
  eyebrow: "CHOOSE YOUR PLAN",
  title: "AFFORDABLE PLAN CHOICES",
  plans: [
    {
      name: "Basic",
      price: "$35",
      billing: "/ Weekly Billing",
      heading: "CORE STRUCTURAL STEEL SUPPLY",
      description:
        "Essential grades and sections to keep fabrication and site work moving.",
      features: ["TMT, Beams & Channels", "Mill Test Certificates"],
      featured: false,
    },
    {
      name: "Advanced",
      price: "$120",
      billing: "/ Monthly Billing",
      heading: "STAINLESS, ALLOY & PROJECT LOTS",
      description:
        "Broader metal range and coordinated dispatch for multi-item industrial orders.",
      features: ["Stainless & Alloy Stock", "Project Quantity Planning"],
      featured: true,
    },
    {
      name: "Premium",
      price: "$1200",
      billing: "/ Yearly Billing",
      heading: "FULL-YARD METALS PROGRAM",
      description:
        "Priority supply of plates, coils, pipes, and long products for ongoing manufacturing.",
      features: ["Dedicated Account Desk", "Scheduled Mill Deliveries"],
      featured: true,
    },
  ],
} as const;

export const stats = [
  { value: "2023", label: "Supplying Steel" },
  { value: "3", label: "Metal Ranges" },
  { value: "Mill", label: "Certified Grades" },
  { value: "Site", label: "Ready Dispatch" },
] as const;

export const about = {
  eyebrow: "Who We Are",
  watermark: "Steel",
  title: "Vedant Steel Corporation — Fence & Metals",
  description:
    "We supply fencing systems and coated metal products for construction sites, enclosures, roofing, and industrial buildings.",
  featureCards: [
    "Structural Steel",
    "Stainless & Alloys",
    "Plates, Sheets & Coils",
    "Pipes & Long Products",
  ],
  image:
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80",
  accentImage:
    "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
  paragraphs: [
    "Vedant Steel supplies the metals fabricators, contractors, and manufacturers specify — structural sections, stainless grades, and flat products, checked and dispatched from one yard.",
    "From TMT and beams to plates, coils, and pipes, we match grade, size, and quantity so your shop or site is never waiting on the wrong steel.",
  ],
  points: [
    {
      title: "Structural Steel",
      description: "Beams, channels, angles, TMT bars, and structural sections.",
    },
    {
      title: "Stainless & Alloys",
      description: "Corrosion-resistant stainless and special alloy grades.",
    },
    {
      title: "Flat Products",
      description: "Plates, sheets, and coils in hot-rolled and cold-rolled finish.",
    },
    {
      title: "Pipes & Processing",
      description: "Pipes, tubes, and cut-to-length supply for fabrication.",
    },
  ],
  caption: "Strength · Grade · Delivery",
} as const;

export const services = [
  {
    title: "TMT & Rebars",
    description:
      "High-strength TMT bars for reinforced concrete, supplied with mill test certificates.",
    icon: "trending" as const,
  },
  {
    title: "Beams & Channels",
    description:
      "Structural beams, channels, and angles for frames, sheds, and heavy fabrication.",
    icon: "lightbulb" as const,
  },
  {
    title: "Stainless Steel",
    description:
      "Sheets, pipes, and flats in stainless grades chosen for corrosion resistance.",
    icon: "network" as const,
  },
  {
    title: "Plates & Sheets",
    description:
      "Hot-rolled and cold-rolled plates and sheets cut or supplied in standard sizes.",
    icon: "clipboard" as const,
  },
  {
    title: "Coils",
    description:
      "Steel coils for rolling, pressing, and continuous fabrication lines.",
    icon: "users" as const,
  },
  {
    title: "Pipes & Tubes",
    description:
      "Carbon and stainless pipes and tubes for process, structural, and utility lines.",
    icon: "messages" as const,
  },
] as const;

export const growth = {
  eyebrow: "Stainless & Alloys",
  watermark: "Metals",
  title: "Corrosion-Resistant Steel",
  features: [
    {
      title: "Grade-matched stock",
      description:
        "Stainless and alloy grades selected for strength, finish, and corrosion resistance.",
      icon: "handshake" as const,
    },
    {
      title: "Project supply",
      description:
        "Quantities planned against drawings so fabrication starts with the right metal.",
      icon: "headset" as const,
    },
  ],
  primaryCta: "Request a Quote",
  secondaryCta: "View Products",
  images: {
    main: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=900&q=80",
    overlay:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=700&q=80",
  },
} as const;

export const projects = [
  {
    title: "TMT Bars",
    category: "Structural Steel",
    description: "High-strength reinforcement bars for concrete structures.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Beams & Sections",
    category: "Structural Steel",
    description: "Beams, channels, and angles for frames and industrial sheds.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Stainless Sheets",
    category: "Stainless & Alloys",
    description: "Stainless sheets for corrosion-resistant fabrication.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Steel Plates",
    category: "Flat Products",
    description: "Plates supplied for heavy fabrication and pressure work.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Coils",
    category: "Flat Products",
    description: "Hot-rolled and cold-rolled coils for continuous processing.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Pipes & Tubes",
    category: "Tubular Products",
    description: "Carbon and stainless pipes for structural and process lines.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Alloy Steels",
    category: "Special Metals",
    description: "Alloy grades for higher strength and wear resistance.",
    image:
      "https://images.unsplash.com/photo-1565043666747-69f6646db940?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Cut-to-Length",
    category: "Processing",
    description: "Sheets and plates cut to the sizes your shop specifies.",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1000&q=80",
  },
] as const;

export const team = [
  {
    name: "Structural Steel",
    role: "Long Products",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Stainless Steel",
    role: "Corrosion Resistance",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Plates & Coils",
    role: "Flat Products",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Pipes & Tubes",
    role: "Tubular Supply",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=600&q=80",
  },
] as const;

export const infrastructureIntro = {
  eyebrow: "Structural Steel",
  title: "Structural Steel",
  description:
    "TMT bars, beams, channels, and angles — mill-certified long products from Vedant Steel.",
} as const;

export const infrastructureItems = [
  {
    slug: "tmt",
    tag: "Structural",
    title: "TMT Bars",
    description:
      "High-strength TMT reinforcement bars supplied with mill test certificates for concrete work.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "beams",
    tag: "Structural",
    title: "Beams & Channels",
    description:
      "Structural beams and channels for frames, mezzanines, and industrial sheds.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "angles",
    tag: "Structural",
    title: "Angles & Flats",
    description:
      "Angles and flats for bracing, fabrication, and general structural use.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
  {
    slug: "sections",
    tag: "Structural",
    title: "Structural Sections",
    description:
      "Standard sections matched to drawings, ready for cutting and site delivery.",
    image:
      "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=1400&q=80",
    icon: "warehouse",
  },
] as const;

export const rental = {
  eyebrow: "Stainless & Alloys",
  title: "Stainless Steel & Special Alloys",
  description:
    "Stainless sheets, pipes, and alloy steels selected for corrosion resistance and process duty.",
  cta: "Request a Quote",
  image:
    "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1400&q=80",
} as const;

export const supplyIntro = {
  eyebrow: "Sheets, Plates & Coils",
  title: "Flat & Tubular Products",
  description:
    "Plates, sheets, coils, pipes, and processing — the metals Vedant Steel keeps ready for fabrication.",
} as const;

export const assetCategories = [
  {
    id: "construction",
    label: "Structural Steel",
    title: "Structural Steel",
    description:
      "Long products for construction frames, reinforcement, and heavy fabrication.",
    image:
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    items: [
      "TMT Bars",
      "Beams",
      "Channels",
      "Angles",
      "Flats",
      "Rounds",
      "Structural Sections",
    ],
  },
  {
    id: "electrical",
    label: "Stainless Steel",
    title: "Stainless Steel",
    description:
      "Corrosion-resistant stainless products for process, food, and architectural use.",
    image:
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    items: [
      "SS Sheets",
      "SS Plates",
      "SS Pipes",
      "SS Tubes",
      "SS Flats",
      "SS Coils",
    ],
  },
  {
    id: "office",
    label: "Plates & Sheets",
    title: "Plates & Sheets",
    description:
      "Hot-rolled and cold-rolled flat steel for cutting, welding, and pressing.",
    image:
      "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=1000&q=80",
    items: [
      "HR Plates",
      "CR Sheets",
      "Chequered Plates",
      "MS Sheets",
      "Cut-to-Size Plates",
    ],
  },
  {
    id: "medical",
    label: "Coils",
    title: "Steel Coils",
    description: "Coils for rolling lines, slitting, and continuous fabrication.",
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
    items: ["HR Coils", "CR Coils", "Galvanized Coils", "Slit Coils"],
  },
  {
    id: "safety",
    label: "Pipes & Tubes",
    title: "Pipes & Tubes",
    description:
      "Carbon and stainless tubular products for structural and process lines.",
    image:
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80",
    items: [
      "MS Pipes",
      "GI Pipes",
      "ERW Tubes",
      "Seamless Pipes",
      "Square Tubes",
    ],
  },
  {
    id: "packaging",
    label: "Alloys & Processing",
    title: "Alloys & Processing",
    description:
      "Special alloys plus cutting and dispatch support from the Vedant Steel yard.",
    image:
      "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
    items: [
      "Alloy Rounds",
      "Wear Plates",
      "Cut-to-Length",
      "Mill Test Certificates",
      "Site Delivery",
    ],
  },
] as const;

export const clients = [
  { name: "JSW Steel", mark: "JSW", line: "Steel" },
  { name: "Tata Steel", mark: "Tata", line: "Steel" },
  { name: "SAIL", mark: "SAIL", line: "Steel" },
  { name: "Jindal Steel", mark: "Jindal", line: "Steel" },
  { name: "Jindal Stainless", mark: "Jindal", line: "Stainless" },
  { name: "AM/NS India", mark: "AM/NS", line: "India" },
  { name: "POSCO", mark: "POSCO", line: "Steel" },
  { name: "Nippon Steel", mark: "Nippon", line: "Steel" },
] as const;

export const testimonials = [
  {
    quote:
      "Vedant Steel delivered certified TMT and beams on the dates we needed. Grades matched the mill certificates, and the yard team was straightforward to deal with.",
    name: "MARIE ESTHER",
    role: "Project Director",
    company: "Apex Structures",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Their stainless sheets and pipes held the corrosion spec on our process line. Clear pricing and reliable dispatch made them a standing supplier.",
    name: "SIGRUN CAROLA",
    role: "Plant Manager",
    company: "Northline Plants",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
  {
    quote:
      "Plates and coils arrived cut to our list. Vedant Steel is the metals desk we call when a fabrication job cannot wait.",
    name: "RAHUL MEHTA",
    role: "Works Manager",
    company: "Metro Fabricators",
    rating: 4,
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&q=80",
  },
] as const;

export const blogs = {
  eyebrow: "RECENT BLOGS",
  title: "LATEST INDUSTRY TRENDS",
  items: [
    {
      date: "February 19, 2026",
      title: "HOW MILL CERTIFICATES PROTECT STRUCTURAL STEEL QUALITY",
      href: "/about",
      image:
        "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1000&q=80",
    },
    {
      date: "February 18, 2026",
      title: "CHOOSING STAINLESS GRADES FOR CORROSION RESISTANCE",
      href: "/services?tab=rental",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1000&q=80",
    },
    {
      date: "February 18, 2026",
      title: "PLATES, COILS, AND PIPES FOR MODERN FABRICATION",
      href: "/services",
      image:
        "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=1000&q=80",
    },
  ],
} as const;

export const homeContact = {
  eyebrow: "LET'S TALK",
  title: "CONNECT WITH US",
  description:
    "Tell us the fence or metal product and the quantity. Call 971-565686811 or send the form. Vedant Steel Corporation replies within 12 hours.",
  image:
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=2000&q=80",
} as const;

export const contactNeeds = [
  "Fencing Panels & Hoardings",
  "PVC Eco Fence",
  "Wire Mesh / Weld Mesh / Heras Fence",
  "Chain Link Fence",
  "GI Mill Finish Coils",
  "PPGI Color Coated Coils",
  "Sandwich Panels",
  "Corrugated Color Sheets",
  "Decking Sheets",
  "Z & C Purlins",
  "Drywall Partition Systems",
  "Roofing Flashings & Gutters",
  "GRP Translucent Sheets - Skylights",
] as const;

export const industriesList = [
  {
    "slug": "power-coal-thermal-gas",
    "title": "Power (Coal, Thermal &amp; Gas)",
    "description": "Stainless steel expansion bellows and flexible hoses for coal, thermal and gas power plants — boiler feed, turbine and flue gas ducting from SS Flexhose India.",
    "paras": [
      "Long steam and flue-gas headers expand by hundreds of millimetres between cold and hot condition, tearing rigid welds if unrestrained.",
      "Boiler feed pumps, FD/ID fans and turbines transmit vibration into connected piping, fatiguing flanges and instrumentation.",
      "Pulverised-fuel ash abrades duct internals; bellows convolutions must resist particulate wear as well as heat.",
      "Single, universal and hinged expansion joints designed for the axial, lateral and angular movement the piping stress report demands.",
      "AISI 321 / 316L corrugated hose with single or double SS braid for boiler feed, drain and instrument tap-off lines."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Thermal growth",
      "High-cycle vibration",
      "Erosive flue gas",
      "Our solution for coal, thermal &amp; gas power."
    ]
  },
  {
    "slug": "power-nuclear-atomic",
    "title": "Power (Nuclear &amp; Atomic)",
    "description": "Stainless steel flexible hoses and bellows for nuclear and atomic power projects — full material traceability, radiography and NDE from SS Flexhose India.",
    "paras": [
      "Radiological and safety-critical circuits demand seam integrity and full NDE coverage.",
      "Every heat number, weld, test and inspection stage must reconcile to the tag.",
      "Vendor approval, sample submission and inspection sign-off compress delivery windows.",
      "Assemblies built against client / TPI QAP with hold points, PMI, radiography and helium leak testing as specified.",
      "Nuclear-grade stainless with mill test certificates, PMI verification and dye-penetrant on every longitudinal seam."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Zero tolerance for leakage",
      "Material traceability",
      "Long qualification lead-time",
      "Our solution for nuclear &amp; atomic power."
    ]
  },
  {
    "slug": "chemicals-petrochemicals-refinery",
    "title": "Chemicals, Petrochemicals, Oil &amp; Gas Refinery",
    "description": "Corrosion-resistant SS braided hoses, bellows and expansion joints for chemical plants, petrochemicals and oil refinery process lines. SS Flexhose India.",
    "paras": [
      "Acids, solvents, hot hydrocarbons and chlorides attack lesser stainless grades.",
      "Reciprocating pumps and compressors transmit high-frequency vibration into suction and discharge piping.",
      "Loading arms and hose assemblies see repeated flexing, drag and pull-away events.",
      "316L, 321, Inconel 625, Hastelloy C-276 cores matched to media, temperature and chloride content.",
      "Suction / discharge pump connectors that absorb vibration and misalignment without loading the flange."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Aggressive chemistry",
      "Rotating equipment vibration",
      "Tanker &amp; bay loading",
      "Our solution for chemicals, petrochemicals &amp; refinery."
    ]
  },
  {
    "slug": "pulp-and-paper",
    "title": "Pulp and Paper",
    "description": "SS flexible hoses and rubber bellows for pulp &amp; paper mills — slurry, steam, vacuum and pump connections that survive abrasion and thermal cycling.",
    "paras": [
      "Pulp fibre and filler are mildly abrasive at pump speeds; convolutions must resist wear.",
      "Dryer cans and steam headers cycle between cold start and full temperature every campaign.",
      "White liquor, black liquor and green liquor circuits demand careful material selection.",
      "EPDM / Nitrile spool-type expansion joints for pulp and process water pump connections, absorbing vibration and misalignment.",
      "316L / 321 hose for steam, condensate and recovery liquor service, rated to +600 °C."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Slurry abrasion",
      "Thermal cycling",
      "Chemical recovery corrosion",
      "Our solution for pulp &amp; paper."
    ]
  },
  {
    "slug": "cement-industry",
    "title": "Cement Industry",
    "description": "Expansion bellows and interlock hoses for cement plants — kiln, preheater and dust-extraction ducting engineered by SS Flexhose India for heat and abrasion.",
    "paras": [
      "Preheater and tertiary air ducts operate at 700-1000 °C with occasional excursions.",
      "Raw meal, clinker dust and CKD abrade convolutions and internal sleeves.",
      "Long kiln and duct runs expand by hundreds of millimetres between cold and hot state.",
      "Multi-ply stainless bellows with internal liners and insulation packs for kiln hood and tertiary air duct expansion joints.",
      "Stripwound interlock hose for hot air, dust and cement conveying between static and moving equipment."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Extreme temperature",
      "Abrasive dust load",
      "Large thermal movement",
      "Our solution for cement."
    ]
  },
  {
    "slug": "ship-building-marine",
    "title": "Ship Building &amp; Marine",
    "description": "Marine-grade SS flexible hoses, bellows and rubber expansion joints for shipbuilding — engine room, fuel, ballast and sea-water cooling circuits.",
    "paras": [
      "Sea-water cooling and ballast lines chew through inappropriate stainless grades.",
      "Main and auxiliary engines pump vibration into fuel, lube and cooling piping.",
      "Engine rooms leave little space for pipe flexibility; short flexible elements do the work.",
      "Corrosion-resistant cores and braids for sea-water and ballast service.",
      "Marine-grade EPDM / Nitrile expansion joints for sea-water pumps and general service."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Salt-water corrosion",
      "Engine-room vibration",
      "Confined routing",
      "Our solution for shipbuilding &amp; marine."
    ]
  },
  {
    "slug": "cryogenics-lng-transfer",
    "title": "Cryogenics &amp; LNG Transfer",
    "description": "Cryogenic SS corrugated hoses for LNG, LOX, LIN and LAr transfer — vacuum-jacket-compatible assemblies from SS Flexhose India, rated to -200 °C.",
    "paras": [
      "Standard carbon materials become brittle; only austenitic stainless retains ductility to -200 °C.",
      "Fill and drain cycles hammer the hose from ambient to cryogenic in seconds.",
      "Cryogenic gas leaks are hard to detect and dangerous; every weld must be pressure and dye-penetrant tested.",
      "Fully austenitic cores and braids selected for cryogenic ductility and cycle life.",
      "Hydro, pneumatic and dye-penetrant testing with certificates per assembly."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Extreme cold embrittlement",
      "Thermal shock cycling",
      "Leak-tightness",
      "Our solution for cryogenics &amp; lng."
    ]
  },
  {
    "slug": "commercial-food-services",
    "title": "Commercial Food Services",
    "description": "Stainless steel gas and water flexible hose assemblies for commercial kitchens, food processing and CIP transfer lines — SS Flexhose India.",
    "paras": [
      "Assemblies must handle repeated CIP / SIP without degradation.",
      "Cook-line gas connections must be leak-tight and fire-safe.",
      "Cook-line and prep equipment gets moved for cleaning; hoses flex daily.",
      "Stainless corrugated core with SS braid for LPG / PNG cook-line connections.",
      "316L cores for hot water, CIP and food-contact service."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Cleanability",
      "Gas safety",
      "Frequent movement",
      "Our solution for commercial food services."
    ]
  },
  {
    "slug": "hospitality",
    "title": "Hospitality (Hotels, Hospitals)",
    "description": "Gas, water, chilled-water and HVAC flexible connectors for hotels and hospitals — SS Flexhose India supplies pump connectors, bellows and hose assemblies.",
    "paras": [
      "Guest and clinical operations cannot accept unplanned outage for a failed connector.",
      "One site can carry chilled water, hot water, steam, gas and medical gas circuits in parallel.",
      "Rooftop chillers and boiler-room pumps transmit noise into occupied spaces.",
      "Spool and twin-sphere EPDM connectors for chilled-water and hot-water pump isolation.",
      "For gas, medical gas, hot water and steam service in tight plant rooms."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Zero downtime tolerance",
      "Mixed services",
      "Vibration isolation",
      "Our solution for hotels &amp; hospitals."
    ]
  },
  {
    "slug": "water-treatment",
    "title": "Water Treatment &amp; Waste Water",
    "description": "Rubber and SS expansion joints for water treatment plants, sewage and pumping stations — pump isolation and pipe movement handled by SS Flexhose India.",
    "paras": [
      "Large centrifugal pumps stress connected piping without isolation.",
      "Concrete-buried pipe runs settle over time, loading rigid connections.",
      "Sewage and process effluent demand corrosion-resistant construction.",
      "Spool, twin-sphere and single-sphere EPDM / Nitrile joints for pump inlet and outlet.",
      "Where temperature or effluent chemistry exceeds elastomer service, stainless bellows take over."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Pump vibration &amp; noise",
      "Settlement of buried piping",
      "Aggressive effluent",
      "Our solution for water &amp; waste water."
    ]
  },
  {
    "slug": "steel-industry",
    "title": "Steel Industry",
    "description": "SS corrugated hoses, bellows and expansion joints for steel plants — blast furnace, BOF, EAF and rolling-mill cooling and gas circuits from SS Flexhose India.",
    "paras": [
      "Furnace and hot-strip mill environments push ducting and hose temperatures to their limits.",
      "Rolling mills use high-pressure hydraulic circuits with constant flexing.",
      "Reversing mill stands and reheat furnaces transmit vibration into service piping.",
      "321 / 310 / Inconel bellows for blast-furnace gas, BOF exhaust and reheat furnace ducting.",
      "SS braided hose for mill hydraulic tap-offs and heavy-duty flex service."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Radiant heat &amp; hot dust",
      "High pressure hydraulics",
      "Vibration from mill drives",
      "Our solution for steel &amp; metallurgy."
    ]
  },
  {
    "slug": "aerospace-defense",
    "title": "Aerospace &amp; Defense",
    "description": "Precision SS flexible hose assemblies and bellows for aerospace and defence programmes — full material traceability, NDE and pressure testing from SS Flexhose India.",
    "paras": [
      "Assemblies must meet drawing dimension and fit-up tolerances first-time.",
      "Every heat number, weld and test result must reconcile to the tag.",
      "Manufacture runs under the programme&#x27;s approved QAP with hold-point inspection.",
      "6 NB upwards, hydroformed cores with mirror-finish welds and pressure testing.",
      "Mill certificates, PMI, dimensional and pressure test records supplied per tag."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Tight tolerance",
      "Full traceability",
      "Programme QAP",
      "Our solution for aerospace &amp; defence."
    ]
  },
  {
    "slug": "mining-construction",
    "title": "Mining &amp; Construction",
    "description": "Interlock hoses, SS braided hydraulics and exhaust connectors for mining and heavy construction equipment — SS Flexhose India.",
    "paras": [
      "Site conditions punish exposed hose runs — external protection matters as much as pressure rating.",
      "Diesel gensets and heavy equipment transmit high-amplitude vibration into exhaust and hydraulic lines.",
      "Fine particulate finds its way into every threaded and flanged joint.",
      "Impact- and abrasion-resistant interlock construction for exhaust, dust and material conveying.",
      "SS braided assemblies for hydraulics and high-vibration service."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Impact &amp; abrasion",
      "High-vibration diesel plant",
      "Dust ingress",
      "Our solution for mining &amp; construction."
    ]
  },
  {
    "slug": "automotive-oem",
    "title": "Automotive &amp; OEM",
    "description": "Automotive exhaust flex connectors, EGR tubes and interlock hoses for OEM and tier-1 programmes — SS Flexhose India, serving Indian and export automotive customers.",
    "paras": [
      "Exhaust and EGR components cycle from ambient to over 700 °C every trip.",
      "Engine and driveline vibration attacks any rigid tie-in in the exhaust system.",
      "OEM programmes demand part-to-part repeatability and full documentation.",
      "Corrugated core with interlock inner sleeve and mesh braid or outer interlock — engineered for engine mount decoupling.",
      "Formed stainless EGR tubes with weld-end or flanged connections to the exhaust and intake manifolds."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "Thermal cycling",
      "High vibration",
      "PPAP-grade repeatability",
      "Our solution for automotive &amp; oem."
    ]
  },
  {
    "slug": "data-centers",
    "title": "Data Centers",
    "description": "SS braided hoses, bellows and expansion joints for data center cooling, CRAC/CRAH, generator fuel and fire suppression systems — SS Flexhose India.",
    "paras": [
      "CRAC/CRAH fans, chilled-water pumps and diesel gensets run continuously, transmitting vibration into rigid piping.",
      "Chilled-water circuits and generator exhaust swing between ambient and operating temperature every day.",
      "Any leak near live IT racks or electrical switchgear is a critical event; connectors must be pressure-tested and reliable.",
      "SS braided corrugated hose and rubber expansion joints isolate vibration between chillers, CRAC units and circulation pumps.",
      "High-temperature exhaust flex connectors and interlock hose for standby diesel gensets."
    ],
    "headings": [
      "What breaks piping in this sector.",
      "24/7 vibration",
      "Thermal cycling",
      "Zero leakage tolerance",
      "Our solution for data centers."
    ]
  }
] as const;
