import React from 'react';

import miracleHair from './assets/img/miracleHair.png';
import hempSeed from './assets/img/hemp_seed.png';
import shampoo from './assets/img/shampoo.png';
import conditioner from './assets/img/conditioner.png';
import serum from './assets/img/serum.png';

import mjPlant from './assets/img/marijuana_plant.png';
import mjPlant2 from './assets/img/marijuana_plant2.png';
import palmLeaf from './assets/img/palm_leaf.png';

import paymentIcons from './assets/img/payment-icons.png';

const { Component } = React;

// Data for carousel
const slides = [
  {
    productImg: serum,
    bgImg: palmLeaf,
    bgColor: "#fcd46a",
    productName: "Coconut Oil Hair Styling Serum",
    productPrice: "19.99",
    productDesc: "Hello World.",
    productIngredients: "",
    productSKU: "",
    productUPC: "",
    productWeight: "12oz"
  },
  {
    productImg: shampoo,
    bgImg: palmLeaf,
    bgColor: "#ff8870",
    productName: "Coconut Oil & Castor Shampoo",
    productPrice: "19.99",
    productDesc: "We use organic Jamaican Black Castor Seed Oil. Coconut oil is renowned for its nurishing and strengthening benefits. Thogether in this sulfate & paraben-free formula, these super-ingredients help repair damage while making hair stronger, shinier, and softer. Safe for Color-Treated Hair. Professional-grade formulation. Gentle enough for all hair types.",
    productDirections: "Massage into wet hair starting from the roots to the scalp. Rinse and follow with our Coconut Oil and Castor Conditioner!",
    productIngredients: "Water (Agua), Cocamidopropyl Betaine, Soduim Coccyl, etc.",
    productSKU: "",
    productUPC: "",
    productWeight: "12oz"
  },
  {
    productImg: conditioner,
    bgImg: palmLeaf,
    bgColor: "#b652db",
    productName: "Coconut Oil & Castor Conditioner",
    productPrice: "19.99",
    productDesc: "Hello World.",
    productIngredients: "",
    productSKU: "",
    productUPC: "",
    productWeight: "12oz"
  },
  {
    productImg: miracleHair,
    bgImg: mjPlant,
    bgColor: "#95d588",
    productName: "Miracle Hair Leave-In Conditioning Treatment & Detangler",
    productPrice: "14.99",
    productDesc: "Rich in essential fatty acids, Hep Seed Oil is incredible for health, look, & feel of your hair. Our Hemp Culture Miracle Hair Leave-In not only replenishes nutrients drained from hair, but also gives hair soft manageability, shine, & strength to look it's very best. If Hemp Seed Oil isn't enough, this product also features world-renowned Argan Oil & ever-popular Coconut Oil. See for yourself why these ingredients are the best in beauty.",
    productDirections: "After the shower, spray thoroughly throughout hair after towel drying. Allows easier brushing, drying without fizz, and manages fly-aways.",
    productIngredients: "Water (Aqua), Cetyl Alcohol, Cocos Nucifera (Coconut) Oil, Amodimethicone, Cetrimonium Bromide, Cyclopentasiloxane, Cetrimonium Chloride, Cannabis Sativa (Hemp) Seed Oil, Aloe Barbadensis Leaf Extract, Pyrus Malus Fruit Extract, Chamomilla Recutita Flower Extract, Rosmarinus Officinalls Leaf Extract, Vitis Vinitera Seed Extract, Foeniculum Vulgare Fruit Extract, Calendula Officinalis Flower Extract, Citrus Aurantium Dulcis Fruit Extract, Trideceth-12, Glycerin, Panthenol, Citric Acid, Phenoxyethanol, Ethyhexylglycerin, Fragrance (Parfum)",
    productSKU: "HCMHL12",
    productUPC: "814487024448",
    productWeight: "12oz"
  },
  {
    productImg: hempSeed,
    bgImg: mjPlant2,
    bgColor: "#5cc7ff",
    productName: "Hemp 10 in 1 Hair Treatment",
    productPrice: "14.99",
    productDesc: "This product's 10 amazing benefits for hair include: Moisturize, Hydrate, Provide frizz control, prevent split ends, strengthen hair, detangle, protect against breakage, enhance shine, smooth the cuticle, perfect leave-in treatment!",
    productDirections: "Spray onto towl-dried hair and brush through. Style as usual.",
    productIngredients: "Water (Agua), Cetyl Alcohol, Cocos Nucifera (Coconut) Oil, modimethicone, Cetrimonium Bromide, Cyclopentasiloxane, Cetrimonium Chloride, Cannabis Sativa (Hemp) Seed Oil, Aloe Barbadensis Leaf Extract, Pyrus Malus Fruit Extract, Chamomilla Recutia Flower Extract, Chamomilla Recutita Flower Extract, Citrus Limon Fruit Extract, Rosmarinus Officinalis Leaf Extract, Vitis Vinifera Seed Extract, Foeniculum Vulgare Fruit Extract, Calendula Officinalis Flower Extract, Citrus Aurantium Dulcis Fruit Extract, Trideceth-12, Glycerin, Panthenol, Citric Acid, Phenoxyethanol, Ethylhexylglycerin, Fragrance (Parfum)",
    productSKU: "HSHT12",
    productUPC: "814487025070",
    productWeight: "12oz"
  },
];

// Component for left arrow
class CarouselLeftArrow extends Component {
  render() {
    return (
      <button
        className="arrow prev"
        onClick={this.props.onClick}
      />
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
      />
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
        >
          <img src={this.props.slide.productImg} alt={this.props.slide.productName} />
        </button>
      </li>
    );
  }
}

