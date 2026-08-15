import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  ThreadsIcon,
  WantedlyIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";
import type { SocialLink } from "@/types";

export type { SocialLink };

/**
 * Locale-agnostic site config (links, identifiers, dates). Localized copy
 * lives in `@/lib/dictionaries`.
 */
export const siteConfig = {
  fullName: "Iftekhar Idris Asif",
  url: "https://iftekhariasif.com",
} as const;

export const socialLinks: readonly SocialLink[] = [
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
] as const;
