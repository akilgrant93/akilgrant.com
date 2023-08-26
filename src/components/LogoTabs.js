import React, { useState } from "react";
import TabNavItem from "./V2/TabNavItem";
import './tabs2.css'
import { ProjectData } from './ProjectData'
import LogoTabNavItem from "./V2/LogoTabNavItem";

export default function LogoTabs({ activeLogoTab, setActiveLogoTab, setClicked }){
  return (
    <div className="LogoTabs">
      <div className="w-full">
      <ul className="nav">
        {ProjectData[7].images.map((image, index) => {
              return (
                <LogoTabNavItem icon={image} key={index} id={`tab${index+1}`} activeLogoTab={activeLogoTab} setActiveLogoTab={setActiveLogoTab} setClicked={setClicked}/>
              )
            })}
      </ul>
      </div>
    </div>
  );
};
