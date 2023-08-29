import React from "react";
import './tabs2.css'
import { ProjectData } from './ProjectData'
import AnimationTabNavItem from "./V2/AnimationTabNavItem";

export default function AnimationTabs({ activeAnimationTab, setActiveAnimationTab }){
  return (
    <div className="LogoTabs">
      <div className="w-full">
      <ul className="nav">
        {Object.entries(ProjectData)[8][1].data.images.map((image, index) => {
              return (
                <AnimationTabNavItem icon={image} key={index} id={`tab${index+1}`} activeAnimationTab={activeAnimationTab} setActiveAnimationTab={setActiveAnimationTab}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
