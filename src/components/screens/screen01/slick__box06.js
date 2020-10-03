import React from "react";
import image04 from "../../image/image4.png";

class slick__box06 extends React.Component {
  render() {
    return (
      <div className="slick__box06 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <div className="slick_title">
              <span className="title">이용사례</span>
              <span className="subTitle">- 교통</span>
            </div>
            <div className="slick_content">
              <span>
                <div className="first_content">
                  <p>서울 심야버스 노선 정책 사업</p>
                </div>
                <div className="second_content">
                  <span>
                    <p>
                      심야버스 노선을 정할때도 심야 시간대 사람들이 주로 검색한
                    </p>
                    <p>
                      지역과 몰리는 시간대의 빅대이터를 이용하여 대차간격을
                      조정함
                    </p>
                  </span>
                </div>
              </span>
            </div>
            <div>
              <img src={image04} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box06;
