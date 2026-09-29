export type LegacyServiceCategory = "Construction & Civil" | "Structural & Fabrication" | "Industrial Finishing" | "Glass, uPVC & Aluminium";

export type ServiceFamily =
  | "Construction Works"
  | "Industrial Fabrication"
  | "Industrial Shed Construction"
  | "Structural Works"
  | "Civil & Site Development"
  | "Gate & Entry Works"
  | "Industrial & Exterior Painting"
  | "Gas Cylinder Painting / Industrial Coating"
  | "Ceiling works (all types, including graded ceilings)"
  | "Ceiling Works"
  | "Glass works"
  | "uPVC windows"
  | "Aluminium structures";

export interface ServiceItem {
  id: string;
  name: ServiceFamily;
  benefit?: string;
  description: string;
  scope: string[];
  category: LegacyServiceCategory;
  visual: string;
  capabilityGate?: string;
}

export interface CredentialItem {
  id: string;
  title: string;
  issuingBody: string;
  type: string;
  status: "Documented & Active" | "Verified Record";
  note: string;
}

export interface IndustryItem {
  id: string;
  title: string;
  description: string;
  focus: string;
}

export interface ProjectStage {
  id: string;
  label: string;
  title: string;
  description: string;
  visual: string;
  frameIndex?: number;
}

export interface SequenceStage {
  id: string;
  stage: "SITE" | "FABRICATION" | "STRUCTURE" | "FINISH" | "COMPLETED";
  stepNumber: string;
  title: string;
  narrative: string;
  description: string;
  range: [number, number]; // [startPct, endPct] 0-1
  frameRange: [number, number]; // [1, 200]
  checkpointFrame: number;
}

export type EvidenceStatus =
  | "VERIFIED_RECORD"
  | "CAPABILITY_SCOPE"
  | "CAPABILITY_CONTEXT"
  | "PENDING_EVIDENCE";

export type ProjectVisualType =
  | "CERTIFICATE_DOCUMENT"
  | "SITE_PHOTOGRAPHY"
  | "ILLUSTRATIVE_PLATE"
  | "TECHNICAL_DIAGRAM";

export interface SelectedProject {
  id: string;
  title: string;
  client?: string;
  clientStatus?: "VERIFIED_CLIENT" | "PERMISSIONED" | "CONFIDENTIAL";
  location: string;
  year?: string;
  documentedScope: string;
  workPerformed: string[];
  relatedServices: ServiceFamily[];
  evidenceStatus: "VERIFIED_RECORD";
  evidenceReference?: string;
  description: string;
  featured: boolean;
  visual: string;
  visualType: ProjectVisualType;
  visualCaption?: string;
}

export interface CapabilityPackage {
  id: string;
  title: string;
  operationalScope: string;
  scopeDeliverables: string[];
  relatedServices: ServiceFamily[];
  evidenceClass: "CAPABILITY_SCOPE";
  statutoryBasis?: string;
  description: string;
  visual: string;
  visualType: ProjectVisualType;
  visualCaption?: string;
  capabilityGate?: string;
}

export interface MediaAssetMetadata {
  id: string;
  url: string;
  alt: string;
  assetType: "AI_ILLUSTRATIVE" | "CERTIFICATE" | "3D_MODEL" | "REAL_PROJECT";
  publicUsage: "APPROVED" | "PENDING_REVIEW" | "INTERNAL_ONLY";
  caption: string;
  note?: string;
}

