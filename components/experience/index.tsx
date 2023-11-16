import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Experience = () => {
  const { ref } = useSectionInView("Experience");
  return (
    <section id="Experience" ref={ref}>
      <SectionHeading>My Experience</SectionHeading>
    </section>
  );
};
export default Experience;
