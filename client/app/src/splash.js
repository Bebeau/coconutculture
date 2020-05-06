import React from 'react';
import { loadStripe } from '@stripe/stripe-js';

import fb from 'react-facebook-pixel';
import ga from 'react-ga';

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
const stripePromise = loadStripe('pk_test_z71vjawPk4YOho7VyODQDaJw00QpTws1iB');

const advancedMatching = {};
const options = {
    autoConfig: true,
    debug: false,
};
fb.init('1898888150241641', advancedMatching, options);
fb.pageView();

ga.initialize('UA-44007005-16');
ga.plugin.require('ecommerce');
ga.pageview(window.location.pathname + window.location.search);

// Data for carousel
const slides = [
  {
    productImg: serum,
    bgImg: palmLeaf,
    bgColor: "#fcd46a",
    productName: "Coconut Oil Hair Styling Serum",
    productPrice: "19.99",
    productDesc: "This concetrated, lightweight formula provides instant shine and manageability to any hair type. With nutrient-rich coconut oil & bonanical extracts, your hair will feel & look healthier than ever before. Alcohol-free!",
    productDirections: "Apply to clean, damp hair after a shower. Style as usual with heat tool or stand alone.",
    productIngredients: "Cyclopentasiloxane, Dimethiconol, Phenyl Trimethicone, Cocos Nucifera (Coconut) Oil, Cannabis Sativa (Hemp) Seed Oil, Parfum/Fragrance, Linalool, Cheryl Cinnamal, Citral, Benzyl Benzoate, Geraniol, Limonene",
    productSKU: "",
    stripeSKU: "",
    productUPC: "814487025391",
    productWeight: "4oz"
  },
  {
    productImg: shampoo,
    bgImg: palmLeaf,
    bgColor: "#ff8870",
    productName: "Coconut Oil & Castor Shampoo",
    productPrice: "19.99",
    productDesc: "We use organic Jamaican Black Castor Seed Oil. Coconut oil is renowned for its nurishing and strengthening benefits. Thogether in this sulfate & paraben-free formula, these super-ingredients help repair damage while making hair stronger, shinier, and softer. Safe for Color-Treated Hair. Professional-grade formulation. Gentle enough for all hair types.",
    productDirections: "Massage into wet hair starting from the roots to the scalp. Rinse and follow with our Coconut Oil and Castor Conditioner!",
    productIngredients: "Water (Agua), Cocamidopropyl Betaine, Sodium Cocoyl Isethionate, Glycerin, Polyquaternium-7, Ricinus Communis (Jamaican Black Castor) Seed Oil, Tocopherol, (Vitamin E), Biotin, Cannabis Sativa (Hemp) Seed Oil, Guar Hydroxypropyltrimonium Chloride, Hydrolyzed Keratin, Argania Spinosa (Argan) Kernel Oil, Cocos Nucifera (Coconut) Oil, PEG 150 Distearate, Panthenol, Citric Acid, Ethylhexylglycerin, Phenoxyethanol, Fragrance (Parfum)",
    productSKU: "CCS025",
    stripeSKU: "",
    productUPC: "814487024486",
    productWeight: "12oz"
  },
  {
    productImg: conditioner,
    bgImg: palmLeaf,
    bgColor: "#b652db",
    productName: "Coconut Oil & Castor Conditioner",
    productPrice: "19.99",
    productDesc: "We use organic Jamaican Black Castor Seed Oil. Coconut oil is renowned for its nurishing and strengthening benefits. Thogether in this sulfate & paraben-free formula, these super-ingredients help repair damage while making hair stronger, shinier, and softer. Safe for Color-Treated Hair. Professional-grade formulation. Gentle enough for all hair types.",
    productDirections: "Massage into wet hair starting from the roots to the scalp and rinse.",
    productIngredients: "Water (Aqua), Stearyl Alcohol, Stearalkonium Chloride, Cetyl Alcohol, Ricinus Communis (Jamaican Black Castor) Seed Oil, Cetrimonium Chloride, Butyrospermum Parkii (Shea Butter), Argania Spinosa (Argan) Kernel Oil, Cocos Nucifera (Coconut) Oil, Cannabis Sativa (Hemp) Seed Oil, Hydrolyzed Keratin, Tocopherol (Vitamin E) Biotin, Citric Acid, Ethylhexylglycerin, Phenoxyethanol, Fragrance (Parfum)",
    productSKU: "CCS025",
    stripeSKU: "",
    productUPC: "814487024493",
    productWeight: "12oz"
  },
  {
    productImg: miracleHair,
    bgImg: mjPlant,
    bgColor: "#95d588",
    productName: "Miracle Hair Leave-In Conditioning Treatment & Detangler",
    productPrice: "14.99",
    productDesc: "Rich in essential fatty acids, Hep Seed Oil is incredible for health, look, & feel of your hair. Our Hemp Culture Miracle Hair Leave-In not only replenishes nutrients drained from hair, but also gives hair soft manageability, shine, & strength to look it's very best. If Hemp Seed Oil isn't enough, this product also features world-renowned Argan Oil & ever-popular Coconut Oil. See for yourself why these ingredients are the best in beauty. This product is sulfate-free and safe for color-treated hair.",
    productDirections: "After the shower, spray thoroughly throughout hair after towel drying. Allows easier brushing, drying without fizz, and manages fly-aways.",
    productIngredients: "Water (Aqua), Cetyl Alcohol, Cocos Nucifera (Coconut) Oil, Amodimethicone, Cetrimonium Bromide, Cyclopentasiloxane, Cetrimonium Chloride, Cannabis Sativa (Hemp) Seed Oil, Aloe Barbadensis Leaf Extract, Pyrus Malus Fruit Extract, Chamomilla Recutita Flower Extract, Rosmarinus Officinalls Leaf Extract, Vitis Vinitera Seed Extract, Foeniculum Vulgare Fruit Extract, Calendula Officinalis Flower Extract, Citrus Aurantium Dulcis Fruit Extract, Trideceth-12, Glycerin, Panthenol, Citric Acid, Phenoxyethanol, Ethyhexylglycerin, Fragrance (Parfum)",
    productSKU: "HCMHL12",
    stripeSKU: "",
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
    stripeSKU: "",
    productUPC: "814487025070",
    productWeight: "12oz"
  },
];

