import React from "react";
import image03 from "../../image/image3.png";

class slick__box04 extends React.Component {
  render() {
    return (
      <div className="slick__box04 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <div className="slick_title">
              <span className="title">이용사례</span>
              <span className="subTitle">- 유통, 마케팅</span>
            </div>
            <div className="slick_content">
              <span>
                <div className="first_content">
                  <p>빅데이터는 마케팅 전략을 목적으로</p>
                  <p>사용되기도 한다.</p>
                </div>
                <div className="second_content">
                  <p>소비자의 과거 구매이력, SNS 메세지, 현재</p>
                  <p>위치 등의 정보를 통해 최적 상품 및 구매</p>
                  <p>조건을 실시간으로 제시한다. 또는 광고,</p>
                  <p>이벤트 등의 마케팅 활동에 대한 소비자</p>
                  <p>반응을 실시간으로 평가하여 대응한다.</p>
                </div>
              </span>
              <span>
                <div className="slick__box04_img">
                  <img src={image03}></img>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box04;
