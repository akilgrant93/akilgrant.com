import React, {useState} from "react";
import Lottie from "lottie-react";
import './skills.css'
import userExperience from "../user-experience.json";
import artDirection from "../art-direction.json";
import motionGraphics from "../motion-graphics.json"
import illustration from "../illustration.json"


export default function Skills() {
	const [selected, setSelected] = useState(null)

	const skillsArr = ['User Experience', 'Illustration', 'Motion Graphics', 'Art Direction']

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
						<label htmlFor={`item-${index+1}`} className="text font-medium">{skill}</label>
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
					: <Lottie className="max-w-2xl" animationData={lottieArr[parseInt(selected)-1]} /> }
        </div>
      </div>
    </section>
  );
}
