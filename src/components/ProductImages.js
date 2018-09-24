import React, {Component} from 'react';
class ProductImages extends Component {

  render() {
  
   let variantImage = localStorage.getItem(this.props.product.id);
   let style={
    backgroundImage: 'url('+variantImage+')',
    minHeight:"500px",
    width:'100%',
    backgroundSize: "contain"
}
    return ( 
    
      <div className="Productimage">
     
          <div style={style} className={this.props.product.title}></div>
          
       </div>
 
    );
  }
}

export default ProductImages;
