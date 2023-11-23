import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { TypeAnimation } from "react-type-animation";


export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 5000);
  },[])

  // Loading state
  if(isLoading) {
    return <div className="flex w-screen h-screen justify-center items-center">
      <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'CHAN MYAE AUNG',
        500, // wait 1s before replacing "Mice" with "Hamsters"
        'FRONTEND DEVELOPER',
        200,
        // 'We produce food for Guinea Pigs',
        // 1000,
        // 'We produce food for Chinchillas',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: '1em', display: 'inline-block', fontWeight: 700, color: "#E50914" }}
      repeat={Infinity}
    />
    </div>
  }

  return (
    <main className="flex flex-col relative">
      <div className="absolute z-40 w-full lg:hidden h-screen flex items-center"><Navbar/></div>
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
