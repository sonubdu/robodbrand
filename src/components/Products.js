import React, { Component } from "react";
import Product from "./Product";
import ProductImages from "./ProductImages";
import ProductTitle from "./ProductTitle";
import FakeCart from "./FakeCart";
import DeviceColor from "./DeviceColor";
import { css } from 'react-emotion';
// First way to import
import { FadeLoader } from 'react-spinners';
const override = css`
    display: block;
    margin: 0 auto;
    border-color: #DB0F28;
`;

class Products extends Component {
  constructor() {
    super();

    localStorage.clear();

    this.state = {
      selectedTabId: 1
    };
    this.state = {
      deviceselectedTabId: 1
    };
    this.state = {
      spid: ""
    };

    this.state = {
      dccolor: ""
    };

    localStorage.setItem("fakecart", "");
    this.state = {
      fakedata: "",
      withappletext: "Without Apple Cut"
    };
    this.state = {
      fakecartstatus: false
    };
    this.state = {
      skinpikker: 'hide'
    };
  }

  componentWillMount() {
    this.setState({ withappletext: "Without Apple Cut" });
    this.setState({ dccolor: "Gray" });
    this.setState({ skinpikker: "hide" });
  }

  isActive = id => {
    return this.state.selectedTabId === id;
  };
  deviceisActive = id => {
    return this.state.selecteddeviceTabId === id;
  };

  setActiveTab = selectedTabId => {
    this.setState({ selectedTabId });
  };
  devicesetActiveTab = selecteddeviceTabId => {
    this.setState({ selecteddeviceTabId });
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
  devicecahnge = val => {
    this.setState({ dccolor: val });
  };
 
  skinpickerHide = val => {
  
      this.setState({ skinpicker: 'hide' });

  };

  skinpickershow = val => {
   
   
      this.setState({ skinpicker: 'show' });
  
  };
  
  //https://dbrand.com/sites/all/themes/dbrand_v3/img/product-preview/iphone-xs/space-gray/full.jpg
  //https://dbrand.com/sites/all/themes/dbrand_v3/img/product-preview/iphone-xs/silver/full.jpg
  //https://dbrand.com/sites/all/themes/dbrand_v3/img/product-preview/iphone-xs/gold/full.jpg
  withcutchange = val => {
   if(this.state.withappletext==="With Apple Cut"){
    this.setState({ withappletext: "Without Apple Cut" });
   }else{
    this.setState({ withappletext: "With Apple Cut" });
   }
    this.setState({ withcut: val });
  };
  render() {
    let devicecolors = [];
    devicecolors = ["Gray", "Silver", "Gold"];
    let pcount = 0;
    let kcount = 0;
    let deviceColor = devicecolors.map(dc => {
      kcount++;
      return (
        <DeviceColor
          product={dc}
          pclass={kcount}
          deviceisActive={this.deviceisActive(kcount)}
          devicesetActiveTab={this.devicesetActiveTab.bind(kcount)}
          devicecahnge={this.devicecahnge}
          key={"dcolor"+kcount}
        />
      );
    });

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
          isActive={this.isActive(pcount)}
          setActiveTab={this.setActiveTab.bind(pcount)}
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
          onDelete={this.onDelete}
          status={this.state.fakecartstatus}
          applecut={this.state.withappletext}
          hidepiker={this.skinpickerHide}
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
              addMultipleVariantToBuy={this.props.addMultipleVariantToBuy}
              status={this.state.fakecartstatus}
              onDelete={this.onDelete}
              buynow={this.props.buynow}
            />
          );
        }
        return (
          <div className="col-lg-12" key="empty">
            <div className="pui-kits-wrapper noKits form-wrapper">
              <h2 className="kits-header">
                Your{" "}
                <span className="a1">
                  <span className="a2">Selection</span>
                </span>
              </h2>
              <div className="no-kits-wrapper">
                <div className="inner">
                  Start building a skin combo above.
                  <a className=" btn-highlighted btn--toform active">Up</a>
                </div>
              </div>
            </div>
          </div>
        );
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
      backgroundImage: "url(/products/"+this.props.ctitle+"-"+ this.state.dccolor + ".jpg)"
    };
    let style1 = "show ";
    //let style3 = "shownew ";
    let style2 = "hide ";
    let style4 = {
    background:"#222",
    padding:"20px"

    };
