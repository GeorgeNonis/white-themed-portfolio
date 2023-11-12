import Image from "next/image";
import MyImage from "@/public/me.png";

const Intro = () => {
  return (
    <section>
      <div className="flex items-center justify-center">
        <div>
          <Image
            src={MyImage}
            alt="my image"
            width={"192"}
            height={"192"}
            quality={"95"}
          />
        </div>
      </div>
    </section>
  );
};
export default Intro;
