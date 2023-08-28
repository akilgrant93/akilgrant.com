import React, {useState, useEffect} from "react";
import Navbar from "./components/Navbar";
import './app.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Project from "./components/Project.jsx";
import Home from "./Home";
import Modal from './components/Modal'

export default function App() {
  const [clickedImg, setClickedImg] = useState(null)

  //closes modal when the users clicks outside it
  useEffect(() => {
    let handler = (e) => {
      if(e.target.id !== 'modalImg'){
        setClickedImg(null)
      }
    }
    document.addEventListener("mousedown", handler)
  })

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
      <Router>
            <Navbar />
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/project/:name' element={<Project handleClick={handleClick}/>} />
            </Routes>
            {clickedImg && (
              <Modal
                clickedImg={clickedImg}
                handleClick={handleClick}
              />
        )}
        </Router>
    </main>
  );
}

