import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import React from "react";
import Technologies from "./components/Technologies";

const App = () => {
  return (
    <div className="overflow-x-hidden mx-auto text-mainLight antialiased selection:bg-cyan-300 selection:text-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-mainGreen"></div>
      </div>
      <Navbar />
      <Hero />
      <About />
      <Technologies />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
