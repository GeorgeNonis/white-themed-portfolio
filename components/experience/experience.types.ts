import { createElement } from "react";
import { FaHandsHelping, FaLaptopCode, FaReact } from "react-icons/fa";
import { experiencesData } from "@/config/data";

export type ExperienceProps = (typeof experiencesData)[number];

const experienceIcons = {
  mentor: FaHandsHelping,
  react: FaReact,
  study: FaLaptopCode,
} as const;

export function getExperienceIcon(iconKey: ExperienceProps["iconKey"]) {
  return createElement(experienceIcons[iconKey]);
}
