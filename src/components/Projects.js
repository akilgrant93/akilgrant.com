import React, {useState, useEffect} from "react";
import Project from "./Project";
import './projects.css'
import { ProjectData } from './ProjectData'

export default function Projects(props) {
	const [isVisible, setIsVisible] = useState(false);

  const handleVisible = () => {

		const tabs = document.querySelector(".content");

    if(isVisible){
			tabs.classList.remove("maxHeight");
			tabs.classList.add("minHeight");
      setIsVisible(false)
    } else {
			tabs.classList.remove("minHeight");
			tabs.classList.add("maxHeight");
      setIsVisible(true)
    }

		console.log(isVisible)

  }


  useEffect(() => {
    const header = document.querySelector(".header");
		const content = document.querySelector(".content");
		const boxes = [...content.children];
		const tabs = [...header.children];
		tabs.pop();

		for (let i in tabs) {
			tabs[i].addEventListener("click", () => {
				console.log(isVisible)
				if(!isVisible){
					content.classList.remove("maxHeight");
					content.classList.add("minHeight");
				}
				content.classList
				setIsVisible(false)
				for (let i in tabs) tabs[i].removeAttribute("class");
				tabs[i].classList.add("tab-active");
				for (let box of boxes) box.classList.remove("box-active");
				boxes[i].classList.add("box-active");
		});
}
  }, []);

  return (
    <section id="projects" className="text-gray-400 container bg-gray-900 body-font">
      <div className="px-5 pb-10 mx-auto text-center lg:px-40">
        <div className="flex flex-wrap -m-4">
        <div className="w-full">
		<ul className="header mb-10">
			<li className="tab-active"><img alt="Colorful green logo reading Growr." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1584439666648-WC21M3H2FTNH0GSFAVSH/growr-01.png?format=1000w"/></li>
			<li><img alt="A book titled Water Your Plants Medicinal Herbs Coloring Book lies on a bed of green grass."  className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1f3c779c-23bc-4bba-927d-7982cc66a105/IMG_4330.png?format=500w"/></li>
			<li><img alt="A Golden lettered logo reading Durian overlaid atop a bed of flower petals." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/be225f8f-fdba-4e60-a62f-3ee93c5dce66/durianlogo.png?format=500w"/></li>
			<li><img alt="A devasated post apocalyptic city with a blood red setting sun in the background." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/704dc755-1e62-4447-a717-7c26c5f346a5/made-bg2.png?format=2500w"/></li>
			<li><i className=""></i></li>
		</ul>
		<div className="content minHeight">
			{ProjectData.map((project, index) => {
				return (<div key={index} className={index === 0 ? "box box-active" : "box"} id={`box-${index+1}`}>
					<Project name={project.name}
					images={project.images}
					skills={project.skills}
					alt={project.alt}
					type={project.type}
					links={project.links}
					pages={project.pages}
					isVisible={isVisible}
					handleVisible={handleVisible}
					handleClick={props.handleClick}
					bulletPoints={project.bulletPoints}/>
				</div>)
			})}
		</div>
	</div>
        </div>
      </div>
			<div id="skills"></div>
    </section>
  );
}
