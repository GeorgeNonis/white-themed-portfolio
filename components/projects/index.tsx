"use client";
import { projectsData } from "@/config/data";
import SectionHeading from "../section-heading";
import Project from "./comps/project";
import { useSectionInView } from "@/hooks";

const Projects = () => {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My Projects</SectionHeading>
      <div>
        {projectsData.map((project, index) => {
          return <Project key={index} {...project} />;
        })}
      </div>
    </section>
  );
};
export default Projects;
