import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";

export default function Home() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex flex-1">
        <Hero />
      </main>
      <SiteFooter />
    </div>
  );
}
