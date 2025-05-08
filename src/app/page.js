import AboutMe from "./sections/AboutMe";
import Certifications from "./sections/Certifications";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Testimonials } from "./sections/Testimonials";

export default function Home() {
  return (
    <div>
      <main className="w-full">
        <AboutMe />
        <Skills />
        <Certifications />
        <Experience />
        <Projects />
        <Testimonials />
      </main>
    </div>
  );
}
