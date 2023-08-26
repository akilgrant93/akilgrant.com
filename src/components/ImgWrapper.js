import React from 'react'
import "./imgWrapper.css"
export default function ImgWrapper(props) {
  return (
      <div onClick={() => props.onClick(props.imgSrc)} className={`container`}>
  <img src={props.imgSrc} alt="Avatar" className={'image'} />
  <div className='overlay'>
    <div className="text">Click to expand</div>
  </div>
</div>
  )
}

