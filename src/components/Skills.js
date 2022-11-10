import React, {useState} from "react";
import SkillAnimation from "./SkillAnimation";
import './skills.css'

export default function Skills() {
	const [selected, setSelected] = useState(null)

	const handleClick = (e) => {
		console.log(e.target.value)
		setSelected(e.target)

	}


	const skillsArr = ['User Experience', 'Illustration', 'Motion Graphics', 'Art Direction']

  return (
    <section id="">
      <div className="container mt-32 mx-auto">
        <div className="flex items-center lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
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
						<img className='max-w-2xl ml-20' src='standard-01.png'/>
					</div>
					: ''}
        </div>
      </div>
    </section>
  );
}