const cart = [];

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
      <article>
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
      </article>
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
            <div className="order">
              <input type="number" min="1" name="qty" value={this.props.qty} onChange={this.props.onQtyChange} placeholder="qty" />
              <button
                style={{color: this.props.slide.bgColor}}
                onClick={this.props.addProduct}
              >
                Add To Cart
              </button>
            </div>
            <img className="paymentIcons" src={paymentIcons} alt="payment icons" />
          </section>
          <section className="description">
            <p>{this.props.slide.productDesc}</p>
          </section>
          <section className="secondary">
            <h4>Directions</h4>
            <p>{this.props.slide.productDirections}</p>
            <h4>Disclaimer</h4>
            <p>We never use...parabens to preserve, harmful phthalate fragrance, ingredients tested on animals, or chemicals harmful to environment & skin.</p>
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
            <div className="order">
              <input type="number" min="1" name="qty" value={this.props.qty} onChange={this.props.onQtyChange} placeholder="qty" />
              <button
                style={{color: this.props.slide.bgColor}}
                onClick={this.props.addProduct}
              >
                Add To Cart
              </button>
            </div>
            <img className="paymentIcons" src={paymentIcons} alt="payment icons" />
          </section>
        </div>

      </div>
    );
  }
}
// Component for carousel indicator
class CartModal extends Component {
  render() {
    let price = ((this.props.product.amount / 100) * (this.props.product.quantity)).toFixed(2);
    return (
      <section className="singleProduct">
        <div className="productImage">
          <img src={this.props.product.images[0]} alt={this.props.product.name} />
        </div>
        <h4>{this.props.product.name}</h4>
        <div className="quantity"><span>x</span> {this.props.product.quantity}</div>
        <div className="price"><span>$</span>{price}</div>
        <button className="remove" onClick={this.props.removeProduct}></button>
      </section>
    );
  }
}