/*
     <div className={this.isActive(1)?style3+" col-lg-5 paddingZero paddingZeronew":style2+" col-lg-5 paddingZero paddingZeronew"}>
                <div className="devicecolor marginZero">
                  <label key="1">
                    <span className="label__inner">apple cutout</span>
                  </label>
                </div>
              </div>
              <div className={this.isActive(1)?style3+" productCon seaprate":style2+" productCon seaprate"}>
            
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3 productFeature">
              <div className="applecut">
               <button onClick={this.withcutchange}>
                <div className={this.state.withappletext+" applecutbtn"}> </div>
                 <span>{this.state.withappletext}</span>
               </button>
               
               </div>
               </div>
              </div>
*/



if(this.props.withcut){
    return (
      <div>
        <div className={this.state.spid?style2:style1} style={style4}>
        <FadeLoader
          className={override}
          sizeUnit={"px"}
          size={150}
          color={'#fff'}
          loading={this.state.loading}
        />
      </div>   
      <div className={this.state.spid?style1:style2}>
        <div className="bgWrapper">
          <div className="container">
            <div className="row">
            
             
            
            
              <div className="productCon">
              {producttitle}
            
              </div>
              
            </div>
            
            <div className="row">
              
              <div className="col-lg-12 paddingZero">{products}</div>
            </div>
          </div>
        </div>
        <div className="bgConFeature">
          <div className="container OverFlow">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bgImgColor">
                <div className="pimages" style={style}>
                  <span className={this.state.loading ? style2 : style1}>
                    {productsimages}
                  </span>
                </div>
                <div className="devicecolor">
                  <label key="3">
                    <span className="label__inner">Device Color</span>
                  </label>
                  <div className="devicedata">{deviceColor}</div>
                </div>
              </div>
              <div className="dummyCart col-lg-6 col-md-6 col-sm-6 col-xs-12">
                {fakecart}
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
}else{

  return (
    <div>
    <div className={this.state.spid?style2:style1} style={style4}>
    <FadeLoader
      className={override}
      sizeUnit={"px"}
      size={150}
      color={'#fff'}
      loading={this.state.loading}
    />
  </div>  
    <div className={this.state.spid?style1:style2}>
      <div className="bgWrapper">
        <div className="container">
          <div className="row">
          
           
            <div className="productCon">{producttitle}</div>
          </div>
		  <div className="row"><button type="button" onClick={this.skinpickershow} className="pick_skin">pick a skin</button></div>
          <div className="row desktop_product">
           
            <div className="col-lg-12 paddingZero">{products}</div>
          </div>
        </div>
      </div>
      <div className="bgConFeature">
        <div className="container OverFlow">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 bgImgColor">
              <div className="pimages" style={style}>
                <span className={this.state.loading ? style2 : style1}>
                  {productsimages}
                </span>
              </div>
              <div className="devicecolor">
                <label key="3">
                  <span className="label__inner">Device Color</span>
                </label>
                <div className="devicedata">{deviceColor}</div>
              </div>
            </div>
            <div className="dummyCart col-lg-6 col-md-6 col-sm-6 col-xs-12">
              {fakecart}
            </div>
          </div>
        </div>
      </div>
    </div>
	<div className={this.state.skinpicker?this.state.skinpicker+" row mobile_product":" hide row mobile_product "}>
           
            <div className="col-lg-12 paddingZero">{products}</div>
          </div>
    </div>
  );



}
  }
}

export default Products;
