import React from "react";
import './tabs2.css'
import { ProjectData } from './ProjectData'
import LogoTabNavItem from "./V2/LogoTabNavItem";

export default function LogoTabs({ activeLogoTab, setActiveLogoTab, setClicked }){

  return (
    <div className="LogoTabs">
      <div className="w-full">
      <ul className="nav">
        {Object.entries(ProjectData)[7][1].data.images.map((image, index) => {
              return (
                <LogoTabNavItem icon={image} key={index} id={`tab${index+1}`} activeLogoTab={activeLogoTab} setActiveLogoTab={setActiveLogoTab} setClicked={setClicked}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
