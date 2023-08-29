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
        {}
        {Object.entries(ProjectData).map((project, index) => {
              return (
                  <TabNavItem index={index} title={project[1].data.name} id={`tab${index+1}`} icon={project[1].data.images[0]} activeTab={activeTab} project={project[1].data} setActiveTab={setActiveTab} key={index} setClicked={props.setClicked}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
