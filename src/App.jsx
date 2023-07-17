import React, { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
// import FOG from "vanta/dist/vanta.fog.min";
import Contact from "./components/Contact";

export default function App() {
  // useEffect(() => {
  //   VANTA.FOG({
  //     el: "#fog",
  //     mouseControls: true,
  //     touchControls: true,
  //     gyroControls: false,
  //     minHeight: 200.00,
  //     minWidth: 200.00
  //   })
  // },[])
  return (
    <main id="fog" className="flex flex-col relative px-5 lg:px-0">
      <div className="lg:w-[50%] overflow-hidden lg:fixed top-0">
        <Hero />
      </div>
      <div className="lg:w-[50%] lg:ml-auto">
          <About />
          <Skill />
          <Projects />
          <Contact />
      </div>
    </main>
  );
}
