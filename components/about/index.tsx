"use client";

import { useSectionInView } from "@/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../section-heading";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>

      <p className="mb-3">
        Software Engineer at Stibo DX — cloud-native SaaS on Cue (Cue Autopilot).
        Mostly frontend in{" "}
        <span className="font-medium">Angular/TypeScript</span>; I also work on
        platform pieces — production{" "}
        <span className="font-medium">Kubernetes</span>,{" "}
        <span className="font-medium">GitOps</span>,{" "}
        <span className="font-medium">Kong</span>, and observability.
      </p>

      <p className="mb-3">
        Career changer in Aarhus. I picked up programming on my own around 2020,
        moved to Denmark in 2021, and went full-time into software engineering
        in 2023 — self-taught, then a frontend internship at RaskRask, then
        Stibo DX.
      </p>

      <p className="mb-3">
        Outside work I mentor aspiring developers. In my free time I build and
        ship small projects — lately Chrome extensions (password generator, color
        picker), public on GitHub.
      </p>

      <SectionHeading>Beyond code</SectionHeading>

      <div className="mb-6 aspect-video w-full max-w-xl mx-auto overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/qskmwnxSEGQ"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Free diving highlights"
        />
      </div>

      <p className="mb-3">
        I volunteer as a mentor — one-on-one support and class mentoring for
        people learning to code. Free diving is where I recharge; building and
        shipping small tools is how I keep my craft sharp outside work.
      </p>
    </motion.section>
  );
};

export default About;
