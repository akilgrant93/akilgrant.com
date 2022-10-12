import React from 'react'

export default function Project(props) {
  return (
    <div>
    <div className="flex">
    <img className="w-1/4 mr-5 rounded-md h-3/4" src={props.image}/>
    <div>
      <h1 className="text-left">{props.name}</h1>
      <div className="flex items-center ">
        {props.skills.map((skill, index) => {
          return (
            <p
            key={index}
            className="flex inline-block">
            {index > 0
            ? <span className="h-1 w-1 mx-2 self-center inline-block bg-forest-green rounded-full"></span>
            : <span></span>}{skill}</p>
          );
        })}
      </div>

      {props.bulletPoints.map((bulletpoint, index) => {
          return (
            <p
            key={index}
            className="text-left inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletpoint}</p>
          );
        })}
    </div>
    </div>
    </div>
  )
}
