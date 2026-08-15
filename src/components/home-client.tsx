"use client";

import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
import { SiteFooter } from "@/components/site-footer";
import { useLocale } from "@/hooks";

export const HomeClient = () => {
  const { locale, setLocale } = useLocale();

  return (
    <div className="relative flex min-h-dvh flex-col justify-between overflow-x-hidden overflow-y-auto selection:bg-foreground selection:text-background">
      {/* Ambient Background Lighting */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[650px] h-[550px] rounded-full bg-foreground/[0.04] blur-[120px] dark:bg-foreground/[0.03]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-foreground/[0.03] blur-[100px]" />
        <div className="absolute bottom-10 -right-40 w-[450px] h-[450px] rounded-full bg-foreground/[0.03] blur-[100px]" />
      </div>

      <div className="relative z-10 flex min-h-dvh flex-col justify-between">
        <Header locale={locale} onChangeLocale={setLocale} />
        
        <main className="flex flex-1 items-center justify-center py-2 sm:py-3">
          <Hero locale={locale} />
        </main>
        
        <SiteFooter locale={locale} />
      </div>
    </div>
  );
};
