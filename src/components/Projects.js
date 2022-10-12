import { CodeIcon } from "@heroicons/react/solid";
import React, {useEffect} from "react";
import './projects.css'

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
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
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
			<li id="dashboard" className="tab-active"><i className=""></i></li>
			<li id="comments"><i className=""></i></li>
			<li id="notifications"><i className=""></i></li>
			<li id="settings"><i className=""></i></li>
			<li><i className=""></i></li>
		</ul>
		<div className="content">
			<div className="box box-active" id="box-1">
				<h1>Growr</h1>
			</div>

			<div className="box" id="box-2">
				<h1>Water Your Plants Medicinal Coloring Book</h1>
			</div>

			<div className="box" id="box-3">
				<h1>Durian</h1>
			</div>

			<div className="box" id="box-4">
				<h1>Terra-2042</h1>
				<p style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'60%'}}>MongoDB<span className="dot"></span>Express<span className="dot"></span>React<span className="dot"></span>Socket.io</p>
				<p>Terra 2042 is a web-based tabletop card game. It features live multiplayer games, custom deck building, and a shop to spend your spoils. Terra 2042 takes place in a post-apocalyptic world where players must battle each other to protect their settlements.</p>

			</div>
		</div>
	</div>
        </div>
        <p className="lg:w-2/3 mx-auto leading-relaxed pt-6 text-base">
            More projects available on request.
          </p>
      </div>
    </section>
  );
}
