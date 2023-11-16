import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { ExperienceProps } from "./experience.types";

const ExperienceComp = ({
  date,
  description,
  icon,
  location,
  title,
}: ExperienceProps) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "rgb(255 255 255)",
        boxShadow: "none",
        border: "1px solid rgba(0, 0, 0, 0.05)",
        textAlign: "left",
        padding: "1.3rem 2rem",
      }}
      contentArrowStyle={{
        borderRight: "0.4rem solid black",
      }}
      icon={icon}
      date={date}
      iconStyle={{
        background: "white",
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
