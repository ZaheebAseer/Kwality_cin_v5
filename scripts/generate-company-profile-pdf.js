const fs = require('fs');
const path = require('path');

function createPdf() {
  const contentLines = [
    "BT",
    "/F1 22 Tf",
    "50 780 Td",
    "(KWALITY INTERIORS) Tj",
    "/F2 11 Tf",
    "0 -20 Td",
    "(INDUSTRIAL CONSTRUCTION, STEEL FABRICATION & SITE EXECUTION) Tj",
    "/F2 9 Tf",
    "0 -15 Td",
    "(Established 2019 | Rajendra Nagar, Hyderabad, Telangana | GSTIN: 36DAPPA9150R1ZY) Tj",
    "0 -25 Td",
    "/F1 13 Tf",
    "(1. COMPANY OVERVIEW) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(Kwality Interiors is a specialized industrial contracting and execution firm established in 2019.) Tj",
    "0 -13 Td",
    "(Founder & Direct Site Supervision: Abdul Aleem. Operating from Rajendra Nagar, Hyderabad.) Tj",
    "0 -13 Td",
    "(Executing industrial sheds, heavy structural steel framing, pipe racks, protective industrial coatings,) Tj",
    "0 -13 Td",
    "(and commercial architectural packages across Telangana.) Tj",
    "0 -22 Td",
    "/F1 13 Tf",
    "(2. DOCUMENTED CLIENT MILESTONE - PREMIER ENERGIES LIMITED) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(Client: Premier Energies Limited | Unit: 5.6 GW Solar Module Line Manufacturing Unit) Tj",
    "0 -13 Td",
    "(Location: Setharampur, Telangana | Certificate Date: 09 July 2026) Tj",
    "0 -13 Td",
    "(Scope: Pipe Racks & Structural Works executed to support solar module manufacturing plant infrastructure.) Tj",
    "0 -13 Td",
    "(Status: Appreciated and certified by client management for timely execution and quality fabrication.) Tj",
    "0 -22 Td",
    "/F1 13 Tf",
    "(3. STATUTORY REGISTRATIONS & CONTRACTOR CREDENTIALS) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(1. GST Registration: 36DAPPA9150R1ZY (Government of India & Telangana State)) Tj",
    "0 -13 Td",
    "(2. Udyam Registration: Ministry of Micro, Small and Medium Enterprises (MSME)) Tj",
    "0 -13 Td",
    "(3. Labour Licence: Labour Department, Government of Telangana) Tj",
    "0 -13 Td",
    "(4. Construction Licence: Authorized commercial contractor licensing) Tj",
    "0 -22 Td",
    "/F1 13 Tf",
    "(4. CORE SERVICES & CAPABILITIES) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(- Industrial Shed Construction: Factory sheds, warehouse roofing, column foundations, wall cladding.) Tj",
    "0 -13 Td",
    "(- Structural Steel & Pipe Racks: Heavy utility pipe racks, mezzanine platforms, steel trusses, stairways.) Tj",
    "0 -13 Td",
    "(- Industrial Fabrication: Workshop and on-site fit-up, cutting, MIG/ARC certified welding, erection.) Tj",
    "0 -13 Td",
    "(- Civil & Site Development: Machinery foundations, trenching, boundary walls, floor slabs.) Tj",
    "0 -13 Td",
    "(- Protective Coating & Painting: High-build epoxy coatings, exterior weatherproofing, cylinder painting.) Tj",
    "0 -13 Td",
    "(- Architectural & Finishing: Graded ceilings, acoustic boards, aluminium profiles, uPVC windows, glass.) Tj",
    "0 -22 Td",
    "/F1 13 Tf",
    "(5. OFFICIAL CONTACT DETAILS) Tj",
    "/F2 9.5 Tf",
    "0 -16 Td",
    "(Proprietor: Abdul Aleem) Tj",
    "0 -13 Td",
    "(Direct Telephone: +91 98491 83165 | WhatsApp: +91 98491 83165) Tj",
    "0 -13 Td",
    "(Official Email: Kwality9849@gmail.com) Tj",
    "0 -13 Td",
    "(Head Office: 2-5-36/50/21/SHOP-1, Spectrum Oasis Layout, Pillar No. 202, D-Mart Back Side,) Tj",
    "0 -13 Td",
    "(Rajendra Nagar, Hyderabad, Telangana - 500048, India.) Tj",
    "ET"
  ];

  const streamContent = contentLines.join("\n");
  const streamLength = Buffer.byteLength(streamContent);

  const objects = [];
  objects.push("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj");
  objects.push("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj");
  objects.push("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj");
  objects.push("4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj");
  objects.push("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj");
  objects.push(`6 0 obj\n<< /Length ${streamLength} >>\nstream\n${streamContent}\nendstream\nendobj`);

  let offset = 9; // "%PDF-1.4\n"
  const xrefEntries = ["0000000000 65535 f "];
  let body = "%PDF-1.4\n";

  for (let i = 0; i < objects.length; i++) {
    xrefEntries.push(String(offset).padStart(10, '0') + " 00000 n ");
    body += objects[i] + "\n";
    offset = Buffer.byteLength(body);
  }

  const xrefOffset = offset;
  let xref = `xref\n0 ${objects.length + 1}\n` + xrefEntries.join("\n") + "\n";
  let trailer = `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

  const pdfData = Buffer.from(body + xref + trailer, "utf-8");
  const outPath = path.join(__dirname, "../public/downloads/kwality-company-profile.pdf");
  fs.writeFileSync(outPath, pdfData);
  console.log(`Generated PDF at ${outPath} (${pdfData.length} bytes)`);
}

createPdf();
