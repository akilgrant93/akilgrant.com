import React, {useRef} from 'react'
import './button.css'

export default function Project(props) {

  function handleClick(e) {
}

  return (
    <div>

    <div className="flex mx-40">
      <div className="mr-5 flex w-1/2">

        <div >
          <button onClick={handleClick}>
            <img
              className="rounded-md w-[14rem] h-auto"
              src={props.images[0]}
              alt={props.alt}/>
          </button>
        </div>

      <div className="flex flex-col w-full">
        {props.images.map((image, index)=>{
          if(index > 0){
            return (
              <button key={index} onClick={handleClick}>
                <img
                  className={
                  index === 1
                    ? "rounded-md ml-2 mt-2"
                    : "rounded-md ml-2"
                  }
                  src={image}/>
              </button>
            )
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
        <button className="button-style mr-5" role="button">Live</button>

        <button className="button-style" role="button">Code</button>
        </div>
    </div>

    </div>

    </div>
  )
}
