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

export const ThemeSwitchContext = createContext<ThemeSwitchContextType | null>(
  null
);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeHandler = () => {
    const newTtheme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem("theme", newTtheme);
    setTheme(newTtheme);
  };

  useEffect(() => {
    const theme = window.localStorage.getItem("theme");

    if (theme === null) {
      window.localStorage.setItem("theme", "light");
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
