import { links } from "@/config/data";
import { Dispatch, SetStateAction } from "react";

export type SectionNameType = (typeof links)[number]["name"];
export interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<SectionNameType>>;
}
