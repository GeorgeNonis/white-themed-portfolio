"use client";
import { ReactNode, createContext, useContext, useState } from "react";
import type { ActiveSectionContextProps, SectionNameType } from "./types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextProps | null>(null);

export const ActiveSectionContenxtProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState<SectionNameType>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};

// GUARD
export const useActiveSectionContext = () => {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
};
