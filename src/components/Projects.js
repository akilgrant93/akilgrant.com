import React, {useState, useEffect} from "react";
import Project from "./Project";
import './projects.css'
import { ProjectData } from './ProjectData'
import { Motion, spring} from 'react-motion'

export default function Projects(props) {
	const [isVisible, setIsVisible] = useState(false);

  const handleVisible = (data) => {
		const tabs = document.querySelector(".content");

    if(isVisible){
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    const header = document.querySelector(".header");
		const content = document.querySelector(".content");
		const boxes = [...content.children];
		const tabs = [...header.children];
		tabs.pop();

		for (let i in tabs) {
			tabs[i].addEventListener("click", () => {
				for (let i in tabs) tabs[i].removeAttribute("class");
				tabs[i].classList.add("tab-active");
				for (let box of boxes) box.classList.remove("box-active");
				boxes[i].classList.add("box-active");
		});
}
  }, []);

  return (
    <section id="projects" className="text-gray-400 w-full bg-gray-900 body-font">
      <div className="mx-auto text-center">
        <div className="flex flex-wrap">
        <div className="w-full">
		<ul className="header md:mb-10">
			{/* might want to refactor this into a map function or something */}
			{/* <li className="tab-active"><img alt="Colorful green logo reading Growr." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1584439666648-WC21M3H2FTNH0GSFAVSH/growr-01.png?format=1000w"/></li> */}
			<li className=''><img alt="A book titled Water Your Plants Medicinal Herbs Coloring Book lies on a bed of green grass."  className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1f3c779c-23bc-4bba-927d-7982cc66a105/IMG_4330.png?format=500w"/></li>
			<li className=''><img alt="A Golden lettered logo reading Durian overlaid atop a bed of flower petals." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/be225f8f-fdba-4e60-a62f-3ee93c5dce66/durianlogo.png?format=500w"/></li>
			<li className=''><img alt="A devasated post apocalyptic city with a blood red setting sun in the background." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/704dc755-1e62-4447-a717-7c26c5f346a5/made-bg2.png?format=2500w"/></li>
			<li className=''><img alt="A devasated post apocalyptic city with a blood red setting sun in the background." className="icon" src="engraving.gif"/></li>
			<li>
			<div id="slideShow0" className=''></div>
			</li>
				<li>
				<div id="slideShow" className=''></div>
				</li>
				<li>
				<div className="greenCover "></div>
				<div id="slideShow2"  className=''></div>
				</li>
			<li><i className=""></i></li>
		</ul>
		<Motion
		defaultStyle={{height: 350}}
		style={{height: spring(!isVisible ? 350 : 900)}}
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