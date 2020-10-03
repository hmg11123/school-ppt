import React from "react";
import image06 from "../../image/image6.png";

class slick__box07 extends React.Component {
  render() {
    return (
      <div className="slick__box07 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <div className="slick_title">
              <span className="title">이용사례</span>
              <span className="subTitle">- 기타</span>
            </div>
            <div className="slick_content">
              <span className="first_main">
                <div className="first_content">
                  <p className="content_title">. 실시간 검색어</p>
                  <p>
                    - 사람들의 검색하는 것들을 데이터 수집을 통해서순위별로
                    통계를 냄
                  </p>
                </div>
                <div className="second_content">
                  <p className="content_title">. 스트리밍 서비스</p>
                  <p>
                    -각 연령별, 성별 별로 어떠한 음악을 선호하고듣는지, 분석하여
                    각 연령층, 성별, 개인별로 통계 내어 음악을 추천함
                  </p>
                </div>
              </span>
              <span className="second_main">
                <div className="slick__box07_img">
                  <img src={image06}></img>
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box07;
