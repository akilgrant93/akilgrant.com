import React, {useEffect} from "react";
import './modal.css'

export default function Modal(props){

  return (
      <div className="overlay" onClick={props.handleClick}>
        {typeof props.clickedImg === "string" ?
        <img src={props.clickedImg}id='modalImg' alt="bigger pic" /> : ''}
            </div>
  );
};
