"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/config/data";

const Experience = () => {
  const { ref } = useSectionInView("Experience", 0.2);
  return (
    <section id="Experience" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((experience, index) => (
          <VerticalTimelineElement key={index} icon={experience.icon}>
            <h3 className="font-semibold capitalize">{experience.title}</h3>
            <p className="font-normal !mt-0">{experience.location}</p>
            <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75">
              {experience.description}
            </p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
