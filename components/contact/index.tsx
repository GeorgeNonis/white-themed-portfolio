import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="contact" ref={ref}>
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at&apos;
        <a className="underline" href="mailto:georgenonis@gmail.com">
          example@gmail.com
        </a>
        &apos; or through this form.
      </p>
    </section>
  );
};
export default Contact;
