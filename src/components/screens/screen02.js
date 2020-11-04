import React from "react";
import { Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slick__box2_01 from "./screen02/slick__box2_01";
import slick__box2_02 from "./screen02/slick__box2_02";
import slick__box2_03 from "./screen02/slick__box2_03";
import slick__box2_04 from "./screen02/slick__box2_04";
import slick__box2_04_2 from "./screen02/slick__box2_04_2";
import slick__box2_05 from "./screen02/slick__box2_05";
import slick__box2_05_2 from "./screen02/slick__box2_05_2";

class screen02 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
    };
    return (
      <div className="screen02">
        <div className="MainSlider">
          <Slider {...settings}>
            <Route component={slick__box2_01} />
            <Route component={slick__box2_02} />
            <Route component={slick__box2_03} />
            <Route component={slick__box2_04} />
            <Route component={slick__box2_04_2} />
            <Route component={slick__box2_05} />
            <Route component={slick__box2_05_2} />
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen02;
