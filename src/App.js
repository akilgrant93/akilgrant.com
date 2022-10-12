import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ImageSlider from "./components/ImageSliders";
import { SliderData } from './components/SliderData';

export default function App() {
  return (
    <main className="text-gray-400 bg-laurel-green-100 body-font">
      <Navbar />
      <ImageSlider slides={SliderData} />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
