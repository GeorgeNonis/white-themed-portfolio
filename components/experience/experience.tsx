import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ExperienceProps } from "./experience.types";
import { useThemeSwitchContext } from "@/context/theme-switch";

const ExperienceComp = ({
  date,
  description,
  icon,
  location,
  title,
}: ExperienceProps) => {
  const { theme } = useThemeSwitchContext();
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight:
          theme === "light"
            ? "0.4rem solid #9ca3af"
            : "0.4rem solid rgba(255, 255, 255, 0.5)",
      }}
      icon={icon}
      date={date}
      iconStyle={{
        background: theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
        fontSize: "1.5rem",
      }}
    >
      <h3 className="font-semibold capitalize">{title}</h3>
      <p className="font-normal !mt-0">{location}</p>
      <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
        {description}
      </p>
    </VerticalTimelineElement>
  );
};
export default ExperienceComp;
