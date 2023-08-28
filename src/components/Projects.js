import React from "react";
import './projects.css'
import './tabs.css'
import Tabs from "./tabs";

export default function Projects() {

  return (
    <section className="text-gray-400 w-full bg-gray-900 body-font">
      <div className="mx-auto text-center">
        <div className="flex flex-wrap">
        <div className="w-full">
					<Tabs />
				</div>
        </div>
      </div>
			<div id="skills"></div>
    </section>
  );
}
