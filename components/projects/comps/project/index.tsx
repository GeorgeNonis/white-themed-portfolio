import Image from "next/image";
import { ProjectProps } from "./project.types";

const Project = ({ description, imageUrl, tags, title }: ProjectProps) => {
  return (
    <article>
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {tags.map((tag, index) => {
          return <li key={index}>{tag}</li>;
        })}
      </ul>

      <Image
        src={imageUrl}
        alt="Project I worked on"
        quality={95}
        className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
      />
    </article>
  );
};
export default Project;
