import React, {useState, useEffect} from "react";
import Lottie from "lottie-react";
import './skills.css'
import userExperience from "../user-experience.json";
import artDirection from "../art-direction.json";
import motionGraphics from "../motion-graphics.json"
import illustration from "../illustration.json"

export default function Skills() {
	const [selected, setSelected] = useState(null)

	const skillsArr = ['User Experience', 'Illustration', 'Motion Graphics', 'Art Direction']

	const skillDesc = ['Since the MySpace era I loved fiddling around with HTML and CSS. Over time I picked up JS, React and other critical pieces of the web development tech stack in order to build my projects.','Pen and paper. The foundation of my love affair with all things visual. From preliminary sketches, to storyboards, and conceptual art.','Growing up I loved cartoons, movies, and video games. That love for animation and special effects melded with my growing design skills into a strong passion for motion graphics.','I’ve been lucky enough to work with dozens of businesses, non-profits, artists and collectives on their logos and branding. There’s nothing like the unity of a defined corporate identity.']

	const lottieArr = [userExperience, illustration, motionGraphics, artDirection]

	const handleClick = (e) => {
		setSelected(e.target.value.slice(-1))

	}

  return (
    <section id="">
      <div className="container mt-24 mx-auto">
        <div className="flex items-center lg:w-4/5 sm:mx-auto justify-evenly sm:mb-2 -mx-2">
        <div className="list w-64">
		<div className="head">
			<div className="title">Skills & Tech</div>
		</div>
		<ul>
			{skillsArr.map((skill, index) => {
				return (
					<div key={index} >
						<input type="radio" id={`item-${index+1}`} onClick={handleClick} value={`item-${index+1}`} name="items"/>
						<label htmlFor={`item-${index+1}`} className="text skillsRadio font-medium">{skill}</label>
						<label htmlFor={`item-${index+1}`} className="button"></label>
					</div>
				)
			})}

		</ul>
				</div>
				{selected === null
				? <div>
						<img className='max-w-2xl' src='standard-01.png'/>
					</div>
					: <div className="max-w-2xl" >
					<p id='skillTxt' className="skillsAnim text-sm font-semibold text-forest-green relative text-center w-11/12 mx-auto">{skillDesc[parseInt(selected)-1]}</p>
					<Lottie loop={false} animationData={lottieArr[parseInt(selected)-1]} />
					</div>

					}
        </div>
      </div>
    </section>
  );
}
