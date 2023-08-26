import React from "react";
import '../projects.css'

const AnimationTabNavItem = ({ id, activeAnimationTab, setActiveAnimationTab, icon }) => {

 const handleClick = () => {
   setActiveAnimationTab(id);
 };

const stateVals = {icon, activeAnimationTab}
return (
   <li onClick={handleClick} className={activeAnimationTab === id ? "active" : ""}>
     <img src={icon}/>
   </li>
 );
};
export default AnimationTabNavItem;