export const BUSINESS_INFO = {
  name: "Kwality Interiors",
  owner: "Abdul Aleem",
  established: 2019,
  type: "Industrial Construction & Execution",
  phone: "9849183165",
  formattedPhone: "+91 98491 83165",
  email: "Kwality9849@gmail.com",
  gstin: "36DAPPA9150R1ZY",
  stateCode: "36 (Telangana)",
  address: {
    line1: "2-5-36/50/21/SHOP-1, Spectrum Oasis Layout",
    landmark: "Pillar No. 202, D-Mart Back Side",
    area: "Rajendra Nagar",
    city: "Hyderabad",
    state: "Telangana",
    pincode: "500048",
    full: "2-5-36/50/21/SHOP-1, Spectrum Oasis Layout, Pillar No. 202, D-Mart Back Side, Rajendra Nagar, Telangana – 500048",
  },
  whatsappUrl:
    "https://wa.me/919849183165?text=Hello%20Kwality%20Interiors%2C%20I%20would%20like%20to%20discuss%20a%20project.",
  tagline: "Industrial construction, fabrication, structural and site execution",
  shortDescription:
    "Established in 2019 in Rajendra Nagar, Hyderabad, Kwality Interiors executes industrial construction, structural steel framing, pipe racks, industrial sheds, site development, protective painting, glass works, uPVC windows, aluminium structures, and ceiling systems.",
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: "industrial-shed-construction",
    name: "Industrial Shed Construction",
    category: "Structural & Fabrication",
    benefit: "Engineered factory and warehouse structural framing and roofing.",
    description: "Industrial shed construction and erection work for factories, warehouses and industrial facilities.",
    scope: ["Steel framing", "Roofing and cladding", "Erection coordination", "Industrial envelopes"],
    visual: "/visuals/flagship-overview.svg",
  },
  {
    id: "structural-works",
    name: "Structural Works",
    category: "Structural & Fabrication",
    benefit: "Heavy structural steel framing, pipe racks, and erection.",
    description: "Structural steel work including framing, pipe racks, supports and related industrial structures.",
    scope: ["Structural steel", "Pipe racks", "Supports", "Framing and connections"],
    visual: "/visuals/flagship-completed.svg",
  },
  {
    id: "industrial-fabrication",
    name: "Industrial Fabrication",
    category: "Structural & Fabrication",
    benefit: "Component fabrication and assembly executed to drawing specifications.",
    description: "Fabrication work for structural frames, pipe racks, supports, gates and project-specific assemblies.",
    scope: ["Structural assemblies", "Pipe-rack components", "Supports and brackets", "Site fabrication"],
    visual: "/visuals/flagship-detail.svg",
  },
  {
    id: "civil-site-development",
    name: "Civil & Site Development",
    category: "Construction & Civil",
    benefit: "Site preparation, foundation support, and industrial civil works.",
    description: "Civil and site-development execution for industrial environments, including site preparation and related works.",
    scope: ["Site preparation", "Grading and levelling", "Civil works", "Site maintenance"],
    visual: "/visuals/capability-system.svg",
  },
  {
    id: "industrial-exterior-painting",
    name: "Industrial & Exterior Painting",
    category: "Industrial Finishing",
    benefit: "Protective surface coating for exterior walls, pillars, and steel structures.",
    description: "Industrial and exterior painting for walls, pillars, structures and specified coated surfaces.",
    scope: ["Exterior walls", "Pillars and structures", "Surface preparation", "Protective finishes"],
    visual: "/visuals/flagship-finish.svg",
  },
  {
    id: "gas-cylinder-coating",
    name: "Gas Cylinder Painting / Industrial Coating",
    category: "Industrial Finishing",
    benefit: "Industrial protective coating and finish systems for cylinders and steel.",
    description: "Industrial coating and painting work for gas cylinders and other specified industrial surfaces.",
    scope: ["Cylinder painting", "Industrial coating", "Surface preparation", "Specified finish systems"],
    visual: "/visuals/flagship-finish.svg",
  },
  {
    id: "gate-entry",
    name: "Gate & Entry Works",
    category: "Structural & Fabrication",
    benefit: "Fabricated steel gates, portals, and site access structures.",
    description: "Fabricated gates, entry structures and associated steel work for industrial and commercial sites.",
    scope: ["Entry structures", "Fabricated gates", "Steel portals", "Site access elements"],
    visual: "/visuals/capability-system.svg",
  },
  {
    id: "glass-works",
    name: "Glass works",
    category: "Glass, uPVC & Aluminium",
    benefit: "Architectural glass installations, facades, and commercial partitions.",
    description: "Commercial and industrial architectural glass works, partitions, facades and site execution.",
    scope: ["Glass installations", "Partitions", "Architectural glazing", "Site execution"],
    visual: "/visuals/capability-system.svg",
  },
  {
    id: "upvc-windows",
    name: "uPVC windows",
    category: "Glass, uPVC & Aluminium",
    benefit: "Precision-measured, weather-sealed uPVC window fabrication and fitting.",
    description: "Fabrication and site installation of durable uPVC windows and window systems.",
    scope: ["uPVC windows", "Frame installation", "Site fitting", "Commercial envelopes"],
    visual: "/visuals/capability-system.svg",
  },
  {
    id: "aluminium-structures",
    name: "Aluminium structures",
    category: "Glass, uPVC & Aluminium",
    benefit: "Architectural and industrial aluminium structural framing and enclosures.",
    description: "Architectural and industrial aluminium structural framing, profiles and commercial enclosures.",
    scope: ["Aluminium framing", "Structural profiles", "Site installation", "Enclosures"],
    visual: "/visuals/capability-system.svg",
  },
  {
    id: "ceiling-works",
    name: "Ceiling works (all types, including graded ceilings)",
    category: "Construction & Civil",
    benefit: "Full-scope ceiling installations including industrial and graded ceilings.",
    description: "Comprehensive ceiling works for industrial and commercial spaces, including all types and graded ceiling installations.",
    scope: ["Commercial ceilings", "Industrial ceilings", "Graded ceilings", "Site execution"],
    visual: "/visuals/ceiling-systems.svg",
  },
  {
    id: "construction-works",
    name: "Construction Works",
    category: "Construction & Civil",
    benefit: "Commercial and industrial construction coordination and site execution.",
    description: "Construction execution for industrial and commercial environments, coordinated around the required site scope.",
    scope: ["Site execution", "Building works", "Ancillary structures", "Material and trade coordination"],
    visual: "/visuals/hero-industrial.svg",
  },
];

