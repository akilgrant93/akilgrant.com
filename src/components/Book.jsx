import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import React, {useState, useEffect} from 'react'

function Book({pages}) {
  const [currPages, setCurrPages] = useState([0,1])

  useEffect(() => {
    let toogleElement = document.getElementById('book');
    toogleElement.scrollIntoView({
      behavior: 'smooth'
    });
  },[])

  const prev = (pages) => {
    setCurrPages([pages[0]-1,pages[1]-1])
  }

  const next = (pages) => {
    setCurrPages([pages[0]+1,pages[1]+1])
  }

  return (
    <div id='book' className=''>
      <div className='flex justify-center items-center'>
        <ArrowCircleLeftIcon
        onClick={()=> currPages[0] === 0 ? null : prev(currPages)}
        className={`w-4 mr-5 h-4 md:w-9 md:h-9 ml-1 inline-block ${currPages[0] !== 0 ? 'text-forest-green': 'text-slate-500'} -mt-1`}/>
        <img className='max-w-xs shadow-lg rounded-l-xl bg-white' src={pages[currPages[0]]}/>
        <img className='max-w-xs shadow-lg rounded-r-xl bg-white' src={pages[currPages[1]]}/>
        <ArrowCircleRightIcon
        onClick={()=> currPages[1] === pages.length-1 ? null : next(currPages)}
        // onClick={currPages[1] !== pages.length-1 ? next() : null}
        className={`w-4 mr-5 h-4 md:w-9 md:h-9 ml-1 inline-block ${currPages[1] !== pages.length-1 ? 'text-forest-green': 'text-slate-500'} -mt-1`}/>
      </div>
      <div className='flex justify-evenly pt-3'>

      </div>
    </div>
  )
}

export default Book
