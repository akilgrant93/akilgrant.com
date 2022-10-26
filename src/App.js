import React, { useState, useEffect } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleClick = (item, index) => {
    // console.log('clicked')
    // console.log(item)
    if(typeof item === 'string'){
      setClickedImg(item);
    } else if(typeof item === 'object' && item.target.localName === "img"){
      console.log('test')
      console.log(item)
      setClickedImg(item.target.currentSrc);
    } else if(typeof item === 'object' && item.target.localName === "button"){
      console.log('test')
      console.log(item)
      setClickedImg(item.target);
    } else {
      setClickedImg(item.target.currentSrc)
    }
    setCurrentIndex(index);
  };

  return (
    <main className="text-gray-400 bg-green-50 body-font" id="home">
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
            // handelRotationRight={handelRotationRight}
            handleClick={handleClick}
            // handelRotationLeft={handelRotationLeft}
          />
        )}
    </main>
  );
}

