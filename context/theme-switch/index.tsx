"use client";
import { ReactNode, createContext, useContext, useState } from "react";

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
    setTheme(newTtheme);
  };
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
