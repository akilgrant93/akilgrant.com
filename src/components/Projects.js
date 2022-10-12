import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect} from "react";
import Project from "./Project";
import './projects.css'
import { ProjectData } from './ProjectData'

export default function Projects() {

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
    <section id="projects" className="text-gray-400 container bg-gray-900 body-font">
      <div className="px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Past Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            As a multi-hyphenate designer my portfolio has to represent a range of skills! Here's a selection of some of my favorite projects.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
        <div className="tabs">
		<ul className="header">
			<li className="tab-active"><img alt="Colorful green logo reading Growr." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1584439666648-WC21M3H2FTNH0GSFAVSH/growr-01.png?format=1000w"/></li>
			<li><img alt="A book titled Water Your Plants Medicinal Herbs Coloring Book lies on a bed of green grass."  className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1f3c779c-23bc-4bba-927d-7982cc66a105/IMG_4330.png?format=500w"/></li>
			<li><img alt="A Golden lettered logo reading Durian overlaid atop a bed of flower petals." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/be225f8f-fdba-4e60-a62f-3ee93c5dce66/durianlogo.png?format=500w"/></li>
			<li><img alt="A devasated post apocalyptic city with a blood red setting sun in the background." className="icon" src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/704dc755-1e62-4447-a717-7c26c5f346a5/made-bg2.png?format=2500w"/></li>
			<li><i className=""></i></li>
		</ul>
		<div className="content">
			<div className="box box-active" id="box-1">
			<Project name={ProjectData[0].name}
				image={ProjectData[0].image} skills={ProjectData[0].skills} bulletPoints={ProjectData[0].bulletPoints}/>
			</div>

			<div className="box" id="box-2">
				<Project name={ProjectData[1].name}
				image={ProjectData[1].image} skills={ProjectData[1].skills} bulletPoints={ProjectData[1].bulletPoints}/>
			</div>

			<div className="box" id="box-3">
			<Project name={ProjectData[2].name}
				image={ProjectData[2].image} skills={ProjectData[2].skills} bulletPoints={ProjectData[2].bulletPoints}/>
			</div>

			<div className="box" id="box-4">
			<Project name={ProjectData[3].name}
				image={ProjectData[3].image} skills={ProjectData[3].skills} bulletPoints={ProjectData[3].bulletPoints}/>
			</div>
		</div>
	</div>
        </div>
      </div>
    </section>
  );
}
