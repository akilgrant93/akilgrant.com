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

animateSequence() {
  let a = document.getElementsByClassName('sequence');
  for (let i = 0; i < a.length; i++) {
      let $this = a[i];
      let letter = $this.innerHTML;
      letter = letter.trim();
      let str = '';
      let delay = 100;
      for (let l = 0; l < letter.length; l++) {
          if (letter[l] !== ' ') {
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
        <div className="min-w-screen -ml-1/2 flex relative pt-16 lg:pt-20">
            <div className="cssanimation">
              <span className="absolute z-10 mt-[23vh] left-1/4 text-white w-1/2 top-1/2 md:top-1/3 text-center font-extrabold text-halfxl lg:text-twoxl uppercase select-none cursor-pointer sequence">Akil Grant</span>
            </div>
            <div className="">
            {this.props.slides.map((slide, index) => {
              return (
                <img
                  src={slide.image}
                  alt="This is a carousel slide"
                  key={index}
                  className={
                    index === this.state.currentSlide
                      ? "block min-w-full  h-auto object-right"
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
        </div>
    );
  }
}

export default ImageSlider;

