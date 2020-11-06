import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import image03_3 from "../../image/image03_3.png";

class slick__box04 extends React.Component {
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
       <span className="subTitle">- 임상 의사결정지원</span>
      </div>
      <div className="slick_content slick02_content">
       <span>
        <div className="first_content all_content">
         <p>-질환별 새로운 삭술정보와 치료법 등을 의료진에게 통합 제공</p>
         <p>
          -영상자료, 유전정보, 투약 및 수술기록 등 데이터를 종합적으로 분석하여,
          인공지능과 결합한 임상의상결정 지원 (에 : 뷰노(본에이지), 루닛(scope),
          ibm(왓슨)
         </p>
        </div>
        <div className="second_content">
         <div className="image03_3 image03">
          <img src={image03_3} onClick={this._isDialogOpenToggle} />
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
        >
         <DialogContent>
          <img src={image03_3} />
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

export default slick__box04;
