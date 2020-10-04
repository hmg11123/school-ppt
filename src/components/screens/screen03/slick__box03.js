import React from "react";
import image03_2 from "../../image/image03_2.png";

class slick__box03 extends React.Component {
  render() {
    return (
      <div className="slick__box03-3 slick__box">
        <div className="slick__main">
          <div className="title-3">
            <p>병원의 의료 데이터</p>
            <p>활용</p>
          </div>
          <div className="content-3">
            <div className="txt">
              <div className="dot">■</div>
              <div>
                삼성서울병원에서는 유전적, 의학적 현상, 평상시 생활 등 방대한
                개인의 의료데이터를 기반으로 개인별 맞춤 치료 서비스를 제공하고
                있다. 즉, 빅데이터 기술을 활용하여 의료데이터를 분석하고 개인에
                맞는 건강관리 및 치료 방법을 제안하고 더 나아가 질병 또한
                예측하는 서비스이다. 이 시스템은 치료중심이 아닌 건강관리 및
                예방에 좀 더 초점을 맞추고 있다. (예 : 진단정보, 의료차트,
                간호기록, 유전체 및 개인 습관 등 다양한 의료데이터)
              </div>
            </div>
            <img src={image03_2} />
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box03;
