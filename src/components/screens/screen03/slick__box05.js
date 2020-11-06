import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import image03_4 from "../../image/image03_4.png";

class slick__box05 extends React.Component {
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
       <span className="subTitle">- 우리나라 활용 사례</span>
      </div>
      <div className="slick_content slick02_content">
       <span>
        <div className="first_content all_content">
         <p>
          -2018년, 정부는 데이터 경제 활성화 규제 혁신을 목표로 39개 병원에
          바이오 헬스 빅데이터 구축을 위한 사업을 추진
         </p>
         <p>
          -112억 원을 투자해 2020년 12월까지 삼성서울병원, 연세의료원 등 39개
          의료기관과 7개 기업에 전자의무기록제도(EMR)를 표준화하고 네트워크를
          재구축하는 것을 목표로 한다.
         </p>
        </div>
        <div className="second_content">
         <div className="image03_1 image03">
          <img src={image03_4} onClick={this._isDialogOpenToggle} />
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
          <img src={image03_4} />
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

export default slick__box05;
