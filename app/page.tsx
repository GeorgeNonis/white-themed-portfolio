import { About, Intro, Projects, SectionDivider } from "@/components";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
};
export default Home;
