import React, { useState } from "react";
import TabNavItem from "./V2/TabNavItem";
import './tabs2.css'
import { ProjectData } from './ProjectData'
export default function Tabs(props){
  const [activeTab, setActiveTab] = useState(props.activeTab ? props.activeTab : "tab1");

  return (
    <div className="Tabs">
      <div className="w-full">
      <ul className="nav">
        {ProjectData.map((project, index) => {
              return (
                  <TabNavItem index={index} title={project.name} id={`tab${index+1}`} icon={project.images[0]} activeTab={activeTab} project={project} setActiveTab={setActiveTab} key={index} setClicked={props.setClicked}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
