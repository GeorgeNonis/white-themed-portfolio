"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/config/data";
import ExperienceComp from "./experience";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((experience, index) => (
          <ExperienceComp key={index} {...experience} />
        ))}
      </VerticalTimeline>
    </section>
  );
};
export default Experience;
