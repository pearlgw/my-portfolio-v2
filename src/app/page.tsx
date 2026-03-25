import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Sidebar from "@/components/layouts/Sidebar";
import SectionIndicator from "@/components/navigation/SectionIndicator";
import Skills from "@/components/sections/Skills";
import Portfolio from "@/components/sections/Portfolio";
import Service from "@/components/sections/Service";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <SectionIndicator />
      <div
        className="relative flex flex-col lg:flex-row lg:px-6 xl:px-10 min-h-screen"
        style={{
          background: `
      radial-gradient(ellipse 60% 40% at 0% 0%, rgba(125,211,252,0.08), transparent 70%),
      radial-gradient(ellipse 50% 35% at 100% 100%, rgba(165,180,252,0.06), transparent 75%),
      #e2e8f0
    `,
        }}
      >
        {/* Subtle noise texture overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "128px 128px",
          }}
        />

        {/* Sidebar */}
        <aside className="relative z-10 w-full lg:w-96 lg:h-screen lg:sticky lg:top-0">
          <Sidebar />
        </aside>

        {/* Main
          - Desktop (lg+): scroll di dalam container ini (h-screen + overflow-y-auto)
          - Mobile: TIDAK ada h-screen/overflow-y-auto, scroll terjadi di body/window
        */}
        <main
          id="scroll-container"
          className="relative z-10 flex-1 lg:h-screen lg:overflow-y-auto no-scrollbar"
        >
          <div className="px-6 md:px-10 lg:px-10 lg:pr-24 py-10">
            <Hero />
            <About />
            <Resume />
            <Skills />
            <Portfolio />
            <Service />
            <Contact />
          </div>
        </main>
      </div>
    </>
  );
}