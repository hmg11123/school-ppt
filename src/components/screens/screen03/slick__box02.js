import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import image03_1 from "../../image/image03_1.png";

class slick__box02 extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   isDialogOpen: false,
  };
 }
 render() {
  const { isDialogOpen } = this.state;
  return (
   <div className="slick__box04 slick__box">
    <div className="slick_rectangle">
     <div className="rectangle">
      <div className="slick_title">
       <span className="title">이용사례</span>
       <span className="subTitle">- 개인 맞춤형 의료/관리</span>
      </div>
      <div className="slick_content slick02_content">
       <span>
        <div className="first_content all_content">
         <p>
          - 연령별 , 지역별, 소득수준벌 맞춤형 건강증진/검진 서비스, 만성질환
          맞춤형 관리 - 개인의 신체상태, 식습관, 생활패턴 등 의료데이터를
          활여하여 질병예측 및 예방을 위하 건강관리 (셀바스ai 셀비 체크업)
         </p>
         <p>
          -유전정보 분석을 통한 미래발병 가능 질환 예측 및 병원 의료진 추천
         </p>
         <p>
          -사업장별(단체) , 근로환경별(개인) 건강위해 요소 예측 및 조기 정보
         </p>
        </div>
        <div className="second_content">
         <div className="image03_1 image03">
          <img onClick={this._isDialogOpenToggle} src={image03_1} />
         </div>
        </div>
       </span>
       <span>
        {/* Dialog Area */}
        <Dialog
         onClose={this._isDialogOpenToggle}
         aria-labelledby="customized-dialog-title"
         open={isDialogOpen}
         fullWidth={true}
         maxWidth={"md"}
        >
         <DialogContent>
          <img src={image03_1} />
         </DialogContent>
         <DialogActions>
          <Button color="primary" onClick={this._isDialogOpenToggle}>
           끄기
          </Button>
         </DialogActions>
        </Dialog>
       </span>
      </div>
     </div>
    </div>
   </div>
  );
 }
 _isDialogOpenToggle = () => {
  this.setState({
   isDialogOpen: !this.state.isDialogOpen,
   // ! 는 부정 연산자
  });
 };
}

export default slick__box02;
