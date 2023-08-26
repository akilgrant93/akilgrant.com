import React from "react";
import Navbar from "./components/Navbar";
import './app.css';
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Project from "./components/Project.jsx";
import Home from "./Home";
import ScrollToTop from "./ScrollToTop";
import ScrollToHashElement from "./components/ScrollToHashElement";

export default function App() {


  return (
    <main className="text-gray-400 bg-green-50 body-font overflow-hidden" id="home">

      <Router>
            <Navbar />
            <ScrollToHashElement/>
            <ScrollToTop/>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/project/:name' element={<Project />} />
            </Routes>
        </Router>


    </main>
  );
}

