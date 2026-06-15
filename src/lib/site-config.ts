import type { ComponentType, SVGProps } from "react";
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  WantedlyIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";

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
  url: "https://iftekhariasif.com",
} as const;

export const socialLinks: SocialLink[] = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/iftekhariasif/",
    icon: LinkedinIcon,
  },
  {
    label: "Wantedly",
    href: "https://www.wantedly.com/id/iftekhariasif",
    icon: WantedlyIcon,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/iftekhariasif",
    icon: YoutubeIcon,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/iftekhariasif/",
    icon: InstagramIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/IftekharIAsif/",
    icon: FacebookIcon,
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
