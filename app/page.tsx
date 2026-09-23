import { Masthead } from "@/components/Masthead";
import { Hero } from "@/components/Hero";
import { Shift } from "@/components/Shift";
import { Vista } from "@/components/Vista";
import { Services } from "@/components/Services";
import { Stats } from "@/components/Stats";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Masthead />
      <main>
        <Hero />
        <Shift />
        <Vista />
        <Services />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
