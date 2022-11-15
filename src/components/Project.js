import React, { useState, useEffect } from 'react'
import Button from "./Button";
import Flipbook from './Flipbook'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

export default function Project(props) {
  useEffect(() => {
    console.log(props.type === 'galleryTwo')
  }, []);

  const projectHandleVisible = () => {
    props.handleVisible()
  }

  const [selected, setSelected] = useState(0)
  const numArr = [0,4,8,12]
  const numArr2 = [0,2]

  const handleClickLeft = () => {
      setSelected(selected-1)
  }

  const handleClickRight = () => {
      setSelected(selected+1)
  }
  const titlesArr = ['Night', 'Velours Rouge', 'Google Earth', 'Monogram','Showreel']
  return (
    <div>
    <div className="flex mx-40">
        {!props.gallery ?
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
        : ''}

        {props.type === 'galleryOne' ?
      <div className="flex w-1/2">

      <div className="flex flex-wrap w-full">
        {props.images.map((image, index)=>{
            return (
                <img
                  key={index}
                  onClick={props.handleClick}
                  alt = {props.alt}
                  className={
                    numArr.includes(index)
                    ? "rounded-sm mb-2 object-center object-cover w-20 h-20"
                    : "rounded-sm mb-2 object-center object-cover ml-2 w-20 h-20"
                  }
                  src={image}
                  />
            )
        })
        }
    </div>
    </div>
        : ''}

        {props.type === 'galleryTwo' ?
      <div className="flex w-1/2">

      <div className="flex flex-col w-full">
        <img
          onClick={props.handleClick}
          className="rounded-md object-center object-cover mb-2 mx-auto w-72 h-72"
          src={props.images[selected]}
          />
        <div className='flex justify-center w-full'>
        { selected > 0 ? <ArrowCircleLeftIcon  onClick={handleClickLeft} className="w-4 h-4 ml-1 inline-block text-forest-green -mt-1"/> : <ArrowCircleLeftIcon className="w-4 h-4 ml-1 inline-block text-laurel-green-100 -mt-1"/>}
        { selected < props.images.length-1 ?<ArrowCircleRightIcon onClick={handleClickRight} className="w-4 h-4 ml-1 inline-block text-forest-green -mt-1"/> : <ArrowCircleRightIcon className="w-4 h-4 ml-1 inline-block text-laurel-green-100 -mt-1"/>}
        </div>
    </div>
    </div>
        : ''}

    {props.type !== "galleryTwo"
    ? <div className="w-1/2">
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

        {props.type === 'galleryTwo' ?
            <p
            className="text-base text-left mb-5 inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{props.bulletPoints[selected]}</p>
          : ''}

        {props.type === "code"
        ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Link'} link={props.links[0]}/>
        <Button type={'Code'} link={props.links[1]}/>
        </div>
        : ''}
        {props.type === "video"
        ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Watch'} link={props.links[0]}/>
        </div>
        : ''}
        {props.type === "book"
        ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Read'}
        onClick={projectHandleVisible}
        pages={props.pages}
        title={props.name}/>
        <Button type={'Buy'} link={props.links[0]}/>
        </div>
        : ''}
    </div>
    :
    <div className="w-1/2">
      <h1 className="text-left">{props.name}</h1>

      <p className="text-md text-forest-green text-left font-semibold">{titlesArr[selected]}</p>
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

            <p
            className="text-base text-left mb-5 inline-block w-full">
            <span className="h-1 w-1 mx-1 self-center inline-block bg-forest-green rounded-full"></span>{props.bulletPoints[selected]}</p>

        {props.type === "galleryTwo"
        ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Watch'} link={props.links[0]}/>
        </div>
        : ''}
    </div>
    }

    </div>

        {props.isVisible && props.type === "book"
        ? <div className="w-8/12 mx-auto mt-10">
          {props.isVisible ? <Flipbook handleVisible={projectHandleVisible} isVisible={props.isVisible} title={props.name}/> : ''}
        </div>
        : ''}

    </div>
  )
}
