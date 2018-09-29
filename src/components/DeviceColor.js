import React, { Component } from "react";

class DeviceColor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spid: 1
    };
    
  }

  componentDidMount(){
   if(this.props.pclass===1){
      this.devicecahnge(this,this.props.product);

    }
  }

  devicecahnge() {
    this.props.devicecahnge(this.props.product);
    this.props.devicesetActiveTab(this.props.pclass);
  }

  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">
        <button
          className={
            this.props.deviceisActive ? "active" :(this.props.pclass===1)? "class"+this.state.spid: "class" + this.props.pclass
          }
          onClick={this.devicecahnge.bind(this,this.props.product)}
        >
          {" "}
          <span className="ProductCom">{this.props.product}</span>
        </button>
      </div>
    );
  }
}

export default DeviceColor;
