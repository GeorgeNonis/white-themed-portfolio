"use client";
import Image from "next/image";
import MyImage from "@/public/me.png";
import { motion } from "framer-motion";

const Intro = () => {
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src={MyImage}
              alt="my image"
              width={"192"}
              height={"192"}
              quality={"95"}
              priority
              className="h-24 w-24 rounded-full border-[0.35rem] border-white object-cover shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I&apos;m Giorgos.</span>
        <br />
        I&apos;m a <span className="font-bold">
          full-stack developer
        </span> with <br />
        <span className="font-bold">almost 2 years</span> of experience. I enjoy{" "}
        <br />
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <br />
        <span className="underline">React (Next.js)</span>.
      </motion.h1>
    </section>
  );
};
export default Intro;
