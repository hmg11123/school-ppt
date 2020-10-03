import React from "react";
import { Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slick__box01 from "./screen01/slick__box01";
import slick__box02 from "./screen01/slick__box02";
import slick__box03 from "./screen01/slick__box03";
import slick__box04 from "./screen01/slick__box04";
import slick__box05 from "./screen01/slick__box05";
import slick__box06 from "./screen01/slick__box06";
import slick__box07 from "./screen01/slick__box07";

class screen01 extends React.Component {
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
      <div className="screen01">
        <div className="MainSlider">
          <Slider {...settings}>
            <Route component={slick__box01} />
            <Route component={slick__box02} />
            <Route component={slick__box03} />
            <Route component={slick__box04} />
            <Route component={slick__box05} />
            <Route component={slick__box06} />
            <Route component={slick__box07} />
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen01;
