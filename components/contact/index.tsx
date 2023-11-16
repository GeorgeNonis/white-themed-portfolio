import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="contact" ref={ref}>
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
    </section>
  );
};
export default Contact;
