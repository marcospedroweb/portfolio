import AboutMe from "./sections/AboutMe";
import { Skills } from "./sections/Skills";

export default function Home() {
  return (
    <div>
      <main className="w-screen">
        <AboutMe />
        <Skills />
      </main>
    </div>
  );
}
