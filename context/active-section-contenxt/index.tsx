"use client";
import { ReactNode, createContext, useState } from "react";
import { ActiveSectionContextProps } from "./types";

const defaultContextValue: ActiveSectionContextProps = {
  activeSection: "Home",
  setActiveSection: () => {},
};
export const ActiveSectionContext =
  createContext<ActiveSectionContextProps>(defaultContextValue);

export const ActiveSectionContenxtProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
};
