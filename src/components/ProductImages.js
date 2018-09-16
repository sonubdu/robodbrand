import React, {Component} from 'react';

class ProductImages extends Component {
  render() {
  
   let variantImage = localStorage.getItem(this.props.product.id) || this.props.product.images[0].src;
  
    return (
      <div className="Product_title">
          {this.props.product.images.length ? <img id={this.props.product.id} src={variantImage} alt={`${this.props.product.title} product shot`}/> : null}
       </div>
    );
  }
}

export default ProductImages;
