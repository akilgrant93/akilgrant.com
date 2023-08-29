import React from "react";
import '../projects.css'
const LogoTabNavItem = ({ id, activeLogoTab, setActiveLogoTab, icon, setClicked }) => {

 const handleClick = () => {
  setActiveLogoTab(id);
 };

return (
   <li onClick={handleClick} className={activeLogoTab === id ? "active" : ""}>
     <img src={icon}/>
   </li>
 );
};
export default LogoTabNavItem;
