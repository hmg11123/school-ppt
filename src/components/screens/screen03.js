import React from "react";
import { Route } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import slick__box01 from "./screen03/slick__box01";
import slick__box02 from "./screen03/slick__box02";
import slick__box03 from "./screen03/slick__box03";
import slick__box04 from "./screen03/slick__box04";
import slick__box05 from "./screen03/slick__box05";

class screen03 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div className="screen03">
        <div className="MainSlider">
          <Slider {...settings}>
            <Route exact component={slick__box01} />
            <Route exact component={slick__box02} />
            <Route exact component={slick__box03} />
            <Route exact component={slick__box04} />
            <Route exact component={slick__box05} />
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen03;
