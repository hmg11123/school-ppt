import React from "react";
import image03_4 from "../../image/image03_4.png";

class slick__box05 extends React.Component {
  render() {
    return (
      <div className="slick__box05-3 slick__box">
        <div className="slick__main">
          <div className="title-3">
            <p>IBM 왓슨의</p>
            <p>의료분야 활용</p>
          </div>
          <div className="content-3">
            <div className="txt">
              <div className="dot">■</div>
              <div>
                사람의 말을 이해하고 대답할 수 있는 IBM의 인공지능 슈퍼 컴퓨터인
                왓슨은 방대한 데이터를 분석하여 환자를 진단하여 의사에게
                치료법을 추천해준다. 수백만 건의 진단서, 환자기록, 의료서적 등의
                방대한 데이터를 바탕으로 왓슨 컴퓨터는 순식간에 분석을 통해
                확률이 가장 높은 병명과 성공 가능성이 높은 치료법을 동시에
                의사에게 조언을 한다. 그럼으로써 의사마다 다른 판단을 내릴 수
                있는 경우 판단의 오차를 크게 줄이고 객관성을 높일 수 있다.
              </div>
            </div>
            <img src={image03_4} />
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box05;
