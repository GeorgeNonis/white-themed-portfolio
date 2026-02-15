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
        I&apos;m a Software Engineer building cloud-native SaaS products, with a
        strong focus on frontend development using{" "}
        <span className="font-medium">Angular</span> and{" "}
        <span className="font-medium">TypeScript</span>. I enjoy working in
        teams where honesty, trust, and a safe environment make it easy to
        learn, share feedback, and grow together.
      </p>

      <p className="mb-3">
        I like being involved end-to-end: implementing features, debugging real
        production issues, talking with stakeholders/customers, and helping
        shape architectural decisions when it matters.
      </p>

      <p className="mb-3">
        Recently, I&apos;ve been expanding more into the platform side —{" "}
        <span className="italic">deployments and DevOps</span> — working with{" "}
        <span className="font-medium">Kubernetes/OpenShift</span>,{" "}
        <span className="font-medium">GitOps (ArgoCD)</span>, API gateway
        maintenance, and observability tooling like{" "}
        <span className="font-medium">Prometheus, Grafana, and Loki</span>. My
        goal is simple: help teams ship safely and keep systems reliable.
      </p>

      <p className="mb-3">
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution — and making it clean,
        maintainable, and easy for others to work with.
      </p>

      <p className="mb-3">
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        gaming, going to the gym, or free diving. I also love{" "}
        <span className="font-medium">learning new things</span> — lately,
        I&apos;ve been reading about{" "}
        <span className="font-medium">psychology</span>.
      </p>
    </motion.section>
  );
};

export default About;
