"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref}>
      <SectionHeading>My Skills I guess</SectionHeading>
    </section>
  );
};
export default Skills;
