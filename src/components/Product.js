import React, { Component } from "react";
import VariantSelector from "./VariantSelector";
import VariantSelectormob from "./VariantSelectormob";
class Product extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
    this.removeFakeCartItem = this.removeFakeCartItem.bind(this);
   
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function(image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {

    const target = event.target;
    var key = this.props.product.id;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
    this.props.hidepiker();
    const selectedVariant = this.props.client.product.helpers.variantForOptions(
      this.props.product,
      selectedOptions
    );
    selectedVariant.parent = this.props.product.title;
    selectedVariant.parentid = this.props.product.id;
    selectedVariant.qty = 1;
    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
    let fakeCartData = localStorage.getItem("fakecart");
    if (fakeCartData !== "" && fakeCartData !== null) {
      fakeCartData = JSON.parse(fakeCartData);
      delete fakeCartData[key];
      fakeCartData = Object.assign({ [key]: selectedVariant }, fakeCartData);
    } else {
      fakeCartData = { [key]: selectedVariant };
    }

    localStorage.setItem(key, selectedVariant.attrs.image.src);
    localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
    this.props.onUpdate(selectedVariant.attrs.image.src);
    this.setState({ fieldVal: selectedVariant.attrs.image.src });
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }
  removeFakeCartItem(key) {
    
    let fakeCartData = localStorage.getItem("fakecart");
    fakeCartData = JSON.parse(fakeCartData);
  
    delete fakeCartData[key];
    localStorage.removeItem(key);
    localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
    this.props.onDelete(false);
  }

  render() {
    let pcount = this.props.pcount;
    let selectedid = this.props.onToggle || 20;
    let pclass = "";
    if (selectedid !== 20) {
      if (selectedid === this.props.product.id) {
        pclass = "product active";
      } else {
        pclass = "product";
      }
    } else {
      pclass = pcount < 2 ? "product active" : "product";
    }

    // let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
    //let variant = this.state.selectedVariant || this.props.product.variants[0]
   let imgcount=0;
    let allimages=this.props.product.images.map(image => {
      imgcount++;
      const stylem = {
        backgroundImage: "url(" + image.src + ")"
      };
  return(
      <div style={stylem} key={"subImages"+imgcount}>

      </div>
  );
    });
    let variantQuantity = this.state.selectedVariantQuantity || 1;
    let variantSelectors = this.props.product.options.map(option => {
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
          removeFakeCartItem={this.removeFakeCartItem}
          parentid={this.props.product.id}
          applecut={this.props.applecut}
          tabid={this.props.tabid}
        />
      );
    });
    let variantSelectorsmob = this.props.product.options.map(option => {
      return (
        <VariantSelectormob
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
          removeFakeCartItem={this.removeFakeCartItem}
          parentid={this.props.product.id}
          applecut={this.props.applecut}
          hidepikker={this.props.hidepiker}
          tabid={this.props.tabid}
        />
      );
    });
    /*
    
   */
    return (
      <div className={pclass+" "+this.props.product.title.toString().toLowerCase()} id={this.props.product.id}>
	  
	  
      <div className="variantSelectors">
        {variantSelectors}
        </div>
        <div className="variantSelectorsmob">
        {variantSelectorsmob}
		
		
        </div>
       
        <label className="Product__option2">
          <input
            min="1"
            type="hidden"
            defaultValue={variantQuantity}
            onChange={this.handleQuantityChange}
          />
        </label>
        <div>
       {allimages}
        </div>
      </div>
    );
  }
}

export default Product;
