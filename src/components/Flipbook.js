import React, {useState, useEffect} from 'react'
import HTMLFlipBook from 'react-pageflip';
import { ProjectData } from './ProjectData'

const Page = React.forwardRef((props, ref) => {
  // console.log(props)
  return (
      <div className="demoPage" ref={ref}>
          <img src={`./${props.src}`}/>
      </div>
  );
});

export default function Flipbook(props) {

  useEffect(() => {
    console.log('flipbook props', props)
  }, []);

  if(props.title === 'Water Your Plants Medicinal Coloring Book'){
    return (
      <HTMLFlipBook
      // className="bg-white"
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
    )
  }
  else {
    return (<div></div>)
  }
}
