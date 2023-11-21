"use client";
import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
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

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");
  const themeHandler = () => {
    if (theme === "light") {
      setTheme("dark");
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    }
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme") as Theme | null;

    if (localTheme) {
      setTheme(localTheme);
      if (localTheme === "dark") {
        document.documentElement.classList.add("dark");
      }
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);
  return (
    <ThemeSwitchContext.Provider value={{ theme, themeHandler }}>
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
