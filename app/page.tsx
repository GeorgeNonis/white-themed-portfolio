import { About, Intro, SectionDivider } from "@/components";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
    </main>
  );
};
export default Home;
