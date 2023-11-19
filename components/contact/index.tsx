"use client";

import SectionHeading from "../section-heading";
import { motion } from "framer-motion";
import SubmitBtn from "./comps/submit-button";
import { useContact } from "./hook/useContact";

const Contact = () => {
  const { handlers, values } = useContact();
  const { ref, formValues, loading } = values;
  const { formValuesHandler, formSumbitHandler } = handlers;
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
        onSubmit={formSumbitHandler}
      >
        <input
          value={formValues.email}
          type="email"
          name="email"
          onChange={formValuesHandler}
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          required
          maxLength={300}
          placeholder="Your Email"
        />
        <textarea
          value={formValues.message}
          onChange={formValuesHandler}
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your Message"
          name="message"
          required
          maxLength={300}
        />
        <SubmitBtn loading={loading} />
      </form>
    </motion.section>
  );
};
export default Contact;
