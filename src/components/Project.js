import React, { useState } from 'react'
import './button.css'

export default function Project(props) {
  return (
    <div>

    <div className="flex mx-40">
      <div className="mr-5 flex w-1/2">

        <div >
            <img
              className="rounded-md w-[14rem] h-auto"
              src={props.images[0]}
              onClick={() => props.handleClick(props.images[0], props.images.index)}
              alt={props.alt}/>
        </div>

      <div className="flex flex-col w-full">
        {props.images.map((image, index)=>{
          if(index > 0){
            return (
                <img
                  key={index}
                  onClick={props.handleClick}
                  alt = {props.alt}
                  className={
                  index === 1
                    ? "rounded-md ml-2"
                    : "rounded-md ml-2 mt-2"
                  }
                  src={image}/>
            )
          } else {
            return ''
          }
        })
        }
    </div>
    </div>

    <div className="w-1/2">
      <h1 className="text-left">{props.name}</h1>

      <div className="flex my-2 mb-3 items-center ">
        {props.skills.map((skill, index) => {
          return (
            <p
            key={index}
            className="flex text-sm font-semibold inline-block">
            {index > 0
            ? <span className="h-1 w-1 mx-2 self-center inline-block bg-forest-green rounded-full"></span>
            : ''}{skill}</p>
          );
        })}
      </div>

      {props.bulletPoints.map((bulletpoint, index) => {
          return (
            <p
            key={index}
            className="text-base text-left mb-5 inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletpoint}</p>
          );
        })}
        <div className="flex mt-5 justify-center items-center">
        <button className="button-style mr-5" >
          {/* I will need to add a conditional statement here for non-code entries, maybe higher in the heirarchy */}
          Live
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 inline-block h-6 ml-1 -mt-1">
  <path fillRule="evenodd" d="M15.75 2.25H21a.75.75 0 01.75.75v5.25a.75.75 0 01-1.5 0V4.81L8.03 17.03a.75.75 0 01-1.06-1.06L19.19 3.75h-3.44a.75.75 0 010-1.5zm-10.5 4.5a1.5 1.5 0 00-1.5 1.5v10.5a1.5 1.5 0 001.5 1.5h10.5a1.5 1.5 0 001.5-1.5V10.5a.75.75 0 011.5 0v8.25a3 3 0 01-3 3H5.25a3 3 0 01-3-3V8.25a3 3 0 013-3h8.25a.75.75 0 010 1.5H5.25z" clipRule="evenodd" />
</svg>
        </button>

        <button className="button-style" >
          {/* Similar conditional needed here */}
          Code
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6 inline-block ml-1 -mt-1" id="Layer_1" data-name="Layer 1" viewBox="0 0 32.58 31.77"><defs></defs><title>GitHub-Mark</title><path fillRule="evenodd" d="M152.61,107.44a16.29,16.29,0,0,0-5.15,31.75c.81.15,1.11-.36,1.11-.79s0-1.41,0-2.77c-4.53,1-5.49-2.18-5.49-2.18a4.36,4.36,0,0,0-1.81-2.39c-1.47-1,.12-1,.12-1a3.43,3.43,0,0,1,2.49,1.68,3.48,3.48,0,0,0,4.74,1.36,3.46,3.46,0,0,1,1-2.18c-3.62-.41-7.42-1.81-7.42-8.05a6.3,6.3,0,0,1,1.67-4.37,5.93,5.93,0,0,1,.16-4.31s1.37-.44,4.48,1.67a15.41,15.41,0,0,1,8.16,0c3.11-2.11,4.47-1.67,4.47-1.67a5.9,5.9,0,0,1,.17,4.31,6.3,6.3,0,0,1,1.67,4.37c0,6.26-3.81,7.63-7.44,8a3.85,3.85,0,0,1,1.11,3c0,2.18,0,3.94,0,4.47s.29.94,1.12.79a16.3,16.3,0,0,0-5.16-31.75Z" transform="translate(-136.32 -107.44)"/></svg>
        </button>
        </div>
    </div>

    </div>

    </div>
  )
}
