"use client";

import { useMemo } from "react";
import { SocialLinks } from "@/components/social-links";
import { ContactModal } from "@/components/contact-modal";
import {
  MailIcon,
  MapPinIcon,
  CodeIcon,
  RocketIcon,
  UsersIcon,
} from "@/components/icons";
import { getDictionary, type Locale } from "@/lib/i18n";
import type { HighlightIconType } from "@/types";
import { useDisclosure } from "@/hooks";

interface HeroProps {
  readonly locale?: Locale;
}

const ICON_MAP = {
  consulting: CodeIcon,
  leadership: RocketIcon,
  teamBuilding: UsersIcon,
} as const satisfies Record<HighlightIconType, React.ComponentType<React.SVGProps<SVGSVGElement>>>;

const getHighlightIcon = (iconType: HighlightIconType) => {
  return ICON_MAP[iconType] ?? CodeIcon;
};

export const Hero = ({ locale }: HeroProps) => {
  const dictionary = useMemo(() => getDictionary(locale), [locale]);
  const { isOpen, open, close } = useDisclosure();

  return (
    <>
      <section
        id="home"
        className="relative flex w-full flex-col items-center justify-center px-4 py-8 sm:px-6 md:py-12"
      >
        <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
          {/* Status / Location Badge */}
          <div className="mb-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-border/70 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground shadow-2xs backdrop-blur-md">
            <span className="flex items-center gap-1.5 text-foreground font-medium">
              <MapPinIcon className="size-3.5 text-foreground/80" />
              {dictionary.location}
            </span>
            <span className="text-border/80" aria-hidden="true">
              •
            </span>
            <span className="flex items-center gap-1.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>{dictionary.status}</span>
            </span>
          </div>

          {/* Hero Title & Name */}
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl text-foreground">
            {dictionary.name}
          </h1>

          <p className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground/90">
            {dictionary.title}
          </p>

          {/* Bio */}
          <div className="mt-7 max-w-2xl rounded-2xl border border-border/50 bg-card/40 p-5 sm:p-6 backdrop-blur-md shadow-xs">
            <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed text-muted-foreground">
              {dictionary.bio}
            </p>
          </div>

          {/* 3 Main Highlight Domain Cards */}
          {dictionary.highlights?.length > 0 && (
            <div className="mt-8 w-full">
              <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-3">
                {dictionary.highlights.map((item, idx) => {
                  const IconComponent = getHighlightIcon(item.icon);
                  return (
                    <div
                      key={idx}
                      className="group relative flex flex-col items-start rounded-xl border border-border/60 bg-card/40 p-4 text-left backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-foreground/30 hover:bg-card/70 hover:shadow-md"
                    >
                      <div className="mb-2.5 flex size-8 items-center justify-center rounded-lg border border-border/80 bg-accent/70 text-foreground transition-colors group-hover:border-foreground/40 group-hover:bg-foreground group-hover:text-background">
                        <IconComponent className="size-4" />
                      </div>
                      <h3 className="text-xs font-bold uppercase tracking-wider text-foreground sm:text-sm">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-[11px] leading-snug sm:text-xs text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Call To Action Block */}
          <div className="mt-9 w-full max-w-xl flex flex-col items-center">
            <p className="text-sm font-medium leading-relaxed text-foreground sm:text-base">
              {dictionary.cta}
            </p>

            {/* Primary Action Button: Open Contact Modal */}
            <div className="mt-5 flex items-center justify-center">
              <button
                type="button"
                onClick={open}
                className="inline-flex items-center gap-2.5 rounded-xl bg-foreground px-6 py-3 text-xs sm:text-sm font-semibold text-background shadow-sm transition-all duration-200 hover:opacity-90 hover:shadow-md hover:scale-[1.02] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <MailIcon className="size-4" />
                <span>{dictionary.contactButton}</span>
              </button>
            </div>

            {/* Social Channels Strip */}
            <div className="mt-8 w-full flex flex-col items-center">
              <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground/70">
                {dictionary.connectLabel}
              </div>
              <SocialLinks />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Modal */}
      <ContactModal
        isOpen={isOpen}
        onClose={close}
        dictionary={dictionary}
      />
    </>
  );
};
