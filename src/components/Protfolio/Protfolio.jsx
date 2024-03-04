import React, { useEffect } from "react";
import Slider from "react-slick";
//  import css für react slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//  import img
import travelBerlin from "../../assets/Travel-img/TravelB.png";
import restaurantNara from "../../assets/Travel-img/Restaurant.png";
import shopping from "../../assets/Travel-img/shopping.png";
import imadPortfolio from "../../assets/Imad-Imgags/Imad.png";
//  import react icons
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";

// import aos  dem aos
import Aos from "aos";
import "aos/dist/aos.css";

//
const Protfolio = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <FaArrowRight />,
    prevArrow: <FaArrowLeft />,
  };
  return (
    <div className="portfolio" id="Protfolio">
      {/* heading */}
      <div className="headingPor" data-aos="fade-left">
        <span className="head-title">Recent Project</span>
        <span className="main-title">Portfolio</span>
      </div>
      {/* slider */}
      <div className="slider-container" data-aos="fade-right">
        <Slider {...settings}>
          <div className="card">
            <img src={travelBerlin} alt="" />
            <h3> Travel Berlin</h3>
          </div>
          <div className="card">
            <img src={restaurantNara} alt="" />
            <h3>Restaurant Nara</h3>
          </div>
          <div className="card">
            <img src={shopping} alt="" />
            <h3> Shopping Center</h3>
          </div>
          <div className="card">
            <img src={imadPortfolio} alt="" />
            <h3>Portfolio</h3>
          </div>
          {/* <div className="card">
            <img src="" alt="" />
            <div className="card-body"></div>
          </div>
          <div className="card">
            <img src="" alt="" />
            <div className="card-body"></div>
          </div> */}
        </Slider>
      </div>
    </div>
  );
};

export default Protfolio;
