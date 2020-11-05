import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import image03_2 from "../../image/image03_2.png";

class slick__box03 extends React.Component {
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
      <div className="slick_title title">
       <span className="title">이용사례</span>
       <span className="subTitle">- 의료의 질과 안전향상</span>
      </div>
      <div className="slick_content slick02_content slick02_content-3">
       <span>
        <div className="first_content all_content">
         <p className="one">
          -유전적 특성에 기반 한 약물 효과성 분석, 예측기반 치료 최적화
          (맞춤약물)
         </p>
        </div>
        <div className="second_content">
         <div className="image03_2 image03">
          <img src={image03_2} onClick={this._isDialogOpenToggle} />
         </div>
        </div>
       </span>
       <span className="dialog">
        {/* Dialog Area */}
        <Dialog
         onClose={this._isDialogOpenToggle}
         aria-labelledby="customized-dialog-title"
         open={isDialogOpen}
         fullWidth={true}
        >
         <DialogContent>
          <img className="dialog_image" src={image03_2} />
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

export default slick__box03;
