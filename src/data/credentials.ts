/**
 * Documented Credentials Data Source (M12)
 *
 * ASSET DIRECTORY:
 * Document scans must be placed in `/public/images/documents/`.
 *
 * REDACTION NOTICE:
 * Prior to uploading any document scan, ensure sensitive personal identifiers
 * (e.g. personal Aadhaar numbers, personal bank details, private phone numbers)
 * are cleanly redacted/blurred in the image file.
 */

export interface CredentialDocument {
  id: string;
  title: string;
  category: "Statutory" | "Enterprise" | "Labour & Safety" | "Client Appreciation";
  authority: string;
  documentIdentifier?: string;
  date?: string;
  summary: string;
  scanPath: string; // e.g. /images/documents/gst.webp
  altText: string;
}

export const CREDENTIALS: CredentialDocument[] = [
  {
    id: "cred-gst",
    title: "GST Registration",
    category: "Statutory",
    authority: "Goods and Services Tax Department, Government of Telangana",
    documentIdentifier: "36DAPPA9150R1ZY",
    summary:
      "Active statutory tax registration under Telangana State jurisdiction (State Code: 36).",
    scanPath: "/images/documents/gst-certificate.webp",
    altText: "Official GST Registration Certificate of Kwality Interiors",
  },
  {
    id: "cred-udyam",
    title: "Udyam Registration",
    category: "Enterprise",
    authority: "Ministry of Micro, Small and Medium Enterprises, Government of India",
    summary:
      "Recognized MSME enterprise registration covering civil, structural, and industrial contracting services.",
    scanPath: "/images/documents/udyam-registration.webp",
    altText: "Official Udyam Registration Certificate for Kwality Interiors",
  },
  {
    id: "cred-labour",
    title: "Labour Licence",
    category: "Labour & Safety",
    authority: "Commissioner of Labour, Government of Telangana",
    summary:
      "Statutory labour licence covering industrial site manpower deployment and welfare compliance.",
    scanPath: "/images/documents/labour-licence.webp",
    altText: "Statutory Labour Licence issued by Government of Telangana",
  },
  {
    id: "cred-construction",
    title: "Construction Licence",
    category: "Statutory",
    authority: "Competent Statutory Municipal & Construction Licensing Authority",
    summary:
      "Operating licence for executing civil construction and structural site works.",
    scanPath: "/images/documents/construction-licence.webp",
    altText: "Commercial Contractor Construction Licence",
  },
  {
    id: "cred-premier",
    title: "Premier Energies Appreciation Certificate",
    category: "Client Appreciation",
    authority: "Premier Energies Limited (Setharampur Solar Manufacturing Facility)",
    date: "09 July 2026",
    summary:
      "Official certificate commending Kwality Interiors for pipe-rack and structural steel execution at the 5.6 GW solar module manufacturing line.",
    scanPath: "/images/documents/premier-energies-certificate.webp",
    altText:
      "Appreciation Certificate from Premier Energies Limited for pipe-rack execution",
  },
];
