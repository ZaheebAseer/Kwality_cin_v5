/**
 * Real-Work Gallery Data Source (M13)
 *
 * PRODUCTION DISPLAY RULE:
 * 1. Filter categories with 0 verified photos are hidden in production.
 * 2. If the total count of verified photos across the entire gallery is fewer than 4,
 *    the entire gallery section automatically hides itself in production builds.
 * 3. In development builds, placeholder cards show the exact file paths to upload.
 */

export type GalleryCategory =
  | "Structural"
  | "Fabrication"
  | "Civil"
  | "Painting"
  | "Ceiling"
  | "Commercial";

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  project: string;
  location: string;
  scope: string;
  imagePath: string; // e.g. /images/gallery/structural-piperack-01.webp
  alt: string;
  verified: boolean;
}

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  "Structural",
  "Fabrication",
  "Civil",
  "Painting",
  "Ceiling",
  "Commercial",
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "gal-struct-01",
    title: "Solar Module Line Pipe Racks",
    category: "Structural",
    project: "Premier Energies Solar Manufacturing Unit",
    location: "Setharampur, Telangana",
    scope: "Pipe-rack structural steel erection and alignment",
    imagePath: "/images/gallery/structural-piperack-01.webp",
    alt: "Erected industrial pipe racks for industrial utility lines",
    verified: false, // Set to true once verified photo asset is placed
  },
  {
    id: "gal-fab-01",
    title: "Structural Trusses & Column Fabrication",
    category: "Fabrication",
    project: "Industrial Utility Enclosure",
    location: "Hyderabad Industrial Area, Telangana",
    scope: "Welding, cutting, and fit-up of structural components",
    imagePath: "/images/gallery/fabrication-trusses-01.webp",
    alt: "Fabrication of structural steel sections and trusses",
    verified: false,
  },
  {
    id: "gal-civil-01",
    title: "Industrial Floor Slab & Foundation Works",
    category: "Civil",
    project: "Shed Foundation Package",
    location: "Rajendra Nagar Vicinity, Hyderabad",
    scope: "Civil excavation, rebar tying, and concrete foundation casting",
    imagePath: "/images/gallery/civil-foundation-01.webp",
    alt: "Civil foundation and ground beam execution for industrial shed",
    verified: false,
  },
  {
    id: "gal-paint-01",
    title: "Protective Epoxy & Cylinder Coating",
    category: "Painting",
    project: "Industrial Coating Facility",
    location: "Telangana Industrial Zone",
    scope: "Surface preparation and protective industrial finish application",
    imagePath: "/images/gallery/protective-coating-01.webp",
    alt: "Industrial protective coating application on fabricated steel",
    verified: false,
  },
];
