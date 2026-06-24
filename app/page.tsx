import CustomCursor from "@/components/CustomCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Philosophy from "@/components/Philosophy";
import FreeTime from "@/components/FreeTime";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <main>
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Philosophy />
        <FreeTime />
      </main>
    </>
  );
}
