"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I&apos;m a passionate fullstack developer with experience in TypeScript
        and JavaScript, and expertise in frameworks like React, Node.js.
        Currently, I&apos;m expanding my knowledge in Next.js.
      </p>
      <p>
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem.
      </p>
      <p className="mb-3">
        <span>
          As an individual, I&apos;m motivated to understand how things work and
          continually expand my knowledge in frontend and backend development.
          My main aim is to deliver high-quality code and enjoy the journey of
          coding, which brings me great happiness.
        </span>
      </p>
      <p className="mb-3">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        playing video games, goin to the gym or free diving. I also enjoy
        <br />
        <span className="font-medium">learning new things</span>. I am currently
        reading a book about
        <br />
        <span className="font-medium">psychology</span>
      </p>
    </motion.section>
  );
};

export default About;
