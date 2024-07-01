import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { Hero } from "../components/Hero";
import { LetsTalk } from "../components/LetsTalk";
import { Services } from "../components/Services";
import { Work } from "../components/Work";

export default function Page() {
  return (
    <main>
      <Hero />
      <About />
      <Work />
      <Services />
      <LetsTalk />
    </main>
  );
}
