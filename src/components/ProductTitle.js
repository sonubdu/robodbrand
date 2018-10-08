import React, { Component } from "react";

class ProductTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spid: 1
    };
    
  }

  componentDidMount(){
    if(this.props.pclass===1){
      this.handleClick(this,this.props.product.id);

    }
  }

  handleClick() {
    
    this.props.onToggle(this.props.product.id);
    this.setState({ spid: this.props.product.id });
    this.props.setActiveTab(this.props.pclass);
  }

  render() {
    return (
      <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 productFeature">
        <button
          className={
            this.props.isActive ? "active" :(this.props.pclass===1)? "class"+this.state.spid: "class" + this.props.pclass
          }
          onClick={this.handleClick.bind(this, this.props.product.id)}
        >
          {" "}
          <span className="ProductCom">{this.props.product.title}</span>
        </button>
      </div>
    );
  }
}

export default ProductTitle;
