import React, { Component } from 'react';
import Product from './Product';
import ProductImages from './ProductImages';
import ProductTitle from './ProductTitle';
import FakeCart from './FakeCart';


class Products extends Component {
  constructor() {
    super();

    localStorage.clear()
    this.state = {
      spid: ""
    }
    localStorage.setItem('fakecart',"");
    this.state = {
      fakedata: ""
    }
    this.state = {
      fakecartstatus: false
    }
  }

  onToggle = (val) => {
    this.setState({
      spid: val
    })
  };
  onUpdate = (val) => {
    this.setState({
      fieldVal:val
    });
    this.setState({
      fakecartstatus:false
    });
  };
  onDelete = (val) => {
    this.setState({
      fakecartstatus:val
    });
   
  };
  render() {
    
    let producttitle = this.props.products.map((product) => {
      return (
        <ProductTitle addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          onUpdate={this.onUpdate}
          onToggle={this.onToggle}
        />
      );
    });
   let count=0;
   let products = this.props.products.map((product) => {
    count++;
      return (
        <Product addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          onUpdate={this.onUpdate}
          pcount={count}
          onToggle={this.state.spid}
        />
      );
      
    });
    let fakecartCount=0;
    let fakecart = this.props.products.map((product) => {
      if(fakecartCount === 0){
       fakecartCount++;
       let fakeCartData=localStorage.getItem('fakecart');
       
       if(fakeCartData!==""){
       let data=JSON.parse(fakeCartData);
        return (
              <FakeCart 
              key={product.id.toString()}
              FakeCartdata={data}
              product={product}
              addVariantToCart={this.props.addVariantToCart}
              addMultipleVariantToCart={this.props.addMultipleVariantToCart}
              status={this.state.fakecartstatus}
              onDelete={this.onDelete}
              />
            );
        
        }
        return "";
      }
     return "";
 
      });
    
      let productsimages = this.props.products.map((product) => {
      let pkey="";
      if(this.state.fieldVal){
       pkey=this.state.fieldVal[product.id.toString()];
       }
      
      return (
        <ProductImages addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          passedvalue={pkey}
          onToggle={this.state.spid}
        />
      );
      
    });
  
   
    return (
      <div className="Product-wrapper">
     <div className="ptitle">
        {producttitle}
      </div> 
      <div className="pcontainer"> 
        {products}
        </div>
       <div className="pimages">
       {productsimages}
       </div>
       <div className="dummyCart">
       {fakecart}
      </div>
      </div>
    );
  }
}

export default Products;
