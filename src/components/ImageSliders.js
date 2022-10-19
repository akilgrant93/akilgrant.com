import React, {Component} from 'react'
import './anim.css'
class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
  }



  /**
 * letteranimation.js
 * https://www.cssanimatio.io
 * Created and maintained by: Pavel
 * Find me at: https://www.linkedin.com/in/yesiamrocks/
 * Email: hello@cssanimation.io
 * Github: https://github.com/yesiamrocks/cssanimation.io
 * Title: CSS Animation Library for Developers and Ninjas
 * Copyright (c) 2017 Pavel
 * License: cssanimattion is licensed under the MIT license
 **/

animateSequence() {
  var a = document.getElementsByClassName('sequence');
  for (var i = 0; i < a.length; i++) {
      var $this = a[i];
      var letter = $this.innerHTML;
      letter = letter.trim();
      var str = '';
      var delay = 100;
      for (let l = 0; l < letter.length; l++) {
          if (letter[l] != ' ') {
              str += '<span style="animation-delay:' + delay + 'ms; -moz-animation-delay:' + delay + 'ms; -webkit-animation-delay:' + delay + 'ms; ">' + letter[l] + '</span>';
              delay += 150;
          } else
              str += letter[l];
      }
      $this.innerHTML = str;
  }
}

  componentDidMount() {
    setInterval(() => {
      if (this.state.paused === false) {
        let newSlide =
          this.state.currentSlide === this.props.slides.length - 1
            ? 0
            : this.state.currentSlide + 1;
        this.setState({ currentSlide: newSlide });
      }
    }, 3000);


    this.animateSequence();
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
        <div className="min-w-screen flex relative">
            <div className="cssanimation">
              <span className="absolute z-10 mt-[25vh] left-1/4 text-white w-1/2 top-1/3 text-center font-extrabold text-twoxl uppercase select-none cursor-pointer sequence">Akil Grant</span>
            </div>
            {this.props.slides.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block min-w-full  h-auto object-contain"
                      : "hidden"
                  }
                  onMouseEnter={() => {
                    this.setState({ paused: true });
                  }}
                  onMouseLeave={() => {
                    this.setState({ paused: false });
                  }}
                />
              );
            })}
        </div>
    );
  }
}

export default ImageSlider;

