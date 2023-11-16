import { useSectionInView } from "@/hooks";
import SectionHeading from "../section-heading";

const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <section id="contact" ref={ref}>
      <SectionHeading>Contact Me</SectionHeading>
      <p>
        Please contact me directly at
        <a>example@gmail.com</a>
        or through this form.
      </p>
    </section>
  );
};
export default Contact;
