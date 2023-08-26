import React, {useState, useEffect} from "react";
import Project from "./Project";
import './projects.css'
import './tabs.css'
import { ProjectData } from './ProjectData'
import { Motion, spring} from 'react-motion'
import Tabs from "./tabs";

export default function Projects(props) {
	const [isVisible, setIsVisible] = useState(false);
	const [windowDimension, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	})

	const calculateDefaultHeight = () => {
		if(window.innerWidth <= 640){
			return 500
		}
		if(window.innerWidth <= 768){
			return 250
		}
		if(window.innerWidth <= 1024){
			return 250
		}
		if(window.innerWidth > 1024){
			return 250
		}
	}

	const calculateBooktHeight = () => {
		if(window.innerWidth <= 640){
			return 775
		}
		if(window.innerWidth <= 768){
			return 675
		}
		if(window.innerWidth <= 1024){
			return 950
		}
		if(window.innerWidth > 1024){
			return 950
		}
	}

	const [height, setHeight] = useState(calculateDefaultHeight())
	const [bookHeight] = useState(calculateBooktHeight())

  const handleVisible = (data) => {
    if(isVisible){
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    })
  }

  useEffect(() => {
    const header = document.querySelector(".header");
		const content = document.querySelector(".content");
		// const boxes = [...content.children];
		// const tabs = [...header.children];
		// tabs.pop();
		window.addEventListener('resize', detectSize)
  }, []);

  return (
    <section className="text-gray-400 w-full bg-gray-900 body-font">
      <div className="mx-auto text-center">
        <div className="flex flex-wrap">
        <div className="w-full">
					<Tabs />
				</div>
        </div>
      </div>
			<div id="skills"></div>
    </section>
  );
}
