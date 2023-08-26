import React, { useState } from "react";
import TabNavItem from "./V2/TabNavItem";
import './tabs2.css'
import { ProjectData } from './ProjectData'
import AnimationTabNavItem from "./V2/AnimationTabNavItem";

export default function AnimationTabs({ activeAnimationTab, setActiveAnimationTab }){
  return (
    <div className="LogoTabs">
      <div className="w-full">
      <ul className="nav">
        {ProjectData[8].images.map((image, index) => {
              return (
                <AnimationTabNavItem icon={image} key={index} id={`tab${index+1}`} activeAnimationTab={activeAnimationTab} setActiveAnimationTab={setActiveAnimationTab}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
