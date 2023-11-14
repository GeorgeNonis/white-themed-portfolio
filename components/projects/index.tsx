import { projectsData } from "@/config/data";
import SectionHeading from "../section-heading";
import Project from "./comps/project";

const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-28">
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
