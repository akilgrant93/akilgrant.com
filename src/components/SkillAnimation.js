import React from 'react'
import Lottie from "lottie-react";

export default function SkillAnimation(props) {
  return (
    <div className="max-w-2xl" >
					<p className="skillsAnim text-sm font-semibold relative text-center mx-auto">{props.skillDesc}</p>
					<Lottie loop={false} animationData={props.lottie} />
					</div>
  )
}
