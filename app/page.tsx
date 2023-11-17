import {
  About,
  Contact,
  Experience,
  Intro,
  Projects,
  SectionDivider,
  Skills,
} from "@/components";

const Home = () => {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  );
};
export default Home;
