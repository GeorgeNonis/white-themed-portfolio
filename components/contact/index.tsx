"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { formHandler } from "./action";
import { experimental_useFormStatus } from "react-dom";
import SubmitBtn from "./comps/submit-button";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  const { pending } = experimental_useFormStatus();
  console.log({ pending });
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at
        <br />
        <a className="underline" href="mailto:georgenonis@gmail.com">
          georgenonis@gmail.com
        </a>
        <br />
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={formHandler}
      >
        <input
          type="email"
          name="email"
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={300}
          placeholder="Your Email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          name="message"
          required
          maxLength={300}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
};
export default Contact;
