import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React from "react";

const App = () => {
  return (
    <div className="overflow-x-hidden text-mainLight antialiased selection:bg-cyan-300 selection:text-cyan-300">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-mainGreen"></div>
      </div>
      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <About />
      </div>
    </div>
  );
};

export default App;
