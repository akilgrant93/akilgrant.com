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

	const skillDesc = ['Since the MySpace era I loved fiddling around with HTML and CSS. Over time I picked up JS, React and other critical pieces of the web development tech stack in order to build my projects.','Pen and paper. The foundation of my love affair with all things visual. From preliminary sketches, to storyboards, and conceptual art.','Growing up I loved cartoons, movies, and video games. That love for animation and special effects melded with my growing design skills into a strong passion for motion graphics. After Effects, Cinema 4D and Premiere are essential parts of my visual toolkit.','I’ve been lucky enough to work with dozens of businesses, non-profits, artists and collectives on their logos and branding. There’s nothing like the unity of a defined corporate identity. The years of practice on this end have given me a true mastery of Adobe Photoshop and Illustrator.']

	const lottieArr = [userExperience, illustration, motionGraphics, artDirection]

	const handleClick = (e) => {
		setSelected(e.target.value.slice(-1))

	}

  return (
    <section>
      <div className="container mt-24 mx-auto">
        <div className="flex flex-col sm:flex-row items-center lg:w-4/5 sm:mx-auto justify-evenly sm:mb-2 -mx-2">
        <div className="list py-16 w-8/12 md:w-1/4">
		<div className="head">
			<div className="align-center text-center pb-2 text-forest-green text-base lg:text-lg font-bold
			">Skills & Tech</div>
		</div>
		<ul className='flex text-forest-green justify-center text-sm flex-wrap mt-3'>
			{skillsArr.map((skill, index) => {
				return (
					<div key={index} className='w-1/2 sm:w-9/12 flex pt-2 items-center text-center sm:text-left'>
						<input
						type="radio"
						id={`item-${index+1}`}
						onClick={handleClick}
						value={`item-${index+1}`}
						name="items"/>
						<label
						htmlFor={`item-${index+1}`}
						className="skillsRadio font-medium mx-auto w-full h-full">
							{skill}
						</label>
						<label htmlFor={`item-${index+1}`} className="invisible md:visible button"></label>
					</div>
				)
			})}

		</ul>
				</div>
				{/* use winWidth as additonal conditional for placement of this text within overall structure, as well as labeling */}
				{selected === null
				? <div>
						<p id='skillTxt'
						className="text-xs md:text-sm py-5 sm:pt-0 font-semibold text-forest-green relative text-center w-1/2 md:w-11/12 mx-auto">The multi-hyphenate designers toolkit comes with many supplies, click one to see how they look!</p>
						<img className='max-w-sm md:max-w-lg mx-auto lg:max-w-xl' src={require('../media/standard-01.png')}/>
					</div>
					: <div className="max-w-2xl" >
					<p id='skillTxt' className="skillsAnim text-xs md:text-sm pt-5 sm:pt-0 font-semibold text-forest-green relative text-center w-8/12 md:w-11/12 mx-auto">{skillDesc[parseInt(selected)-1]}</p>
					<Lottie loop={false} animationData={lottieArr[parseInt(selected)-1]} />
					</div>

					}
        </div>
      </div>
    </section>
  );
}