export const VERIFIED_SERVICES = SERVICES;

export const PROCESS_STEPS = [
  { step: "01", name: "Understand", description: "We review your drawings, BOQ and site conditions." },
  { step: "02", name: "Plan", description: "You get a clear quotation, timeline and manpower plan." },
  { step: "03", name: "Mobilize", description: "Materials, crew and safety setup arrive on site." },
  { step: "04", name: "Execute", description: "Fabrication and erection to drawing, with regular updates." },
  { step: "05", name: "Inspect / Complete", description: "Quality check and handover." },
];

export const SERVICE_CATEGORIES: LegacyServiceCategory[] = ["Construction & Civil", "Structural & Fabrication", "Industrial Finishing", "Glass, uPVC & Aluminium"];

export const INDUSTRIES_SERVED: IndustryItem[] = [
  { id: "solar", title: "Solar manufacturing", description: "Industrial manufacturing environments and associated site execution.", focus: "Structural work • pipe racks • sheds • site work" },
  { id: "industrial", title: "Industrial facilities", description: "Factories, utility areas and industrial sites requiring coordinated execution.", focus: "Fabrication • structures • painting" },
  { id: "construction", title: "Construction & infrastructure", description: "Civil and structural packages within broader construction projects.", focus: "Civil works • site development • structures" },
  { id: "commercial", title: "Commercial environments", description: "Commercial and business sites requiring practical building and finishing work.", focus: "Construction • gates • ceilings • finishing" },
];

