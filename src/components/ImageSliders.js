import React, {Component} from 'react'

class ImageSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlide: 0,
      paused: false,
    };
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
  }

  setCurrentSlide = (index) => {
    this.setState({ currentSlide: index });
  };

  render() {
    return (
        <div className="min-w-screen flex relative">
            <div className="frame">
              <span className="absolute z-10 mt-[25vh] left-1/4 text-white w-1/2 top-1/3 text-center font-extrabold text-twoxl uppercase select-none cursor-pointer">Akil Grant</span>
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

