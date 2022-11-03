import React, {useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import { ProjectData } from './ProjectData'
import './anim.css'
import { Motion, spring} from 'react-motion'

const Page = React.forwardRef((props, ref) => {
  // console.log(props)
  return (
      <div className="demoPage" ref={ref}>
          <img src={`./${props.src}`}/>
      </div>
  );
});

export default function Flipbook(props) {

  if(props.title === 'Water Your Plants Medicinal Coloring Book'){
    return (
      <div id='book'
      >
        <Motion
		defaultStyle={{opacity: 0}}
		style={{opacity: spring(!props.isVisible ? 0 : 1)}}>
      {(style) => (
      <div style={{opacity: style.opacity}}>
      <div className="flex">
            <span className="text-xl text-forest-green dismiss" onClick={props.handleVisible}>
              X
          </span>
          </div>
      <HTMLFlipBook
      className="shadow-2xl"
      maxShadowOpacity={0.25}
      width={306}
      height={396}
      size={'stretch'}>
      {ProjectData[1].pages.map((page, index) => {
        return (
        <div key={index}>
          <Page number={index+1} src={page}/>
        </div>)
      })}
      </HTMLFlipBook>
      </div>
      )}
      </Motion>
      </div>
    )
  }
  else {
    return (<div></div>)
  }
}
