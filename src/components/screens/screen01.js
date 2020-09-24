import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image01 from "../image/image.png";

class screen01 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 6000,
    };
    return (
      <div className="screen01">
        <div className="MainSlider">
          <Slider {...settings}>
            <div className="slick__box">
              <div className="screen01_circle"></div>
              <ul>
                <li>빅데이터 이용사례</li>
                <li></li>
                <li>여가분야</li>
              </ul>
            </div>
            <div className="slick__box">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="slick__box">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="slick__box">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="slick__box">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen01;
