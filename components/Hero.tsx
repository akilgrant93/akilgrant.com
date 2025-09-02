import React from 'react'
import { cn } from "@/lib/utils"
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect'
import LitUpBorders from './ui/LitUpBorders'
import { FaLeaf } from 'react-icons/fa6'

const Hero = () => {
  return (
    <div>
        <div>
            <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
            <Spotlight className='top-10 tleft-full h-[80vh] w-[50vw]' fill='purple' />
            <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
        </div>
        <div className="relative flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0 opacity-50 mb-50",
          "[background-size:100px_100px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
          "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black" />

      <div className='z-10 flex justify-center relative my-20'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center '>
            <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Design and Horticulture</h2>
            <TextGenerateEffect 
                className='text-center text-40px md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mt-4 leading-snug'
                words='Making ideas come to life, figuratively and literally.'
            />
            <p className='text-center mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I'm Akil, a designer, developer, and farmer based in the USA.</p>
            <a href='#about' className='w-full flex justify-center'>
                <LitUpBorders 
                    title='My work' 
                    icon={<FaLeaf />} 
                    position='right' 
                    // otherClasses='mt-4'
                />
            </a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Hero 