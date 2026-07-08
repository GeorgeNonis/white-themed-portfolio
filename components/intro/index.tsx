"use client";
import { useActiveSectionContext } from "@/context/active-section-contenxt";
import { useSectionInView } from "@/hooks";
import MyImage from "@/public/me.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

const actionButtonClass =
  "inline-flex items-center justify-center gap-2 rounded-full borderBlack outline-none transition cursor-pointer hover:scale-105 focus:scale-105 active:scale-[1.02]";

const Intro = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="mb-28 max-w-[44rem] text-center sm:mb-0 scroll-mt-[100rem]"
      ref={ref}
      id="home"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={MyImage}
              alt="Giorgos Nonis"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-cyan-200 object-cover shadow-xl dark:border-cyan-400/40"
            />
          </motion.div>
          <motion.span
            className="absolute text-4xl bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 2.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-8 mt-4 px-4 text-xl font-medium !leading-[1.55] sm:text-2xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Giorgos.</span>
        <br />
        <span className="font-bold">Software Engineer</span> at Stibo DX —{" "}
        <span className="italic">cloud-native SaaS on Cue</span> (Cue Autopilot).
        <br />
        Mostly <span className="underline">Angular/TypeScript</span> frontend;
        platform work in{" "}
        <span className="underline">Kubernetes</span>,{" "}
        <span className="underline">GitOps</span>,{" "}
        <span className="underline">Kong</span>, and observability.
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href={"#contact"}
          className={`${actionButtonClass} bg-gray-900 text-white px-7 py-3 dark:bg-cyan-700 dark:hover:bg-cyan-600`}
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here <BsArrowRight />
        </Link>
        <a
          className={`${actionButtonClass} group bg-white px-7 py-3 dark:bg-white/10 dark:text-white/80`}
          href={"/CV.pdf"}
          download
        >
          Download CV
          <HiDownload className="opacity-60 group-hover:translate-y-0.5 transition" />
        </a>

        <a
          className={`${actionButtonClass} bg-white p-4 text-gray-700 hover:text-gray-950 dark:bg-white/10 dark:text-white/60`}
          href="https://www.linkedin.com/in/george-nonis-697430234/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
        >
          <BsLinkedin className="text-xl" />
        </a>

        <a
          className={`${actionButtonClass} bg-white p-4 text-gray-700 hover:text-gray-950 dark:bg-white/10 dark:text-white/60`}
          href="https://github.com/GeorgeNonis/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
        >
          <FaGithubSquare className="text-[1.35rem]" />
        </a>
      </motion.div>
    </section>
  );
};
export default Intro;
