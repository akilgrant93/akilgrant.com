import React, { useState } from 'react'
import { useLocation } from "react-router-dom"
import AnimationTabs from './AnimationTabs';
import Book from './Book';
import Button from './Button';
import Contact from './Contact';
import ImgWrapper from './ImgWrapper';
import LogoTabs from './LogoTabs';
import './project.css';
import Tabs from './tabs';
import { ProjectData } from './ProjectData'


function Project(props) {
  const location = useLocation();

  const currProjectData = ProjectData[location.pathname.slice(10).replace(/[_-]/g, "")].data

  const {name, skills, images, type, alt, links, bulletPoints, nestedImages, titles, pages} = currProjectData
  const [activeLogoTab, setActiveLogoTab] = useState(props.activeLogoTab ? props.activeLogoTab : "tab1");
  const [activeAnimationTab, setActiveAnimationTab] = useState(props.activeAnimationTab ? props.activeAnimationTab : "tab1");
  const [clicked, setClicked] = useState(false)

console.log(ProjectData[location.pathname.slice(10).replace(/[_-]/g, "")].data.idx)


  const handleBookClick = (book) => {
    setClicked(!clicked)
  }

  return (
    <div className='projectPage mt-24'>
      <Tabs setClicked={setClicked} activeTab={`tab${ProjectData[location.pathname.slice(10).replace(/[_-]/g, "")].data.idx}`} activeLogoTab={activeLogoTab}/>
      <div className='flex-column'>
        { name === 'Logos and Branding'
        ?
        <LogoTabs activeLogoTab={activeLogoTab} setActiveLogoTab={setActiveLogoTab} setClicked={setClicked}/>
        : null
        }
        { name === 'Animation'
        ?
        <AnimationTabs activeAnimationTab={activeAnimationTab} setActiveAnimationTab={setActiveAnimationTab}/>
        : null
        }
      <div className='flex'>
      <div className={name === 'Logos and Branding' || name === 'Animation'
      ? 'w-1/3'
      : 'w-1/2'}>
        <div className='flex'>
          <img className={name === 'Laser Engraving' || name === 'Illustration'
           ? 'w-1/2' : ''} src={name === 'Logos and Branding' || name === 'Animation' ? images[parseInt(name === 'Logos and Branding' ?activeLogoTab.slice(3):activeAnimationTab.slice(3))-1] : images[0]
          }/>
          {name === 'Laser Engraving' || name === 'Illustration'
          ? <div className='flex w-1/2'>
              <ul className='w-1/2'>
                <li><ImgWrapper onClick={props.handleClick} imgSrc={images[1]}/></li>
                <li><ImgWrapper onClick={props.handleClick} imgSrc={images[2]}/></li>
             </ul>
              <ul className='w-1/2'>
                <li><ImgWrapper onClick={props.handleClick} imgSrc={images[3]}/></li>
                <li><ImgWrapper onClick={props.handleClick} imgSrc={images[4]}/></li>
             </ul>
          </div>
        : null}

        </div>
        {name === 'Laser Engraving' || name === 'Illustration'
          ? <div>
              <ul id='square' className='flex'>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[5]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[6]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[7]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[8]}/></li>
             </ul>
              <ul className='flex'>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[9]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[10]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[11]}/></li>
                <li className='w-1/4 h-1/4'><ImgWrapper onClick={props.handleClick} imgSrc={images[12]}/></li>
              </ul>
           </div>
        : null}
      </div>

      <div className={`${name === 'Logos and Branding' || name ==='Animation'
      ?'w-2/3'
      :'w-1/2'} px-5 py-5 lg:mx-20 self-center`}>
      <h1 className='pl-5 text-left text-forest-green text-md lg:text-lg font-bold'>{name}</h1>

      {name === 'Logos and Branding' || name === 'Animation'
      ? <h1 className='pl-5 text-left text-forest-green text-sm font-bold'>{titles[parseInt(name === 'Logos and Branding' ? activeLogoTab.slice(3) : activeAnimationTab.slice(3))-1]}</h1>
      : null}

      <ul className='flex  items-center pl-5'>
        {skills.map((skill,idx) => {
          return (
            <li key={idx}><p className=' flex text-sm font-semibold inline-block'>{idx > 0
              ? <span className="h-1 w-1 mx-2 self-center inline-block bg-forest-green rounded-full"></span>
              : ''}{skill}</p></li>
          )
        })}
      </ul>

      <ul className='pl-5 py-4'>
        {name === 'Logos and Branding' || name === 'Animation'
        ? <li><p className='text-sm md:text-sm text-left inline-block w-full'><span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletPoints[parseInt(name==='Logos and Branding' ? activeLogoTab.slice(3) : activeAnimationTab.slice(3))-1]}</p></li>

        : bulletPoints.map((bulletPoint,idx) => {
          return (
            <li key={idx}><p className='text-sm md:text-sm text-left inline-block w-full'><span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletPoint}</p></li>
          )
        })}
      </ul>

      {name === 'Logos and Branding'
      ? <ul className='flex w-2/3 mx-auto justify-center pt-2'>
        {nestedImages[parseInt(activeLogoTab.slice(3))-1].map((image, idx) => {
           return <li key={idx} className={images.length > 3
            ?'w-1/3 shadow-md rounded-lg mx-2 overflow-hidden'
            :'w-1/2 shadow-md rounded-md mx-2 overflow-hidden'
          }><ImgWrapper onClick={props.handleClick} imgSrc={image}/></li>
        })}
      </ul>
      : name !== 'Animation'
      ? <ul className='flex justify-center pt-2'>
        {images.map((image,idx ) => {
          if(name === "Laser Engraving" || name === "Illustration"){
            if(idx > 12){
              return <li key={idx} className={images.length > 3
                ?'w-1/3 shadow-md rounded-lg mx-2 overflow-hidden'
                :'w-1/2 shadow-md rounded-md mx-2 overflow-hidden'
              }><ImgWrapper onClick={props.handleClick} imgSrc={image}/></li>
            }
          }
          else {
              if(idx > 0){return <li key={idx} className={images.length > 3
                ?'w-1/3 shadow-md rounded-md mx-2 overflow-hidden'
                :'w-1/2 shadow-md rounded-md mx-2 overflow-hidden'
              }><ImgWrapper onClick={props.handleClick} imgSrc={image}/></li>}
          }
          return null
        })}
      </ul>
      :null}

      {type === 'code'
      ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Link'} link={links[0]}/>
        <Button type={'Code'} link={links[1]}/>
      </div>
      : null}

      {type === 'book'
      ? <div className="flex mt-5 justify-center items-center">
          <Button type={'Read'} onClick={handleBookClick}/>
          <Button type={'Buy'} link={links[0]}/>
      </div>
      : null}


      {titles !== undefined && titles[0] === 'EIC Agency' && activeLogoTab === 'tab1'
      ? <div className="flex mt-5 justify-center items-center">
          <Button type={'Logos'} onClick={handleBookClick}/>
      </div>
      : null}


      {type === 'video' || (type === 'galleryTwo' && name ==='Animation')
      ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Watch'} link={name === 'Animation'
        ? links[parseInt(activeAnimationTab.slice(3))-1]
        : links[0]}/>
      </div>
      : null}

      </div>


      </div>

      {type === 'book' && clicked
      ? <div className="my-10 mt-24">
          <Book id="book" pages={pages}/>
      </div>
      : null}

      {name === 'Logos and Branding' && activeLogoTab === 'tab1' && clicked
      ? <div className="my-10 mt-24">
          <Book id="book" pages={pages}/>
          <p className='mx-auto text-center text-xs'>A series of logos done for SEO websites I created while at EIC</p>
      </div>
      : null}

      <div id='contact'></div>
      <Contact/>
      </div>
    </div>
  )
}

export default Project
