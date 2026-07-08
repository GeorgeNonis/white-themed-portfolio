"use client";

import Image from "next/image";
import { ProjectProps } from "./project.types";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { BsBoxArrowUpRight, BsGithub } from "react-icons/bs";

type ProjectCardProps = ProjectProps & {
  imageOnLeft?: boolean;
};

const Project = ({
  description,
  demoUrl,
  imageOnLeft = false,
  imageUrls,
  sourceUrl,
  tags,
  title,
}: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const [primaryImage, secondaryImage] = imageUrls;
  const showSecondary = isHovered;

  const backImageClass = imageOnLeft ? "-translate-x-5" : "translate-x-5";

  const imagePositionClass = imageOnLeft
    ? "sm:-left-16 md:-left-28 lg:-left-40"
    : "sm:-right-16 md:-right-28 lg:-right-40";

  const textOffsetClass = imageOnLeft
    ? "sm:ml-[11rem] md:ml-[14rem] lg:ml-[18rem]"
    : "";

  return (
    <motion.div
      className="mb-3 sm:mb-8 last:mb-0"
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
    >
      <div
        className="relative mx-auto max-w-[42rem]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <section
          className={`bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg sm:pr-8 relative hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20 ${
            imageOnLeft ? "sm:pl-8" : ""
          }`}
        >
          <div
            className={`relative z-10 pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full ${textOffsetClass}`}
          >
            <h3 className="text-2xl font-semibold">{title}</h3>
            <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
              {description}
            </p>
            <ul className="flex flex-wrap mt-5 gap-2">
              {tags.map((tag, index) => (
                <li
                  className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                  key={index}
                >
                  {tag}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-3">
              {demoUrl && (
                <a
                  href={demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  Live <BsBoxArrowUpRight className="opacity-70" />
                </a>
              )}
              {sourceUrl && (
                <a
                  href={sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black dark:text-white/80 dark:hover:text-white"
                >
                  GitHub <BsGithub className="opacity-70" />
                </a>
              )}
            </div>
          </div>

          <div
            className={`absolute hidden sm:block top-8 z-0 pointer-events-none
              w-[13rem] sm:w-[15rem] md:w-[20rem] lg:w-[28.25rem]
              ${imagePositionClass}`}
          >
            <Image
              src={primaryImage}
              alt={`${title} screenshot 1`}
              quality={95}
              width={1216}
              height={1040}
              className={`w-full h-auto absolute rounded-t-lg shadow-2xl border border-black/10 transition-all duration-300 dark:border-white/10 ${
                showSecondary
                  ? `z-10 scale-[0.9] opacity-75 translate-y-4 -rotate-2 ${backImageClass}`
                  : "z-20 scale-100 opacity-100 translate-x-0 translate-y-0 rotate-0"
              }`}
            />
            <Image
              src={secondaryImage}
              alt={`${title} screenshot 2`}
              quality={95}
              width={1216}
              height={1040}
              className={`w-full h-auto absolute rounded-t-lg shadow-2xl border border-black/10 transition-all duration-300 dark:border-white/10 ${
                showSecondary
                  ? "z-20 scale-100 opacity-100 translate-x-0 translate-y-0 rotate-0"
                  : `z-10 scale-[0.9] opacity-75 translate-y-4 -rotate-2 ${backImageClass}`
              }`}
            />
          </div>
        </section>
      </div>
    </motion.div>
  );
};
export default Project;
