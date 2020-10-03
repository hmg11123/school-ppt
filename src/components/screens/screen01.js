import React from "react";
import image01 from "../image/image.png";
import image02 from "../image/image2.png";
import image03 from "../image/image3.png";
import image04 from "../image/image4.png";
import image05 from "../image/image5.png";
import image06 from "../image/image6.png";
import arrow from "../image/arrow.png";
import leisure01 from "../image/leisure01.png";
import leisure02 from "../image/leisure02.png";
import leisure03 from "../image/leisure03.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

class screen01 extends React.Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 6000,
    };
    return (
      <div className="screen01">
        <div className="MainSlider">
          <Slider {...settings}>
            <div className="slick__box01 slick__box">
              <div className="screen01_circle">
                <ul>
                  <li>빅데이터 이용사례</li>
                  <li></li>
                  <li>여가분야</li>
                </ul>
              </div>
            </div>
            {/*-----------------------------------------------------*/}
            <div className="slick__box02 slick__box">
              <div className="slick_rectangle">
                <div className="rectangle">
                  <div className="slick__box02-1">
                    <div className="slick_main">
                      <div className="slick_content">
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
                      </div>
                      <img src={image01} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*-----------------------------------------------------*/}
            <div className="slick__box03 slick__box">
              <div className="slick_rectangle">
                <div className="rectangle">
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
                          <p>
                            주도하고있다, 핵심적인 빅데이터 장비 및 소프트웨어
                          </p>
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
                          <p>
                            빅데이터 시장은 모바일 인터넷 인구 폭증과 온라인
                          </p>
                          <p>
                            서비스이용 확대에 힘입어 가파른 성장세를 기록하였다.
                          </p>
                          <p>
                            중국 정부는 민간과의 연계로 빅데이터 산업 활성화
                          </p>
                          <p>촉진하였다.</p>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                            심야버스 노선을 정할때도 심야 시간대 사람들이 주로
                            검색한
                          </p>
                          <p>
                            지역과 몰리는 시간대의 빅대이터를 이용하여
                            대차간격을 조정함
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
                          - 사람들의 검색하는 것들을 데이터 수집을
                          통해서순위별로 통계를 냄
                        </p>
                      </div>
                      <div className="second_content">
                        <p className="content_title">. 스트리밍 서비스</p>
                        <p>
                          -각 연령별, 성별 별로 어떠한 음악을 선호하고듣는지,
                          분석하여 각 연령층, 성별, 개인별로 통계 내어 음악을
                          추천함
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
          </Slider>
        </div>
      </div>
    );
  }
}

export default screen01;