// Component for slide
class CarouselSlide extends Component {
  render() {
    return (
      <div
        id={"slide-"+this.props.index}
        className={`
          slide 
          ${
            this.props.index === this.props.activeIndex
            ? "active"
            : ""
          }
        `}
        style={{backgroundColor: this.props.slide.bgColor}}
      >
        <div 
          className={`
            productImage
            ${
              this.props.show === true
              ? "show"
              : ""
            }
          `}
        >
          <img className="bottle" src={this.props.slide.productImg} alt="" />
          <img className="accent" src={this.props.slide.bgImg} alt="" />
        </div>
        <div className="productInfo">
          <section className="primary">
            <h3 className="productTitle">
              {this.props.slide.productName}
              <span className="price">
                <span className="sign">$</span>
                {this.props.slide.productPrice}
              </span>
            </h3>
            <button
              style={{color: this.props.slide.bgColor}}
            >
              Buy Now
            </button>
            <img className="paymentIcons" src={paymentIcons} alt="payment icons" />
          </section>
          <section className="description">
            <p>{this.props.slide.productDesc}</p>
          </section>
          <section className="secondary">
            <h4>Directions</h4>
            <p>{this.props.slide.productDirections}</p>
            <h4>Ingredients</h4>
            <p className="ingredients">{this.props.slide.productIngredients}</p>
          </section>
        </div>

        <div className="CTA">
          <section className="productImage show">
            <img className="bottle" src={this.props.slide.productImg} alt="" />
            <img className="accent" src={this.props.slide.bgImg} alt="" />
          </section>
          <section className="primary">
            <h3 className="productTitle">
              {this.props.slide.productName}
              <span className="price">
                <span className="sign">$</span>
                {this.props.slide.productPrice}
              </span>
            </h3>
            <button
              style={{color: this.props.slide.bgColor}}
            >
              Buy Now
            </button>
            <img className="paymentIcons" src={paymentIcons} alt="payment icons" />
          </section>
        </div>

      </div>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.state = {
      activeIndex: 0,
      sliderPos: 0,
      show: false,
      scrolling: false
    };
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 500);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let slideHeight = document.getElementById('slide-0').clientHeight+"px";
    this.setState({
      slideHeight: slideHeight
    });
  }

  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
    if (window.scrollY < 200 && this.state.scrolling === true) {
        this.setState({scrolling: false});
    }
    if (window.scrollY > 200 && this.state.scrolling !== true) {
        this.setState({scrolling: true});
    }
  }

  goToSlide(e, index) {
    e.preventDefault();
    // remove delay animation on outro
    this.setState({
      show: false
    });

    // if previous button
    if(e.target.classList.contains("prev")) {
      let index = this.state.activeIndex;
      // get width/height
      let slideWidth = this.carousel.offsetWidth;
      let slidesLength = slides.length;
      if (index < 1) {
        index = slidesLength;
      }

      --index;

      let slideHeight = document.getElementById('slide-'+index).clientHeight+"px";
      let offset = (slideWidth * index);

      this.setState({
        activeIndex: index,
        sliderPos: offset,
        slideHeight: slideHeight
      });
    }
    // if next button
    if(e.target.classList.contains("next")) {
      // get width/height
      let slideWidth = this.carousel.offsetWidth;
      let slidesLength = slides.length;
      if (index === --slidesLength) {
        index = -1;
      }

      ++index;

      let slideHeight = document.getElementById('slide-'+index).clientHeight+"px";
      let offset = (slideWidth * index);

      this.setState({
        activeIndex: index,
        sliderPos: offset,
        slideHeight: slideHeight
      });
    }
    // if dots nav
    if(
      !e.target.classList.contains("prev") &&
      !e.target.classList.contains("next")
      ) {
      let slideHeight = document.getElementById('slide-'+index).clientHeight+"px";
      let offset = (this.carousel.offsetWidth * index);
      window.scrollTo({top: 0, behavior: 'smooth'});
      this.setState({
        activeIndex: index,
        sliderPos: offset,
        slideHeight: slideHeight
      });
    }
    // add delay animation
    setTimeout(() => {
      this.setState({
        show: true
      });
    }, 500);

  }

  render() {

    let {
      activeIndex, 
      sliderPos,
      slideHeight,
      show,
      bgColor,
      scrolling
    } = this.state;

    let offset = -sliderPos + 'px';

    return (

      <div id="productWrap">

        <CarouselLeftArrow 
          onClick={e => this.goToSlide(e, activeIndex)} 
        />
        <CarouselRightArrow 
          onClick={e => this.goToSlide(e, activeIndex)} 
        />
        
        <ul 
          className={`
            thumbs
            ${
              scrolling === true
              ? "in"
              : ""
            }
          `}
        >
          {slides.map((slide, index) =>
            <CarouselIndicator
              key={index}
              index={index}
              activeIndex={activeIndex}
              slide={slide}
              onClick={e => this.goToSlide(e, index)}
            />
          )}
        </ul>

        <div 
          className="carousel" 
          ref={el => (this.carousel = el)}
          style={{maxHeight : slideHeight}}
        >

          <section className="slides" style={{left : offset}}>
            {slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={activeIndex}
                slide={slide}
                show={show}
              />
            )}
          </section>

        </div>

      </div>
    );
  }
}

// Render Carousel component
// render(<Carousel slides={carouselSlidesData} />, carouselContainer);
export default Carousel;