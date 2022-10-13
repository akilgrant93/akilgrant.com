import React, {useEffect} from 'react'

export default function Project(props) {

  // useEffect(() => {
	// 	console.log(props.thumbs)
  // }, []);

  return (
    <div>

    <div className="flex">
      <div className="mr-10 flex w-1/2">
        {props.image
    ? <div className="flex w-full">
    <img className="object-cover rounded-md  max-h-80" src={props.image}/>
    </div>
    : ''}
    <div className="flex flex-col w-1/3">
        {props.thumbs
          ? props.thumbs.map((image, index)=>{
      return (<img
        className={
          index > 0
            ? "rounded-md ml-2 mt-2"
            : "rounded-md ml-2"
        }
        key={index}
        src={props.thumbs[index]}/>)
    })
    : <div/>
    }
    </div>
    </div>

    <div className="w-1/2">
      <h1 className="text-left">{props.name}</h1>

      <div className="flex my-2 mb-7 items-center ">
        {props.skills.map((skill, index) => {
          return (
            <p
            key={index}
            className="flex inline-block">
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
            className="text-left mb-2 inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{bulletpoint}</p>
          );
        })}
    </div>

    </div>

    </div>
  )
}
