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

const tEn = getDictionary("en");
const tJa = getDictionary("ja");

export const metadata: Metadata = {
  title: {
    default: `${tEn.name} | ${tEn.title}`,
    template: `%s | ${tEn.name}`,
  },
  description: tEn.description,
  keywords: [
    // English keywords
    "Iftekhar I Asif",
    "Iftekhar Idris Asif",
    "Iftekhar Asif",
    "AI Transformation Leader",
    "AI-Native Product & Tech Leader",
    "Tech Lead",
    "Full-Stack AI Engineer",
    "LLM",
    "RAG",
    "AI SaaS",
    "Cloud Architecture",
    "AWS",
    "GCP",
    "Next.js",
    "TypeScript",
    "Python",
    "Tokyo",
    "Japan",
    // Japanese keywords (日本語SEOキーワード)
    "イドリス イフテカール",
    "イドリス・イフテカール",
    "イフテカール イドリス",
    "イフテカール",
    "AIネイティブ プロダクト & 技術リーダー",
    "AIネイティブ",
    "テックリード",
    "フルスタックAIエンジニア",
    "AIエンジニア",
    "AIコンサルティング",
    "マイクロサービス",
    "東京",
    "日本",
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
    title: `${tEn.name} (${siteConfig.japaneseName}) | ${tEn.title}`,
    description: `${tEn.description} | ${tJa.description}`,
    url: siteConfig.url,
    siteName: `${tEn.name} Portfolio`,
    locale: "en_US",
    alternateLocale: ["ja_JP"],
    type: "profile",
    firstName: "Iftekhar",
    lastName: "Asif",
  },
  twitter: {
    card: "summary_large_image",
    title: `${tEn.name} (${siteConfig.japaneseName}) | ${tEn.title}`,
    description: tEn.description,
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
    alternateName: [
      tEn.name,
      siteConfig.japaneseName,
      "イドリス・イフテカール",
      "イフテカール イドリス",
      "Iftekhar Asif",
      "Asif Iftekhar",
    ],
    jobTitle: [
      tEn.title,
      tJa.title,
    ],
    description: `${tEn.description} / ${tJa.description}`,
    url: siteConfig.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Tokyo",
      addressCountry: "JP",
    },
    nationality: {
      "@type": "Country",
      name: "Japan",
    },
    knowsLanguage: [
      { "@type": "Language", name: "English", alternateName: "en" },
      { "@type": "Language", name: "Japanese", alternateName: "ja" },
      { "@type": "Language", name: "Bengali", alternateName: "bn" },
    ],
    sameAs: socialLinks.map((link) => link.href),
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models (LLMs)",
      "Retrieval-Augmented Generation (RAG)",
      "Cloud Architecture (AWS & GCP)",
      "Full-Stack Engineering",
      "TypeScript",
      "React",
      "Next.js",
      "Python",
      "FastAPI",
      "AI SaaS Architecture",
      "AIネイティブ開発",
      "プロダクトリーダーシップ",
      "マイクロサービス",
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
