"use client";

import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at
        <br />
        <a className="underline" href="mailto:georgenonis@gmail.com">
          georgenonis@gmail.com
        </a>
        <br />
        or through this form.
      </p>
      <form>
        <input type="email" />
        <textarea name="" id="" cols="30" rows="10"></textarea>
        <button type="submit">Sumbit</button>
      </form>
    </section>
  );
};
export default Contact;
