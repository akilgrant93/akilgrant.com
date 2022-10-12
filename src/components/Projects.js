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
			<li className="tab-active"><img src="https://images.squarespace-cdn.com/content/v1/5363e3d1e4b0b6dbd37bcdd6/1584439666648-WC21M3H2FTNH0GSFAVSH/growr-01.png?format=1000w"/></li>
			<li id="comments"><i className=""></i></li>
			<li id="notifications"><i className=""></i></li>
			<li id="settings"><i className=""></i></li>
			<li><i className=""></i></li>
		</ul>
		<div className="content">
			<div className="box box-active" id="box-1">
				<h1>Growr</h1>
				<p style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'100%', margin: '0 auto'}}>Firebase<span className="dot"></span>React Native<span className="dot"></span>Lottie<span className="dot"></span>Illustrator<span className="dot"></span>After Effects</p>
				<div>
				<p className="bulletText">What started off as a simple ToDo app that became a behemoth of a passion project. Once the minimum viable product of an app that gave the user reminders to water their plants was created, layer after layer upon functionality that was needed to make it really practical just called out for me to build them. You could, no joke, manage a nice farm with this app. I know I have!</p>				</div>
			</div>

			<div className="box" id="box-2">
			<h1>Water Your Plants Medicinal Coloring Book</h1>
				<p style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'45%', margin: '0 auto'}}>Illustrator<span className="dot"></span>Photography</p>
				<div>
				<p className="bulletText">As the pandemic began to ramp up it seemed like the whole world was learning about gardening foraging or something to do with returning to a simple life. To that end, I did my part by helping a farmer publish a series medicinal herb coloring books to help folks with wild plant identification as a nice way to relax during quarantine downtime.</p>
				<p className="bulletText">Armed with a list of rare herbs I began a journey to document this little selection of natures bounty. Although the client supplied some of the photos used for herbs in the book, in many cases I had to photograph and recreate the images of the plants.</p>
				</div>
			</div>

			<div className="box" id="box-3">
			<h1>Durian</h1>
				<p style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'80%', margin: '0 auto'}}>Illustrator<span className="dot"></span>Premiere<span className="dot"></span>After Effects<span className="dot"></span>Cinema4D</p>
				<p className="bulletText">After years of working for other people I decided to pull the plug and launch my own production company — Northcide Productions. For our first offering I produced a short film named “Durian.” Completed in 2020, the byline reads as follows: <br/> <i>A young anxious woman tries to depict the perfect life on social media and is forced to re-evaluate her life trajectory when her boyfriend introduced a strange fruit called durian.</i></p>
				<p className="bulletText">My contributions as producer were wide ranging – funding, location scouting, production design, craft services, transportation and more but my most critical contributions were in the realm of (award winning) motion graphics. From the visual effects used in-scene, simulated screens, to both starting and ending credits my hands were all over this piece.</p>

			</div>

			<div className="box" id="box-4">
				<h1>Terra-2042</h1>
				<p style={{display:'flex', alignItems:'center', justifyContent:'space-evenly', width:'70%', margin: '0 auto'}}>MongoDB<span className="dot"></span>Express<span className="dot"></span>React<span className="dot"></span>Socket.io</p>
				<p className="bulletText"><span className="dot2"></span>Terra 2042 is a web-based post-apocalyptic tabletop card game. It features live multiplayer games, custom deck building, and a shop to spend your spoils.</p>
				<p className="bulletText"><span className="dot2"></span>If you are the first player in the lobby, click on "CREATE GAME" to generate a room code. Send the code to your friend!</p>
				<p className="bulletText"><span className="dot2"></span>Terra 2042 is a two-player game. Create a game and share the room code with a friend to battle it out.</p>
				<p className="bulletText"><span className="dot2"></span>Socket.io provides realtime updates, and save-states as well as in-game chat functions!</p>
			</div>
		</div>
	</div>
        </div>
      </div>
    </section>
  );
}