export const DOCUMENTED_CREDENTIALS: CredentialItem[] = [
  {
    id: "cred-gst",
    title: "GST Registration",
    issuingBody: "Government of India / Telangana State",
    type: "Statutory registration",
    status: "Documented & Active",
    note: `GSTIN: ${BUSINESS_INFO.gstin}`,
  },
  {
    id: "cred-udyam",
    title: "Udyam Registration",
    issuingBody: "Ministry of MSME, Government of India",
    type: "Enterprise registration",
    status: "Documented & Active",
    note: "Udyam registration is part of the company credential record.",
  },
  {
    id: "cred-labour",
    title: "Labour Licence",
    issuingBody: "Labour Department, Government of Telangana",
    type: "Labour / statutory record",
    status: "Documented & Active",
    note: "Documented labour licence included in the company credential record.",
  },
  {
    id: "cred-construction",
    title: "Construction Licence",
    issuingBody: "Competent statutory authority",
    type: "Contractor operating record",
    status: "Documented & Active",
    note: "Documented construction licence included in the company credential record.",
  },
  {
    id: "cred-premier",
    title: "Certificate of Appreciation",
    issuingBody: "Premier Energies Global Environment Private Limited",
    type: "Corporate appreciation",
    status: "Verified Record",
    note: "Certificate dated 09 July 2026 for Pipe Racks & Structural Works connected to the 5.6 GW Solar Module Line Manufacturing Unit at Setharampur, Telangana.",
  },
];

export const PREMIER_PROOF = {
  documentTitle: "Certificate of Appreciation",
  presentationType: "Certificate Record",
  recordLabel: "Documented Certificate Record",
  issuingOrganization: "Premier Energies Global Environment Private Limited",
  client: "Premier Energies Global Environment Private Limited",
  recipient: "Kwality Interiors",
  scope: "Pipe Racks & Structural Works",
  project: "5.6 GW Solar Module Line Manufacturing Unit",
  location: "Setharampur, Telangana, India",
  date: "09 July 2026",
  safeClaim: "Kwality Interiors contributed pipe-rack and structural works to the 5.6 GW Solar Module Line Manufacturing Unit.",
  verificationStatus: "VERIFIED_RECORD",
  citation: "Corporate Certificate of Appreciation dated 09 July 2026",
  transcriptDisclaimer: "Physical certificate issued by Premier Energies Global Environment Private Limited on 09 July 2026.",
} as const;

export interface ClientRelationship {
  id: string;
  name: string;
  category: string;
  verifiedScope: string;
  status: "Verified Relationship";
}

export const CLIENT_RELATIONSHIPS: ClientRelationship[] = [
  { id: "premier-energies", name: "Premier Energies Global Environment Private Limited", category: "Solar manufacturing", verifiedScope: PREMIER_PROOF.safeClaim, status: "Verified Relationship" },
];

export const SELECTED_PROJECTS: SelectedProject[] = [
  {
    id: "premier-solar-pipe-racks",
    title: "5.6 GW Solar Module Line Manufacturing Unit",
    client: "Premier Energies Global Environment Private Limited",
    clientStatus: "VERIFIED_CLIENT",
    location: "Setharampur, Telangana, India",
    year: "2026",
    documentedScope: "Pipe Racks & Structural Works",
    workPerformed: [
      "Pipe Racks & Structural Works (Appreciated by Premier Energies)",
    ],
    relatedServices: ["Structural Works", "Industrial Fabrication"],
    evidenceStatus: "VERIFIED_RECORD",
    evidenceReference: "Corporate Certificate of Appreciation dated 09 July 2026",
    description: "Kwality Interiors contributed pipe-rack and structural works to the 5.6 GW Solar Module Line Manufacturing Unit at Setharampur, Telangana, supporting plant piping and utility infrastructure.",
    featured: true,
    visual: "/frames/frame-100.jpg",
    visualType: "SITE_PHOTOGRAPHY",
    visualCaption: "Structural pipe-rack framework execution for Premier Energies 5.6 GW solar module unit.",
  },
];

