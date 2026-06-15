import type { ComponentType, SVGProps } from "react";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { ThreadsIcon, XIcon } from "@/components/icons";

type IconComponent = ComponentType<SVGProps<SVGSVGElement>>;

/**
 * Locale-agnostic site config (links, identifiers, dates). Localized copy
 * — name, title, bio, CTA, meta description — lives in `@/lib/i18n`.
 */

export type SocialLink = {
  label: string;
  href: string;
  icon: IconComponent;
};

export const siteConfig = {
  fullName: "Iftekhar Idris Asif",
  email: "iftekhar.idris@rit-inc.co.jp",
  copyrightYear: 2021,
  url: "https://iftekhariasif.com",
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
