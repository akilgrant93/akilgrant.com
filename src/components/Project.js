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
            className="text-sm text-left mb-5 inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletpoint}</p>
          );
        })}
        <div className="flex mt-5 justify-center items-center">
        <button className="button-style mr-5" >Live</button>

        <button className="button-style" >Code</button>
        </div>
    </div>

    </div>

    </div>
  )
}
