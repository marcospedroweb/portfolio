import AboutMe from "./sections/AboutMe";
import Certifications from "./sections/Certifications";
import { Skills } from "./sections/Skills";

export default function Home() {
  return (
    <div>
      <main className="w-full">
        <AboutMe />
        <Skills />
        <Certifications />
      </main>
    </div>
  );
}
