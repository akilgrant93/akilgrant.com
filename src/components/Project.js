import React, { useState, useEffect } from 'react'
import Button from "./Button";
import Flipbook from './Flipbook'
import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid';

export default function Project(props) {

  const projectHandleVisible = () => {
    props.handleVisible()
  }

  const sliceIntoChunks = (arr, chunkSize) => {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  useEffect(() => {
    console.log(props.name)
  }, []);

  const [selected, setSelected] = useState(0)
  const numArr = [0,4,8,12]

  const img = document.querySelector("#currImg");

  const handleClickLeft = () => {
      setSelected(selected-1)
  }

  const handleClickRight = () => {
      setSelected(selected+1)
  }

  const handleColor = (name) => {
    if(name === 'Water Your Plants Medicinal Coloring Book'){
      return 'bg-new-green'
    }
    else if(name === 'Durian'){
      return 'bg-mountbatten-pink'
    }
    else if (name ==='Terra 2042'){
      return 'bg-light-salmon'
    }
  }

  return (
    <div>
    <div className={props.type === 'galleryTwo'
    ? "flex flex-col md:flex-row sm:items-start md:mx-20 lg:mx-40 "
    : 'flex flex-col md:flex-row sm:items-start md:mx-20 lg:mx-40'}>
        {!props.gallery ?
      <div className="md:mr-5 flex justify-center md:w-1/2">
        <div className={`w-3/5 ${handleColor(props.name)} md:w-full flex flex-col`}>
            <img
              className="w-full"
              src={props.images[0]}
              onClick={() => props.handleClick(props.images[0], props.images.index)}
              alt={props.alt}/>
              <div  className='h-full text-sm text-white font-semibold flex flex-col justify-center'>
              <p>Click to Expand</p>
              </div>
        </div>

      <div className="flex md:pt-0 flex-wrap w-2/5 md:flex-nowrap md:flex-col md:w-1/2">
        {props.images.map((image, index)=>{
          if(index > 0){
            return (
                <img
                  key={index}
                  onClick={props.handleClick}
                  alt = {props.alt}
                  className={
                  index === 1
                    ? "md:rounded-md object-contain md:ml-2 w-full md:w-full"
                    : "md:rounded-md object-contain w-full md:w-full md:ml-2 md:mt-2"
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
      <div className="flex flex-col md:flex-row md:w-1/2 justify-end">

      <div className="flex flex-wrap w-full lg:w-4/5">
        {props.images.map((image, index)=>{
            return (
                <img
                  key={index}
                  onClick={props.handleClick}
                  alt = {props.alt}
                  className={props.name === 'Illustration' ? "rounded-sm md:mb-2 object-center object-cover md:ml-2 w-1/4 h-48 md:w-20 md:h-20" : "rounded-sm md:mb-2 object-center object-cover md:ml-2 w-1/4 h-1/4 md:w-20 md:h-20"}
                  src={image}
                  />
            )
        })
        }
        <div className='w-200 sm:w-22 md:w-4/5 lg:w-21 md:ml-2 text-sm text-white font-semibold flex flex-col justify-center bg-new-green'>
              <p>Click to Expand</p>
              </div>
    </div>


    </div>
        : ''}

        {props.type === 'galleryTwo' ?
      <div className="flex w-2/5 flex-col">

      <div className="flex flex-col sm:flex-row justify-end">
      <div className='w-full flex flex-col items-end'>
      <img
          onClick={props.handleClick}
          className="object-center object-cover bg-new-green w-full h-full"
          src={props.images[selected]}
          />
          <div className='w-full text-sm text-white font-semibold flex flex-col justify-center bg-new-green'>
              <p>Click to Expand</p>
              </div>
        </div>

    {props.nestedImages ? <div className=' w-1/2 h-1/2 md:ml-2 justify-start lg:ml-4 mr-5'>
            {props.nestedImages[selected].length <= 3
            ? props.nestedImages[selected].map((image, index)=>{
              return (
                <img
                key={index}
                onClick={props.handleClick}
                alt = {props.alt}
                className="rounded-lg md:mb-2 object-center w-full object-cover"
                src={image}
                />
                )
              })
              :
              <div className="flex w-full">
              {sliceIntoChunks(props.nestedImages[selected], 3).map((imageArray, index) => {
                return (
                  <div key={index}
                  // className={index > 0 ? 'ml-2' : ''}
                  className='w-full'
                  >
                    {imageArray.map((image, index)=>{
                      return (
                        <img
                        key={index}
                        onClick={props.handleClick}
                        alt = {props.alt}
                        className="rounded-sm mb-2 object-center object-cover w-full h-1/2"
                        src={image}
                        />
                        )
                      })}
                  </div>
                )
              })}
              </div>
              }
          </div> : ''}
      </div>

              {/* <div className='w-full flex flex-col justify-end items-end lg:items-start'>
      <div className='w-8/12 lg:ml-2 text-sm text-white click bg-new-green'>
              <p>Click to Expand</p>
              </div>
              </div> */}
      <div className='flex w-full justify-end md:justify-center pt-2'>
      <div className='flex w-8/12 lg:w-full justify-end lg:justify-center pt-'>
        <div className='flex justify-center w-full'>
        { selected > 0 ? <ArrowCircleLeftIcon  onClick={handleClickLeft} className="w-9 h-9 ml-1 inline-block text-forest-green -mt-1"/> : <ArrowCircleLeftIcon className="w-9 h-9 ml-1 inline-block text-laurel-green-100 -mt-1"/>}
        { selected < props.images.length-1 ?<ArrowCircleRightIcon onClick={handleClickRight} className="w-9 h-9 ml-1 inline-block text-forest-green -mt-1"/> : <ArrowCircleRightIcon className="w-9 h-9 ml-1 inline-block text-laurel-green-100 -mt-1"/>}
        </div>
        </div>
        </div>
    </div>
        : ''}

    {props.type !== "galleryTwo"
    ? <div className="w-10/12 my-10 sm:my-0 mx-auto pt-2 lg:pt-0 lg:w-1/2">
      <p className="text-left text-forest-green text-base lg:text-xl font-bold ">{props.name}</p>

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
            className="text-sm md:text-base text-left mb-5 inline-block w-full">
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
    <div className="w-3/5 pl-5">
      <h1 className="text-left">{props.name}</h1>

      <p className="text-md text-forest-green text-left font-semibold">{props.titles[selected]}</p>
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

        {props.type === "galleryTwo" && props.name === "Animation"
        ? <div className="flex mt-5 justify-center items-center">
        <Button type={'Watch'} link={props.links[selected]}/>
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

          {/* {props.nestedImages ? <div className='flex pt-8 justify-center rounded-lg overflow-hidden'>
            {props.nestedImages[selected].map((image, index)=>{
            return (
                <img
                  key={index}
                  onClick={props.handleClick}
                  alt = {props.alt}
                  className="rounded-sm mb-2 object-center object-cover w-20 h-20"
                  src={image}
                  />
            )
        })}
          </div> : ''} */}
    </div>
  )
}
