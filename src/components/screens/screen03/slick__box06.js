import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import image03_5 from "../../image/image03_5.png";

class slick_box06 extends React.Component {
 constructor(props) {
  super(props);

  this.state = {
   isDialogOpen: false,
  };
 }
 render() {
  const { isDialogOpen } = this.state;
  const customImageStyle = {
   width: "500px",
   height: "500px",
  };
  return (
   <div className="slick__box04 slick__box">
    <div className="slick_rectangle">
     <div className="rectangle">
      <div className="slick_title">
       <span className="title">이용사례</span>
       <span className="subTitle">
        - 보건의료 빅데이터는 신약개발 과정에도 활용
       </span>
      </div>
      <div className="slick_content slick02_content">
       <span>
        <div className="first_content all_content">
         <p>
          -환자를 모집하기 어려운 경우 빅데이터가 임상시험 대조군을 대체할 수도
          있을 것이란 예측
         </p>
         <p>
          -기존의 약물치료가 효과가 없다면 유전정보를 활용해 환자의 약물
          반응성을 알 수 있다.
         </p>
         <p>
          -장기적으로 볼 때 의료 데이터 활용으로 의료 서비스 패러다임이 변하게
          되면 사회적 비용도 감소할 전망이다.
         </p>
        </div>
        <div className="second_content">
         <div className="image03_1 image03">
          <img src={image03_5} onClick={this._isDialogOpenToggle} />
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
         //  maxWidth={"md"}
         contentStyle={customImageStyle}
        >
         <DialogContent>
          <img src={image03_5} />
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

export default slick_box06;
