"use client";
import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";
import { skillsData } from "@/config/data";
import { motion } from "framer-motion";
import { fadeInAnimationVariants } from "./skills.styles";

const Skills = () => {
  const { ref } = useSectionInView("Skills");
  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Skills</SectionHeading>
      <div className="flex flex-col gap-8">
        {skillsData.map((group, groupIndex) => (
          <div key={group.category}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gray-500 dark:text-white/50">
              {group.category}
            </h3>
            <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
              {group.items.map((skill, index) => (
                <motion.li
                  key={skill}
                  variants={fadeInAnimationVariants}
                  className="bg-white borderBlack rounded-xl px-5 py-3 dark:bg-white/10 dark:text-white/80"
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={groupIndex * 10 + index}
                >
                  {skill}
                </motion.li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills;
