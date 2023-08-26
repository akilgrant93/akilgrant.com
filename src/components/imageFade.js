import React, {useState, useEffect} from "react";

function imageFade(number) {
  const [time, setTime] = useState(new Date());
	const [imgSrc, setImgSrc] = useState();

  useEffect(() => {
		const interval = setInterval(() => {
      setTime(new Date());
    }, 3000);
    return () => clearInterval(interval)
  }, []);

  return (
    <img alt="" src={imgSrc}/>
  )
}

export default imageFade
