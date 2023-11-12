"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <p className="mb-3">
        I&apos;m a passionate software developer with experience in TypeScript
        and JavaScript, and expertise in frameworks like React, Node.js.
        Currently, I&apos;m expanding my knowledge in Next.js. As an individual,
        I&apos;m motivated to understand how things work and continually expand
        my knowledge in frontend and backend development. I have collaborated
        closely with clients to create efficient, scalable, and user-friendly
        solutions that solve real-world problems. My main goal is to give my
        best and provide top-quality code.
      </p>
    </motion.section>
  );
};

export default About;
