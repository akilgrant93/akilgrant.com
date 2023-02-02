import React from 'react'
import "./imgWrapper.css"
export default function ImgWrapper(props) {
  return (
      <div onClick={() => props.onClick(props.imgSrc, props.index)} className={`${props.style === undefined ? 'container' : 'container2'}${props.index > 1 ? ' md:mt-2':''} shadow-md`}>
  <img src={props.imgSrc} alt="Avatar" className={props.style === undefined ? "image" : "image2"} />
  <div className='overlay2'>
    <div className="text">Click to expand</div>
  </div>
</div>
  )
}

