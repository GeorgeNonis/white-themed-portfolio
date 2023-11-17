"use client";

import Image from "next/image";
import { ProjectProps } from "./project.types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Project = ({ description, imageUrl, tags, title }: ProjectProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Use the useScroll hook from Framer Motion to track the scroll progress.
  // The target is the referenced element (ref), and the offset determines
  // at what scroll positions (as a fraction of the viewport height) the scrollYProgress starts and ends.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  // Use the useTransform hook to create a motion value that transforms the scrollYProgress
  // (ranging from 0 to 1) into a scale value. This means when the scrollYProgress is at 0,
  // the scale will be 0.8, and when scrollYProgress is at 1, the scale will be 1.
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  // Similarly, useTransform is used here to create a motion value that transforms the
  // scrollYProgress into an opacity value. When the scrollYProgress is at 0, the opacity will be 0.6,
  // and when scrollYProgress is at 1, the opacity will be 1.
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  return (
    <motion.div
      className="group mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative  hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-5 gap-2 sm:mt-5">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={800}
          height={800}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
};
export default Project;
