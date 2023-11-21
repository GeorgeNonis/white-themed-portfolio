import { ReactNode, createContext, useState } from "react";

export type ThemeSwitchContextType = {
  theme: string;
  themeHandler: () => string;
};

export const ThemeSwitchContext = createContext<ThemeSwitchContextType | null>(
  null
);

export const ThemeSwitchProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const themeHandler = () => {
    return theme === "light" ? "dark" : "light";
  };
  return (
    <ThemeSwitchContext.Provider value={{ theme, themeHandler }}>
      {children}
    </ThemeSwitchContext.Provider>
  );
};
