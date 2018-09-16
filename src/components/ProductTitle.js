import React, {Component} from 'react';

class ProductTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      spid: ""
    }
   
   
  }
  handleClick() {
   
  this.props.onToggle(this.props.product.id);
  this.setState({spid: this.props.product.id});
  }

 render() {
   
    return (

         <button className={this.props.product.id} onClick={this.handleClick.bind(this, this.props.product.id)}> <h5 className="Product_title">{this.props.product.title}</h5></button>

    );
  }
}

export default ProductTitle;
