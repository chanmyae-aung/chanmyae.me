import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main className="flex flex-col relative px-10 lg:px-0">
      <div className="lg:w-[50%] lg:h-screen overflow-hidden lg:fixed top-0">
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
