import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BUSINESS_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#07090c",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://kwalityinteriors.in"),
  title: {
    default: `${BUSINESS_INFO.name} — Industrial Construction & Fabrication`,
    template: `%s | ${BUSINESS_INFO.name}`,
  },
  description:
    "Kwality Interiors — established in 2019 in Hyderabad, providing construction, civil works, industrial fabrication, structural systems, industrial finishing, glass, uPVC and aluminium services.",
  keywords: [
    "Kwality Interiors",
    "Industrial Construction Hyderabad",
    "Structural Steel Fabrication Telangana",
    "Industrial Shed Construction",
    "Industrial Fabrication Hyderabad",
    "Industrial Painting Hyderabad",
    "Glass Works Hyderabad",
    "uPVC Windows Telangana",
    "Aluminium Structures Hyderabad",
  ],
  authors: [{ name: BUSINESS_INFO.name }],
  creator: BUSINESS_INFO.name,
  publisher: BUSINESS_INFO.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kwalityinteriors.in",
    siteName: BUSINESS_INFO.name,
    title: `${BUSINESS_INFO.name} — Industrial Construction & Fabrication`,
    description:
      "Construction, industrial fabrication, structural works, finishing, glass, uPVC and aluminium services from Hyderabad.",
  },
  twitter: {
    card: "summary_large_image",
    title: `${BUSINESS_INFO.name} — Industrial Construction & Fabrication`,
    description:
      "Construction, industrial fabrication, structural works, finishing, glass, uPVC and aluminium services from Hyderabad.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    name: BUSINESS_INFO.name,
    foundingDate: `${BUSINESS_INFO.established}`,
    telephone: `+91${BUSINESS_INFO.phone}`,
    email: BUSINESS_INFO.email,
    taxID: BUSINESS_INFO.gstin,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${BUSINESS_INFO.address.line1}, ${BUSINESS_INFO.address.landmark}`,
      addressLocality: BUSINESS_INFO.address.area,
      addressRegion: BUSINESS_INFO.address.state,
      postalCode: BUSINESS_INFO.address.pincode,
      addressCountry: "IN",
    },
  };

  return (
    <html lang="en" className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} dark`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="min-h-screen bg-[#07090c] text-white font-sans antialiased">
        <a
          href="#top"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] rounded-full bg-amber-400 px-4 py-2 font-bold text-black"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
