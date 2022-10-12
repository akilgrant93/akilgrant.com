import { ChipIcon } from "@heroicons/react/solid";
import React from "react";
import './skills.css'

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div className="list">
		<div className="head">
			<ChipIcon className="w-5 inline-block" />
			<div id="day" className="title">Skills & Tech</div>
		</div>
		<ul>
			<div>
				<input  type="radio" id="item-1" value="item-1" name="items" />
				<label htmlFor="item-1" className="text">User Experience</label>
				<label htmlFor="item-1"  className="button"></label>
			</div>
			<div>
				<input  type="radio" id="item-2" value="item-2" name="items" />
				<label htmlFor="item-2" className="text">Illustration</label>
				<label htmlFor="item-2" className="button"></label>
			</div>
			<div>
				<input  type="radio" id="item-3" value="item-3" name="items" />
				<label htmlFor="item-3" className="text">Motion Graphics</label>
				<label htmlFor="item-3" className="button"></label>
			</div>
			<div>
				<input  type="radio" id="item-4" value="item-4" name="items" />
				<label htmlFor="item-4" className="text">Art Direction</label>
				<label htmlFor="item-4" className="button"></label>
			</div>

		</ul>
	</div>
        </div>
      </div>
    </section>
  );
}
