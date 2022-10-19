import React from "react";
import './skills.css'

export default function Skills() {
	const skillsArr = ['User Experience', 'Illustration', 'Motion Graphics', 'Art Direction']
  return (
    <section id="">
      <div className="container  px-5 mt-32 mb-32 mx-auto">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="list">
		<div className="head">
			<div id="day" className="title">Skills & Tech</div>
		</div>
		<ul>
			{skillsArr.map((skill, index) => {
				return (
					<div key={index}>
						<input type="radio" id={`item-${index+1}`} value={`item-${index+1}`} name="items"/>
						<label htmlFor={`item-${index+1}`} className="text font-medium">{skill}</label>
						<label htmlFor={`item-${index+1}`} className="button"></label>
					</div>
				)
			})}

		</ul>
	</div>
        </div>
      </div>
    </section>
  );
}
