import React, {useState, useEffect} from "react";
import Project from "./Project";
import './projects.css'
import { ProjectData } from './ProjectData'
import { Motion, spring} from 'react-motion'

export default function Projects(props) {
	const [isVisible, setIsVisible] = useState(false);
	const [windowDimension, detectHW] = useState({
		winWidth: window.innerWidth,
		winHeight: window.innerHeight,
	})
	const [selected, setSelected] = useState('waterYourPlants')

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
	const [bookHeight, setBookHeight] = useState(calculateBooktHeight())

  const handleVisible = (data) => {
		const tabs = document.querySelector(".content");
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
		const boxes = [...content.children];
		const tabs = [...header.children];
		tabs.pop();
		window.addEventListener('resize', detectSize)

		console.log(windowDimension.winWidth)

		for (let i in tabs) {
			tabs[i].addEventListener("click", () => {
				for (let i in tabs) tabs[i].removeAttribute("class");
				tabs[i].classList.add("tab-active");
				for (let box of boxes) box.classList.remove("box-active");
				boxes[i].classList.add("box-active");
			});
}


  }, []);

	const heightCalculator = (width, name) => {
		console.log('calculating!')
    if(width >= 1024 && name === 'waterYourPlants'){
			setHeight(250)
		}
		else if(width >= 768 && name === 'waterYourPlants'){
			setHeight(250)

		}
		else if(width >= 640 && name === 'waterYourPlants'){
			setHeight(300)

		}
		else if(width < 640 && name === 'waterYourPlants'){
			setHeight(500)

		}
		else if(width >= 1024 && name === 'durian'){
			setHeight(265)

		}
		else if(width >= 768 && name === 'durian'){
			setHeight(375)

		}
		else if(width >= 640 && name === 'durian'){
			setHeight(450)

		}
		else if(width < 640 && name === 'durian'){
			setHeight(600)

		}
		else if(width >= 1024 && name === 'terra2042'){
			setHeight(250)

		}
		else if(width >= 768 && name === 'terra2042'){
			setHeight(300)

		}
		else if(width >= 640 && name === 'terra2042'){
			setHeight(450)

		}
		else if(width < 640 && name === 'terra2042'){
			setHeight(625)

		}
		 else if(width >= 1024 && name === 'engraving'){
			setHeight(250)

		}
		else if(width >= 820 && name === 'engraving'){
			setHeight(400)

		}
		else if(width >= 768 && name === 'engraving'){
			setHeight(580)

		}
		else if(width >= 640 && name === 'engraving'){
			setHeight(450)

		}
		else if(width < 640 && name === 'engraving'){
			setHeight(550)

		}
		else if(width >= 1024 && name === 'illustration'){
			setHeight(250)

		}
		else if(width >= 820 && name === 'illustration'){
			setHeight(400)

		}
		else if(width >= 768 && name === 'illustration'){
			setHeight(580)

		}
		else if(width >= 640 && name === 'illustration'){
			setHeight(450)

		}
		else if(width < 640 && name === 'illustration'){
			setHeight(975)

		}
		else if(width >= 1024 && name === 'branding'){
			setHeight(150)
		}
		else if(width >= 768 && name === 'branding'){
			setHeight(150)

		}
		else if(width >= 640 && name === 'branding'){
			setHeight(400)

		}
		else if(width < 640 && name === 'branding'){
			setHeight(400)

		}
		else if(width >= 1024 && name === 'animation'){
			setHeight(210)
		}
		else if(width >= 768 && name === 'animation'){
			setHeight(400)

		}
		else if(width >= 640 && name === 'animation'){
			setHeight(450)

		}
		else if(width < 640 && name === 'animation'){
			setHeight(500)

		}
  }

	const handleEvent = (event) => {
		heightCalculator(windowDimension.winWidth, event.target.classList[event.target.classList.length-1])
		setSelected(event.target.classList[event.target.classList.length-1])
	}

  return (
    <section id="projects" className="text-gray-400 w-full bg-gray-900 body-font">
      <div className="mx-auto text-center">
        <div className="flex flex-wrap">
        <div className="w-full">
		<ul onClick={handleEvent} className="header md:mb-2 lg:mb-10">
			{/* might want to refactor this into a map function or something */}
			{/* <li className="tab-active"><img alt="Colorful green logo reading Growr." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1584439666648-WC21M3H2FTNH0GSFAVSH/growr-01.png?format=1000w"/></li> */}
			<li><img alt="A book titled Water Your Plants Medicinal Herbs Coloring Book lies on a bed of green grass."  className="icon waterYourPlants" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1f3c779c-23bc-4bba-927d-7982cc66a105/IMG_4330.png?format=500w"/></li>
			<li><img alt="A Golden lettered logo reading Durian overlaid atop a bed of flower petals." className="icon durian" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/be225f8f-fdba-4e60-a62f-3ee93c5dce66/durianlogo.png?format=500w"/></li>
			<li><img alt="A devasated post apocalyptic city with a blood red setting sun in the background." className="icon terra2042" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/704dc755-1e62-4447-a717-7c26c5f346a5/made-bg2.png?format=2500w"/></li>
			<li><img alt="An engraving machine swiftly burning off the top layer of an acrylic plastic sheet." className="icon engraving" src="engraving.gif"/></li>
			<li>
			<div id="slideShow0" className="illustration"></div>
			</li>
				<li>
				<div id="slideShow" className="branding" ></div>
				</li>
				<li>
				<div className="greenCover"></div>
				<div id="slideShow2" className="animation"></div>
				</li>
			<li><i className=""></i></li>
		</ul>
		<Motion
		defaultStyle={{height: height}}
		style={{height: spring(
			!isVisible
			? height
			: bookHeight)
		}}
		>
			{(style) => (
		<div style={{height: style.height}}className="content">
			{ProjectData.map((project, index) => {
				return (<div key={index} className={index === 0 ? "box box-active" : "box"} id={`box-${index+1}`}>
					<Project name={project.name}
					images={project.images}
					nestedImages={project.nestedImages}
					skills={project.skills}
					alt={project.alt}
					type={project.type}
					links={project.links}
					pages={project.pages}
					gallery={project.gallery}
					isVisible={isVisible}
					handleVisible={handleVisible}
					handleClick={props.handleClick}
					titles={project.titles}
					bulletPoints={project.bulletPoints}/>
				</div>)
			})}
		</div>
			)}

		</Motion>
	</div>
        </div>
      </div>
			<div id="skills"></div>
    </section>
  );
}
