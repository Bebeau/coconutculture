import React from 'react';

const { Component } = React;

// Data for carousel
const slides = [
  {
    content:
      "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
    author: "Bane",
    source: "facebook"
  }, {
    content:
      "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
    author: "Ra's Al Ghul",
    source: "Snapchat"
  }, {
    content:
      "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
    author: "Joker",
    source: "facebook"
  }, {
    content:
      "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
    author: "Bruce Wayne",
    source: "facebook"
  }, {
    content:
      "But it's not who you are underneath... it's what you do that defines you.",
    author: "Rachel Dawes",
    source: "twitter"
  }, {
    content:
      "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
    author: "John Blake",
    source: "Google+"
  }, {
    content:
      "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
    author: "Alfred Pennyworth",
    source: "twitter"
  }
];

// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <button
        className="arrow prev"
        onClick={this.props.onClick}
      >
      PREV
      </button>
    );
  }
}

// Component for right arrow
class CarouselRightArrow extends Component {
  render() {
    return (
      <button
        className="arrow next"
        onClick={this.props.onClick}
      >
      NEXT
      </button>
    );
  }
}

// Component for carousel indicator
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <button
          id={"#slide-"+this.props.index}
          className={
            this.props.index === this.props.activeIndex
              ? "dot active"
              : "dot"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <li
        id={"slide-"+this.props.index}
        className={
          this.props.index === this.props.activeIndex
            ? "slide active"
            : "slide"
        }
      >
        {this.props.slide.content}
      </li>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);

    this.state = {
      activeIndex: 0,
      sliderPos: 0
    };
  }

  goToSlide(index) {
    let offset = (this.carousel.offsetWidth * index);
    this.setState({
      activeIndex: index,
      sliderPos: offset
    });
  }

  goToPrevSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slideWidth = this.carousel.offsetWidth;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    let offset = (slideWidth * index);

    this.setState({
      activeIndex: index,
      sliderPos: offset
    });
  }

  goToNextSlide(e) {
    e.preventDefault();

    let index = this.state.activeIndex;
    let slideWidth = this.carousel.offsetWidth;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    let offset = (slideWidth * index);

    this.setState({
      activeIndex: index,
      sliderPos: offset
    });
  }

  render() {

    let {
      activeIndex, 
      sliderPos
    } = this.state;

    let offset = -sliderPos + 'px';

    return (

      <div className="carousel" ref={el => (this.carousel = el)}>

        <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)} />

        <ul className="slides" style={{left : offset}}>
          {slides.map((slide, index) =>
            <CarouselSlide
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
            />
          )}
        </ul>

        <CarouselRightArrow onClick={e => this.goToNextSlide(e)} />

        <ul className="dots">
          {slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              onClick={e => this.goToSlide(index)}
            />
          )}
        </ul>

      </div>
    );
  }
}

// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);
export default Carousel;