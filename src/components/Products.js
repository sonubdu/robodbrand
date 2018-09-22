import React, { Component } from "react";
import Product from "./Product";
import ProductImages from "./ProductImages";
import ProductTitle from "./ProductTitle";
import FakeCart from "./FakeCart";

class Products extends Component {
  constructor() {
    super();

    localStorage.clear();
    this.state = {
      selectedTabId: 1
    };
    this.state = {
      spid: ""
    };
    localStorage.setItem("fakecart", "");
    this.state = {
      fakedata: ""
    };
    this.state = {
      fakecartstatus: false
    };
  }
  isActive = id => {
    return this.state.selectedTabId === id;
  };
  
  setActiveTab = selectedTabId => {
    this.setState({ selectedTabId });
  };
  onToggle = val => {
    this.setState({
      spid: val
    });
  };
  onUpdate = val => {
    this.setState({
      fieldVal: val
    });
    this.setState({
      fakecartstatus: false
    });
  };
  onDelete = val => {
    this.setState({
      fakecartstatus: val
    });
  };
  
  render() {
    let pcount = 0;
    let producttitle = this.props.products.map(product => {
      pcount++;
      return (
        <ProductTitle
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          onUpdate={this.onUpdate}
          onToggle={this.onToggle}
          pclass={pcount}
          isActive={ this.isActive(pcount) } 
          setActiveTab={ this.setActiveTab.bind(pcount) }
        />
      );
    });
    let count = 0;
    let products = this.props.products.map(product => {
      count++;
      return (
        <Product
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          onUpdate={this.onUpdate}
          pcount={count}
          onToggle={this.state.spid}
        />
      );
    });
    let fakecartCount = 0;
    let fakecart = this.props.products.map(product => {
      if (fakecartCount === 0) {
        fakecartCount++;
        let fakeCartData = localStorage.getItem("fakecart");

        if (fakeCartData !== "") {
          let data = JSON.parse(fakeCartData);
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

    let productsimages = this.props.products.map(product => {
      let pkey = "";
      if (this.state.fieldVal) {
        pkey = this.state.fieldVal[product.id.toString()];
      }

      return (
        <ProductImages
          addVariantToCart={this.props.addVariantToCart}
          client={this.props.client}
          key={product.id.toString()}
          product={product}
          passedvalue={pkey}
          onToggle={this.state.spid}
        />
      );
    });

    let style = {
      backgroundImage:
        "url(https://dbrand.com//sites/all/themes/dbrand_v3/img/product-preview/iphone-xs/space-gray/full.jpg)",
      minHeight: "700px",
      backgroundSize: "contain"
    };

    return (
      <div>
        <div className="bgWrapper">
          <div className="container">
            <div className="row">
              <div className="productCon">{producttitle}</div>
            </div>
            <div className="row">
              <div className="col-lg-12 paddingZero">{products}</div>
            </div>
          </div>
        </div>
        <div className="container-fluid OverFlow">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 bgImgColor">
              <div className="pimages " style={style}>
                {productsimages}
              </div>
            </div>
            <div className="dummyCart col-lg-6 col-md-6 col-sm-6 col-xs-6">
              {fakecart}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Products;
