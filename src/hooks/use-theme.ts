"use client";

import { useCallback, useSyncExternalStore } from "react";
import type { ThemeMode } from "@/types";
import { safeStorage } from "@/lib/utils";

const THEME_KEY = "theme";

const subscribeTheme = (callback: () => void): (() => void) => {
  window.addEventListener("storage", callback);
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  media.addEventListener("change", callback);

  return () => {
    window.removeEventListener("storage", callback);
    media.removeEventListener("change", callback);
  };
};

const getThemeSnapshot = (): ThemeMode => {
  const stored = safeStorage.get<ThemeMode | null>(THEME_KEY, null);
  if (stored === "dark" || stored === "light") {
    return stored;
  }
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};

const getThemeServerSnapshot = (): ThemeMode => "dark";

export const useTheme = () => {
  const theme = useSyncExternalStore(subscribeTheme, getThemeSnapshot, getThemeServerSnapshot);

  const toggleTheme = useCallback(() => {
    const nextTheme: ThemeMode = theme === "dark" ? "light" : "dark";
    safeStorage.set(THEME_KEY, nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  }, [theme]);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    safeStorage.set(THEME_KEY, newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  }, []);

  return {
    theme,
    isDark: theme === "dark",
    toggleTheme,
    setTheme,
  };
};
