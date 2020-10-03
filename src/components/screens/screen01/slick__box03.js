import React from "react";
import image02 from "../../image/image2.png";
import leisure01 from "../../image/leisure01.png";
import leisure02 from "../../image/leisure02.png";
import leisure03 from "../../image/leisure03.png";
import Fade from "react-reveal/Fade";

class slick__box03 extends React.Component {
  render() {
    return (
      <div className="slick__box03 slick__box">
        <div className="slick_rectangle">
          <div className="rectangle">
            <Fade bottom cascade>
              <div className="slick_main">
                <div className="slick_title">
                  <div className="title">각국의 현황</div>
                  <img src={image02}></img>
                </div>
                <div className="country">
                  <div className="country01">
                    <span className="contry_title">
                      <p>미국</p>
                      <img src={leisure01} />
                    </span>
                    <span className="contry_content">
                      <p>미국은 민간 부분에서 글로벌 빅데이터 시장을</p>
                      <p>주도하고있다, 핵심적인 빅데이터 장비 및 소프트웨어</p>
                      <p>기업들이 포진하고 성장중이다. 정책면에서도</p>
                      <p>구체적인 진흥정책이 추진되는 등 가장 앞서 있다.</p>
                    </span>
                  </div>
                  <div className="country02">
                    <span className="contry_title">
                      <p>유럽</p>
                      <img src={leisure02} />
                    </span>
                    <span className="contry_content">
                      <p>유럽은 미국보다 빅데이터 시장이 제한적으로</p>
                      <p>형성되어 있다. 그러나 공공부문 데이터 공개에 </p>
                      <p>대해서는 적극적인 정책을 진행하였다. 특히, 공공</p>
                      <p>데이터를 개방하여 경제성장 및 고용창출 효과를</p>
                      <p>경험하면서, 공공기관 데이터 개방 및 활용의 폭을</p>
                      <p>확상하였다</p>
                    </span>
                  </div>
                  <div className="country03">
                    <span className="contry_title">
                      <p>중국</p>
                      <img src={leisure03} />
                    </span>
                    <span className="contry_content">
                      <p>중국 시장조사업체인 CCID컨설팅에 따르면 중국</p>
                      <p>빅데이터 시장은 모바일 인터넷 인구 폭증과 온라인</p>
                      <p>
                        서비스이용 확대에 힘입어 가파른 성장세를 기록하였다.
                      </p>
                      <p>중국 정부는 민간과의 연계로 빅데이터 산업 활성화</p>
                      <p>촉진하였다.</p>
                    </span>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </div>
    );
  }
}

export default slick__box03;
