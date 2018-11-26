import React, {Component} from 'react';
class ProductImages extends Component {

  render() {
   let variantImage = localStorage.getItem(this.props.product.id);
   let style={
    backgroundImage: 'url('+variantImage+')',
    }
    
    return ( 
    
      <div className="Productimage">
     
          <div style={style} className={this.props.product.title.toString().replace("/", "_")}></div>
          
       </div>
 
    );
  }
}

export default ProductImages;
