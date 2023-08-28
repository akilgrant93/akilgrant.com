import React from "react";
import '../projects.css'
import { Link } from "react-router-dom";

const TabNavItem = ({ id, title, activeTab, setActiveTab, icon, project, index, setClicked }) => {

 const handleClick = () => {
   if(title !== 'Growr'){
    setClicked(false)
   }
    setActiveTab(id)
 };

const stateVals = {project, activeTab}
return (
   <li onClick={handleClick} className={activeTab === id ? "active" : ""}>
      <Link to={`/project/:${project.name.replace(/\s/g, "_")}`} state={stateVals}>
     <div id={
      title === 'Illustration'
      ? 'slideShow0'
      : title === 'Logos and Branding'
      ? 'slideShow'
      : 'slideShow2'
     }>
     <img className='shadow-inner' src={
      title === 'Illustration' || title === 'Logos and Branding' || title === 'Animation'
      ? require('../../media/empty-01.png')
      : title === 'Laser Engraving'
      ? require('../../media/engraving.gif')
      : icon
     }/>
     </div>
      </Link>
   </li>
 );
};
export default TabNavItem;