// Carousel component
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.handleScroll = this.handleScroll.bind(this);

    this.checkout = this.checkout.bind(this);
    this.fetchCheckoutSession = this.fetchCheckoutSession.bind(this);
    this.hideCart = this.hideCart.bind(this);

    this.state = {
      activeIndex: 0,
      sliderPos: 0,
      show: false,
      scrolling: false,
      qty: 1,
      showCart: false
    };
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);

    let slideHeight = document.getElementById('slide-0').clientHeight+"px";
    setTimeout(() => {
      this.setState({
        slideHeight: slideHeight,
        show: true
      });
    }, 500);
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

  updateQty(e, unitPrice) {
    let qty = Number(e.target.value);
    // let subtotal = (qty * unitPrice) * 100;
    this.setState({
      qty: qty
      // cost: cost
    });
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
        show: true,
        qty: "1"
      });
    }, 500);

  }

  addToCart(e, index, qty) {
    let product = slides[index];

    if( cart.some(row => row.name.includes(product.productName)) ) {
      let itemIndex = cart.findIndex(item => item.name === product.productName);
      let newQty = (Number(cart[itemIndex].quantity) + Number(qty));
      let newItem = {
          ...cart[itemIndex],
          quantity: newQty
      }
      cart.splice(itemIndex, 1, newItem);
    } else {
      let price = (product.productPrice * 100).toFixed();
      let purchase = {
        name: product.productName,
        images: [product.productImg],
        quantity: qty,
        currency: 'usd',
        amount: price
      }
      cart.push(purchase);
    }
    this.setState({ 
      cart: cart,
      showCart: true
    });
  }

  hideCart() {
    this.setState({
      showCart: false
    });
  }

  removeFromCart(index) {
    if (index > -1) {
      cart.splice(index, 1);
    }
    this.setState({ 
      cart: cart
    });
    if(cart.length === 0) {
      this.setState({ 
        showCart: false
      });
    }
  }

  async checkout(event) {
    // Call your backend to create the Checkout session.
    const { sessionId } = await this.fetchCheckoutSession();
    // When the customer clicks on the button, redirect them to Checkout.
    const stripe = await stripePromise;
    const { error } = await stripe.redirectToCheckout({
      sessionId,
    });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
  }

  async fetchCheckoutSession() {
    let cart = this.state.cart;
    return fetch('/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cart,
      }),
    }).then((res) => res.json());
  };

  render() {

    let {
      activeIndex, 
      sliderPos,
      slideHeight,
      show,
      scrolling,
      qty,
      showCart
    } = this.state;

    let offset = -sliderPos + 'px';

    return (

      <div id="productWrap">

        <div id="cartModal"
          className={
              showCart === true
              ? "show"
              : ""
            }
        >
          <div id="cart">
            {cart.map((product, index) =>
              <CartModal
                key={index}
                index={index}
                product={product}
                removeProduct={e => this.removeFromCart(index)}
              />
            )}
            <div className="modalFooter">
              <button className="btn-keepShopping" onClick={this.hideCart}>Keep Shopping</button>
              <button className="btn-checkout" onClick={this.checkout}>Checkout</button>
            </div>
          </div>
        </div>

        <CarouselLeftArrow 
          onClick={e => this.goToSlide(e, activeIndex)} 
        />
        <CarouselRightArrow 
          onClick={e => this.goToSlide(e, activeIndex)} 
        />
        
        <div
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
        </div>

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
                qty={qty}
                onQtyChange={e => this.updateQty(e)}
                addProduct={e => this.addToCart(e, index, qty)}
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