export const CAPABILITY_PACKAGES: CapabilityPackage[] = [
  {
    id: "cap-industrial-sheds",
    title: "Industrial Shed Construction & Steel Envelopes",
    operationalScope: "Factory Shed Framing, Steel Truss Erection & Industrial Envelopes",
    scopeDeliverables: [
      "Heavy structural steel frame erection for factory sheds",
      "PEB truss alignment, purlin installation, and bracing",
      "Industrial corrugated roofing and wall cladding coordination",
    ],
    relatedServices: ["Industrial Shed Construction", "Structural Works", "Construction Works"],
    evidenceClass: "CAPABILITY_SCOPE",
    statutoryBasis: "Contractor Operating Licences & Registered Business Scope",
    description: "Execution of industrial factory sheds and warehouse envelopes, engineered for industrial operations and manufacturing plant space.",
    visual: "/frames/frame-050.jpg",
    visualType: "TECHNICAL_DIAGRAM",
    visualCaption: "Steel shed erection and structural assembly stage.",
  },
  {
    id: "cap-protective-coatings",
    title: "Industrial Protective Coating & Cylinder Finishing",
    operationalScope: "Gas Cylinder Industrial Coating, Anti-Corrosive Painting & Surface Preparation",
    scopeDeliverables: [
      "Surface preparation and blast/chemical cleaning",
      "High-durability protective epoxy and polyurethane coating",
      "Industrial gas cylinder finishing and safety color marking",
    ],
    relatedServices: ["Gas Cylinder Painting / Industrial Coating", "Industrial & Exterior Painting"],
    evidenceClass: "CAPABILITY_SCOPE",
    statutoryBasis: "Approved Service Taxonomy & Statutory Operational Scope",
    description: "Specialized industrial coating and finishing operations for gas cylinders, structural steel members, and industrial facility exteriors requiring weather and chemical resistance.",
    visual: "/frames/frame-140.jpg",
    visualType: "TECHNICAL_DIAGRAM",
    visualCaption: "Protective coating and finishing application.",
  },
  {
    id: "cap-ceiling-systems",
    title: "Commercial & Facility Ceiling Systems",
    operationalScope: "Suspended, Grid & Graded Ceiling Works",
    scopeDeliverables: [
      "Commercial and industrial ceiling installation",
      "Structural grid and framework fitting",
      "Graded ceiling alignment and perimeter finishing",
    ],
    relatedServices: ["Ceiling works (all types, including graded ceilings)"],
    evidenceClass: "CAPABILITY_SCOPE",
    statutoryBasis: "Contractor Operating Scope",
    description: "Installation of commercial and facility ceiling systems across all types, including graded ceilings.",
    visual: "/visuals/ceiling-systems.svg",
    visualType: "TECHNICAL_DIAGRAM",
    visualCaption: "Ceiling installation details.",
  },
];

export const SIGNATURE_SEQUENCE_STAGES: SequenceStage[] = [
  {
    id: "stage-site",
    stage: "SITE",
    stepNumber: "01",
    title: "Site Baseline",
    narrative: "A PROJECT STARTS WITH THE SITE.",
    description: "Site preparation and ground coordinates establish the working baseline before structural erection begins.",
    range: [0, 0.2],
    frameRange: [1, 40],
    checkpointFrame: 1,
  },
  {
    id: "stage-fabrication",
    stage: "FABRICATION",
    stepNumber: "02",
    title: "Fabrication & Assembly",
    narrative: "THEN THE STRUCTURE TAKES FORM.",
    description: "Cutting, welding, and assembling structural members, pipe-rack sections, and support frameworks.",
    range: [0.2, 0.4],
    frameRange: [41, 80],
    checkpointFrame: 50,
  },
  {
    id: "stage-structure",
    stage: "STRUCTURE",
    stepNumber: "03",
    title: "Structural Framing",
    narrative: "EVERY CONNECTION CHANGES THE SCALE.",
    description: "Structural columns, beams, bracing, and pipe-rack assemblies align into an interconnected frame.",
    range: [0.4, 0.6],
    frameRange: [81, 120],
    checkpointFrame: 100,
  },
  {
    id: "stage-finish",
    stage: "FINISH",
    stepNumber: "04",
    title: "Finishing & Coating",
    narrative: "THE FRAME BECOMES A WORKING SPACE.",
    description: "Protective painting, industrial coating, and structural finishing prepare the frame for site use.",
    range: [0.6, 0.8],
    frameRange: [121, 160],
    checkpointFrame: 140,
  },
  {
    id: "stage-completed",
    stage: "COMPLETED",
    stepNumber: "05",
    title: "Completed Framework",
    narrative: "FROM GROUND TO COMPLETED FACILITY.",
    description: "The sequence completes the structural cycle, from open site to finished framework.",
    range: [0.8, 1.0],
    frameRange: [161, 200],
    checkpointFrame: 195,
  },
];

