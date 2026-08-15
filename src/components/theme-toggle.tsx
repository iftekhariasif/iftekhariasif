"use client";

import { MoonIcon, SunIcon } from "@/components/icons";
import { useTheme } from "@/hooks";

export const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex size-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:border-foreground/40 hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-95"
    >
      {isDark ? (
        <SunIcon className="size-4 transition-transform duration-300 group-hover:rotate-45" />
      ) : (
        <MoonIcon className="size-4 transition-transform duration-300 group-hover:-rotate-12" />
      )}
    </button>
  );
};
