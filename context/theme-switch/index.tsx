"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";

export type ThemeSwitchContextType = {
  theme: string;
  themeHandler: () => void;
};

export type Theme = "light" | "dark";

export const ThemeSwitchContext = createContext<ThemeSwitchContextType | null>(
  null
);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  // Match the beforeInteractive script in layout.tsx (single source of truth).
  if (document.documentElement.classList.contains("dark")) {
    return "dark";
  }

  const localTheme = window.localStorage.getItem("theme") as Theme | null;

  if (localTheme) {
    return localTheme;
  }

  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }

  return "light";
}

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    setTheme(getInitialTheme());
    setReady(true);
  }, []);

  const themeHandler = () => {
    setTheme((current) => {
      const next: Theme = current === "light" ? "dark" : "light";
      window.localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  const resolvedTheme = ready ? theme : getInitialTheme();

  return (
    <ThemeSwitchContext.Provider value={{ theme: resolvedTheme, themeHandler }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};

// GUARD
export const useThemeSwitchContext = () => {
  const context = useContext(ThemeSwitchContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
