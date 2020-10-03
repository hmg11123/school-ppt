import React from "react";
import image01 from "../../image/image.png";
import Fade from "react-reveal/Fade";

class slick__box02 extends React.Component {
  render() {
    return (
      <div className="slick__box02 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <div className="slick__box02-1">
              <div className="slick_main">
                <div className="slick_content">
                  <Fade left>
                    <div className="title">정의</div>
                    <ul>
                      <li>디지털 환경에서 생성되는</li>
                      <li>데이터로 그 규모가 방대하고,</li>
                      <li>생성 주기도 짧고, 형태도 수치</li>
                      <li>데이터뿐 아니라 문자와 영상</li>
                      <li>데이터를 포함하는 대규모</li>
                      <li>데이터를 말한다</li>
                    </ul>
                    <ul>
                      <li>PC와 인터넷, 모바일 기기 이용이 </li>
                      <li>생활화되면서 사람들이 도처에 남긴 데이터는 </li>
                      <li>기하급수적으로 증가하고 있음.</li>
                    </ul>
                  </Fade>
                </div>
                <Fade right>
                  <img src={image01} />
                </Fade>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box02;
