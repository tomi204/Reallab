import React from "react";
import SliderJson from "./SliderJson";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "./slider.css";

const SlideCard = () => {
  //slider settings
  const settings = {
    arrows: false,
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  //slider component
  return (
    <>
      <Slider {...settings}>
        {SliderJson.map((value, index) => {
          return (
            <div className="box" key={index}>
              <img src={value.cover} alt="slider" className="img-home" />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default SlideCard;
