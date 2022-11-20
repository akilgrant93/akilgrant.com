import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ImageSlider from "./components/ImageSliders";
import { SliderData } from './components/SliderData';
import Modal from './components/Modal'

export default function App() {
  const [clickedImg, setClickedImg] = useState(null);

  const handleClick = (item) => {
    if(typeof item === 'string'){
      setClickedImg(item);
    } else if(typeof item === 'object' && item.target.localName === "img"){
      setClickedImg(item.target.currentSrc);
    } else if(typeof item === 'object' && item.target.localName === "button"){
      setClickedImg(item.target);
    } else {
      setClickedImg(item.target.currentSrc)
    }
  };

  return (
    <main className="text-gray-400 bg-green-50 body-font overflow-hidden" id="home">
      <Navbar />
      <ImageSlider slides={SliderData} />
      <About />
      <Projects
        handleClick={handleClick}
        />
      <Skills />
      <Contact />
      {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handleClick={handleClick}
          />
        )}
    </main>
  );
}

