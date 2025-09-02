import React from 'react';
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

const plantImages = [
  {
    url: '/IMG_8293.JPG',
  },
  {
    url: '/IMG_8453.JPG',
  },
  {
    url: '/Resized_20241011_161855_1728678504736.JPEG',
  },
  {
    url: '/Resized_20241009_124218_1728501072656.JPEG',
  },
  {
    url: '/Resized_20241014_140111_1728929170452.JPG',
  },
  {
    url: '/Resized_20250616_112721.JPG',
  },
  {
    url: '/Resized_20250319_144132_1742499037021.JPG',
  },
  {
    url: '/Resized_20241016_144008_1729106010403.JPG',
  },
  {
    url: '/Resized_20240925_174745_1727300998854.JPG',
  },
];

const animations = [
    {
      url: '/static/illustration_md.gif',
    },
    {
      url: '/static/motiongraphics_md.gif',
    },
    {
      url: '/static/artDirection_md.gif',
    },
    {
      url: '/static/userExperience_md.gif',
    },
  ];

export const Slideshow = ({
    id,
  }: {
    id: number;
  }) => {
  return (
    <div className={`slide-container opacity-75 absolute ${id === 2 && `-top-10 w-md -ml-10 md:-ml-14`} ${id === 1 && `w-5/10 right-0 h-full mx-auto self-center lg:absolute lg:my-auto justify-center opacity-25 lg:right-auto lg:top-2 lg:w-8/10`}`}>
      {id === 2 
      ? <Fade arrows={false}>
        {plantImages.map((plantImage, index) => (
          <div key={index}>
            <img style={{ width: '100%' }} src={plantImage.url} />
          </div>
        ))}
      </Fade> 
      : <Fade arrows={false}>
      {animations.map((animation, index) => (
        <div key={index}>
          <img style={{ width: '100%' }} src={animation.url} />
        </div>
      ))}
    </Fade> 
      }
    </div>
  )
}