export const FLAGSHIP_PROJECT_STAGES: ProjectStage[] = [
  {
    id: "overview",
    label: "Site",
    title: "A project starts with the site",
    description: "Baseline layout and ground preparation establishing structural coordinates.",
    visual: "/frames/frame-001.jpg",
    frameIndex: 1,
  },
  {
    id: "wip",
    label: "Fabrication",
    title: "Then the structure takes form",
    description: "Shop and site fabrication of structural steel framing and pipe-rack members.",
    visual: "/frames/frame-050.jpg",
    frameIndex: 50,
  },
  {
    id: "detail",
    label: "Structure",
    title: "Every connection changes the scale",
    description: "Erection of columns, heavy trusses, and rigid structural joints at scale.",
    visual: "/frames/frame-100.jpg",
    frameIndex: 100,
  },
  {
    id: "finish",
    label: "Finish",
    title: "The frame becomes a working space",
    description: "Protective coating, industrial painting, envelope completion, and service access.",
    visual: "/frames/frame-140.jpg",
    frameIndex: 140,
  },
  {
    id: "completed",
    label: "Completed",
    title: "From ground to completed facility",
    description: "The completed steel framework ready for building handover and subsequent works.",
    visual: "/frames/frame-195.jpg",
    frameIndex: 195,
  },
];

export const MEDIA_REGISTRY: Record<string, MediaAssetMetadata> = {
  hero: { id: "v5-hero", url: "/visuals/hero-industrial.svg", alt: "Industrial steel framework composition", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Industrial execution atmosphere", note: "Locally hosted V5 art-direction plate. Replace with approved real photographic media when available." },
  capability: { id: "v5-capability", url: "/visuals/capability-system.svg", alt: "Connected industrial execution system", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Execution system overview" },
  flagshipOverview: { id: "v5-flagship-overview", url: "/visuals/flagship-overview.svg", alt: "Industrial structural framework", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Structural framework" },
  flagshipWip: { id: "v5-flagship-wip", url: "/visuals/flagship-wip.svg", alt: "Structural work in progress", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Fabrication in progress" },
  flagshipDetail: { id: "v5-flagship-detail", url: "/visuals/flagship-detail.svg", alt: "Steel connection detail", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Connection detail" },
  flagshipFinish: { id: "v5-flagship-finish", url: "/visuals/flagship-finish.svg", alt: "Completed structural finish", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Protective finish" },
  flagshipCompleted: { id: "v5-flagship-completed", url: "/visuals/flagship-completed.svg", alt: "Completed industrial structure", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Completed structure" },
  ceiling: { id: "v5-ceiling", url: "/visuals/ceiling-systems.svg", alt: "Ceiling system layout", assetType: "AI_ILLUSTRATIVE", publicUsage: "APPROVED", caption: "Ceiling systems" },
  trussModel3D: { id: "asset-3d-08", url: "r3f-procedural-truss", alt: "Interactive 3D structural steel truss model", assetType: "3D_MODEL", publicUsage: "APPROVED", caption: "Structural steel truss geometry" },
};

export const NAV_ITEMS = [
  { label: "Capability", href: "#capability" },
  { label: "The Work", href: "#work" },
  { label: "Proof", href: "#proof" },
  { label: "About", href: "#people" },
  { label: "Contact", href: "#contact" },
] as const;
