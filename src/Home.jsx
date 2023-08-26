import React, { useState } from 'react'
import About from './components/About'
import Contact from './components/Contact'
import ImageSlider from './components/ImageSliders'
import Modal from './components/Modal'
import Projects from './components/Projects'
import Skills from './components/Skills'
import { SliderData } from './components/SliderData';

function Home() {
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
    <div>
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
      )}</div>
  )
}

export default Home
