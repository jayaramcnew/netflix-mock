import React, { Component } from "react";

class VideoItem extends Component {


     state = {
        btnStyle: {
            visibility : 'hidden'
        }
    };





     mouseOverHandle = () => {
      console.log('over');
      this.setState({
          btnStyle: {
              display : 'inline'
          }
      });

    };

    mouseLeaveHandle = () => {
        this.setState({
            btnStyle: {
                visibility : 'hidden'
            }
        });
    };


     render(){

         let styles = {

             display : 'inline-block',
             margin: '10px'
         };


         return(
             <div style={styles} onMouseEnter={this.mouseOverHandle} onMouseLeave={this.mouseLeaveHandle}>

                 <img src={this.props.img} />
                 <p> {this.props.title} </p>
                 <button
                     style={this.state.btnStyle} onClick={() => this.props.onClickHandle(this.props.btnTitle,this.props.index)} >{this.props.btnTitle}</button>

             </div>
         )


     }


}

export default VideoItem;