import React from "react";
import image03_3 from "../../image/image03_3.png";

class slick__box04 extends React.Component {
  render() {
    return (
      <div className="slick__box04-3 slick__box">
        <div className="slick__main">
          <div className="title-3">
            <p>제약회사 빅데</p>
            <p>이터 활용사례</p>
          </div>
          <div className="content-3">
            <div className="txt">
              <div className="dot">■</div>
              <div>
                제약회사에서도 빅데이터를 활용하고 있으며 신약개발, 임상실허므
                판매/마케팅 영역까지 전 영역에 빅데이터를 적용하고 있다.
                신약개발 시 제품개발 및 임상실험에 많은 돈을 투자해야 한다.
                하지만 기존의 의약품의 대한 선호도 및 부작용 등 관련 데이터를
                활용하면 제품개발비용을 어느 정도 줄일 수 있다.
              </div>
            </div>
            <img src={image03_3} />
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box04;
