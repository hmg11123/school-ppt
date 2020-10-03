import React from "react";
import arrow from "../../image/arrow.png";
import image05 from "../../image/image5.png";

class slick__box05 extends React.Component {
  render() {
    return (
      <div className="slick__box05 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <div className="slick_title">
              <span className="title">이용사례</span>
              <span className="subTitle">- 교통</span>
            </div>
            <div className="slick_content">
              <span>
                <div className="first_content">
                  <p>스마트폰, 차량 내비게이션 위치 등을 활용하여</p>
                  <p>실시간 최적 경로를 제시한다.</p>
                </div>
                <div className="second_content">
                  <span>
                    <p>소비자의 과거 구매이력, SNS 메세지, 현재</p>
                    <p>위치 등의 정보를 통해 최적 상품 및 구매</p>
                    <p>조건을 실시간으로 제시한다. 또는 광고,</p>
                  </span>
                </div>
              </span>
              <span>
                <img className="img01" src={arrow} />
              </span>
              <span>
                <span>교통혼잡 해소</span>
              </span>
              <span></span>
            </div>
            <div>
              <img src={image05} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box05;
