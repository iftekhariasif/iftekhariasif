import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteConfig, socialLinks } from "@/lib/site-config";
import { defaultLocale, getDictionary } from "@/lib/i18n";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const t = getDictionary(defaultLocale);

export const metadata: Metadata = {
  title: {
    default: `${t.name} | ${t.title}`,
    template: `%s | ${t.name}`,
  },
  description: t.description,
  keywords: [
    "Iftekhar I Asif",
    "Iftekhar Idris Asif",
    "AI Transformation Leader",
    "AI-Native Product Leader",
    "Tech Lead",
    "Full-Stack AI Engineer",
    "LLM",
    "RAG",
    "Cloud Architecture",
    "AWS",
    "GCP",
    "Next.js",
    "TypeScript",
    "Python",
    "Tokyo",
    "Japan",
  ],
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  publisher: siteConfig.fullName,
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: siteConfig.url,
    languages: {
      en: siteConfig.url,
      ja: siteConfig.url,
    },
  },
  openGraph: {
    title: `${t.name} | ${t.title}`,
    description: t.description,
    url: siteConfig.url,
    siteName: `${t.name} Portfolio`,
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "profile",
    firstName: "Iftekhar",
    lastName: "Asif",
  },
  twitter: {
    card: "summary_large_image",
    title: `${t.name} | ${t.title}`,
    description: t.description,
    creator: "@IftekharIAsif",
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.fullName,
    alternateName: t.name,
    jobTitle: t.title,
    description: t.description,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "Japan",
    },
    sameAs: socialLinks.map((link) => link.href),
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Cloud Architecture",
      "Full-Stack Engineering",
      "TypeScript",
      "Python",
      "AI SaaS Architecture",
    ],
  };

  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
