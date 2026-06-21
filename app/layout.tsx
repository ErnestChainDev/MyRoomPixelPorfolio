import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import CookieNotice from "@/components/CookieNotice";
import { profile } from "@/data/portfolio/profile";
import "./globals.css";

const pixelifySans = localFont({
  src: "../Pixelify_Sans/PixelifySans-VariableFont_wght.ttf",
  variable: "--font-pixelify-sans",
  weight: "400 700",
  style: "normal",
  display: "swap",
});

const siteUrl = "https://ernest-windel-dreo-portfolio.vercel.app";
const siteDescription =
  "Interactive pixel-art portfolio of Ernest Windel Dreo, Software Developer, QA Engineer, and aspiring AI Engineer specializing in full-stack development, software testing, and AI-powered applications.";
const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: "Ernest Windel Dreo Portfolio",
  title: {
    default: "Ernest Windel Dreo | Software Developer",
    template: "%s | Ernest Windel Dreo"
  },
  description: siteDescription,
  keywords: [
    "Ernest Windel Dreo",
    "Software Developer",
    "QA Engineer",
    "AI Engineer",
    "Computer Science Graduate",
    "React",
    "Next.js",
    "Node.js",
    "FastAPI",
    "Python",
    "Machine Learning",
    "Artificial Intelligence",
    "Software Testing",
    "Quality Assurance",
    "Selenium",
    "Postman",
    "Full Stack Developer",
    "Web Developer",
    "Philippines",
  ],
  authors: [{ name: profile.name, url: siteUrl }],
  creator: "Ernest Windel Dreo",
  publisher: "Ernest Windel Dreo",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ernest Windel Dreo | Software Developer",
    description: siteDescription,
    url: siteUrl,
    siteName: "Ernest Windel Dreo Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/WB/Background.png",
        width: 2816,
        height: 1536,
        alt: "Ernest Windel Dreo interactive pixel-art portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ernest Windel Dreo | Software Developer",
    description: siteDescription,
    images: ["/WB/Background.png"],
  },
  category: "portfolio",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#120d0b",
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: profile.name,
      alternateName: profile.shortName,
      jobTitle: profile.title,
      email: profile.email,
      telephone: profile.phone,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Sorsogon",
        addressCountry: "PH",
      },
      url: siteUrl,
      sameAs: [profile.github, profile.linkedin],
      knowsAbout: [
        "Software Development",
        "Quality Assurance",
        "Software Testing",
        "Machine Learning",
        "Artificial Intelligence",
        "React",
        "Next.js",
        "Node.js",
        "FastAPI",
        "Python",
        "MySQL",
        "MongoDB",
        "REST APIs",
        "Full Stack Development",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Ernest Windel Dreo Portfolio",
      description: siteDescription,
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${pixelifySans.variable} ${pixelifySans.className}`}>
        {gtmId ? (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${gtmId}');
                `,
              }}
            />
            <noscript>
              <iframe
                src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
                height="0"
                width="0"
                style={{ display: "none", visibility: "hidden" }}
                title="Google Tag Manager"
              />
            </noscript>
          </>
        ) : null}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
        <CookieNotice />
      </body>
    </html>
  );
}
