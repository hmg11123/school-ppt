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
            <div className="slick__box01 slick__box">
              <div className="screen01_circle"></div>
              <ul>
                <li>빅데이터 이용사례</li>
                <li></li>
                <li>여가분야</li>
              </ul>
            </div>
            <div className="slick__box02 slick__box">
              <img src={image01} />
              <ul>
                <li className="slick_title">정의</li>
                <li>디지털 환경에서 생성되는</li>
                <li>데이터로 그 규모가 방대하고,</li>
                <li>생성 주기도 짧고, 형태도 수치</li>
                <li>데이터뿐 아니라 문자와 영상</li>
                <li>데이터를 포함하는 대규모</li>
                <li>데이터를 말한다</li>
              </ul>
            </div>
            <div className="slick__box03 slick__box">
              <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="slick__box04 slick__box">
              <ul>
                <li></li>
                <li></li>
              </ul>
            </div>
            <div className="slick__box05 slick__box">
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
