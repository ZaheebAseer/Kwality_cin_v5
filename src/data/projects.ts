/**
 * Projects Data Source (M11)
 *
 * HOW TO ADD MORE PROJECTS:
 * 1. Add a new object to the PROJECTS array following the ProjectItem interface.
 * 2. Set `verified: true` only when backed by confirmed client records/certificates.
 * 3. Any project with `verified: false` is strictly HIDDEN in production builds.
 * 4. Place real project photos in `/public/images/projects/{slug}.webp`.
 */

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  clientType: string;
  location: string;
  year: string | number;
  scope: string;
  safeClaim: string;
  certificateNote?: string;
  size?: string;
  duration?: string;
  photoSlot: string;
  verified: boolean;
  flagship?: boolean;
}

export const PROJECTS: ProjectItem[] = [
  {
    id: "premier-energies-solar-module-line",
    title: "Solar Module Line Manufacturing Facility",
    client: "Premier Energies Limited",
    clientType: "Industrial Solar Manufacturing",
    location: "Setharampur, Telangana",
    year: "2026",
    scope: "Pipe Racks & Structural Works",
    safeClaim:
      "Appreciated by Premier Energies for pipe-rack and structural works executed at their 5.6 GW solar module unit.",
    certificateNote:
      "Appreciation certificate issued 09 July 2026 for structural steel and pipe-rack framework execution.",
    size: "5.6 GW Facility Unit",
    duration: "Documented Execution",
    photoSlot: "/images/projects/premier-energies-pipe-racks.webp",
    verified: true,
    flagship: true,
  },
  // Future project template (hidden in production until verified: true)
  {
    id: "industrial-fabrication-pipeline",
    title: "Heavy Structural Steel Fabrication & Assembly",
    client: "Confidential Industrial Client",
    clientType: "Engineering & Fabrication",
    location: "Hyderabad Industrial Belt, Telangana",
    year: "2026",
    scope: "Structural Steel Fabrication & Erection",
    safeClaim: "Direct site fabrication and structural assembly.",
    photoSlot: "/images/projects/industrial-fabrication.webp",
    verified: false, // HIDDEN in production
  },
];
