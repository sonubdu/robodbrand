import React, {Component} from 'react';
import VariantSelector from './VariantSelector';

class Product extends Component {
  constructor(props) {
    super(props);
  
    let defaultOptionValues = {};
    this.props.product.options.forEach((selector) => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };

    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.findImage = this.findImage.bind(this);
   
  }

  findImage(images, variantId) {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  }

  handleOptionChange(event) {
    const target = event.target
    var key = this.props.product.id;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;

    const selectedVariant = this.props.client.product.helpers.variantForOptions(this.props.product, selectedOptions)
    selectedVariant.parent=this.props.product.title;
    selectedVariant.parentid=this.props.product.id;
    this.setState({
      selectedVariant: selectedVariant,
      selectedVariantImage: selectedVariant.attrs.image
    });
    let fakeCartData=localStorage.getItem('fakecart');
    if((fakeCartData!=="") && (fakeCartData!==null)){
      fakeCartData=JSON.parse(fakeCartData);
      delete fakeCartData[key];
      fakeCartData=Object.assign({[key]:selectedVariant},fakeCartData);
    }else{
      fakeCartData={[key]:selectedVariant}
    }

    localStorage.setItem(key,selectedVariant.attrs.image.src);
    localStorage.setItem('fakecart',JSON.stringify(fakeCartData));
    this.props.onUpdate(selectedVariant.attrs.image.src);
    this.setState({fieldVal:selectedVariant.attrs.image.src});
  }

  handleQuantityChange(event) {
    this.setState({
      selectedVariantQuantity: event.target.value
    });
  }

  render() {
    let pcount=this.props.pcount;
    let selectedid=this.props.onToggle || 20;
    let pclass="";
    if(selectedid!==20){
    if(selectedid===this.props.product.id){
       pclass ='product active';
    }else{
       pclass ='product';
    }
     }else{
       pclass = pcount < 2 ? 'product active':'product'
     }
   // let variantImage = this.state.selectedVariantImage || this.props.product.images[0]
   //let variant = this.state.selectedVariant || this.props.product.variants[0]
    let variantQuantity = this.state.selectedVariantQuantity || 1
    let variantSelectors = this.props.product.options.map((option) => {
    
      return (
        <VariantSelector
          handleOptionChange={this.handleOptionChange}
          key={option.id.toString()}
          option={option}
        />
      );
    });
  /*
    
   */
    return (
      <div className={pclass} id={this.props.product.id}>
        {variantSelectors}
        <label className="Product__option">
         <input min="1" type="hidden" defaultValue={variantQuantity} onChange={this.handleQuantityChange}></input>
        </label>
      </div>
    );
  }
}

export default Product;