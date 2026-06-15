import type { ComponentType, SVGProps } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { ThreadsIcon, XIcon } from "@/components/icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Central content for the site. The old WordPress homepage was a single
 * intro page — name, title, a short bio, and social links — so everything
 * lives here for easy editing.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export const siteConfig = {
  name: "IFTEKHAR I ASIF",
  fullName: "Iftekhar Idris Asif",
  title: "Information Technology Professional",
  bio: "A Bangladesh-born, Japanese citizen, aspiring tech professional and self-taught coding enthusiast, passionate about developing digital products & services in the AI, Cloud, Web3 & Blockchain industries. I am committed to turning innovative ideas into scalable tech products using my technical and leadership expertise. Apart from my professional life, I am passionate about traveling, working out, and music.",
  cta: "Have an AI or software product in mind? Let's build it together — reach out through any of my channels below.",
  email: "iftekhar.idris@rit-inc.co.jp",
  copyrightYear: 2021,
  url: "https://iftekhariasif.com",
  description:
    "IFTEKHAR I ASIF is an aspiring tech professional, a self-taught coding enthusiast, developing digital products in AI, Cloud, Web3 & Blockchain since 2010.",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iftekhariasif/",
    icon: Linkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/iftekhariasif",
    icon: Youtube,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/iftekhariasif/",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/IftekharIAsif/",
    icon: Facebook,
  },
  {
    label: "X",
    href: "https://x.com/IftekharIAsif",
    icon: XIcon,
  },
  {
    label: "Threads",
    href: "https://www.threads.net/@iftekhariasif",
    icon: ThreadsIcon,
  },
];
