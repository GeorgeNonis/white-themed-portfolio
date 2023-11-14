import { Dispatch, SetStateAction } from "react";

export interface ActiveSectionContextProps {
  activeSection: string;
  setActiveSection: Dispatch<SetStateAction<string>>;
}
