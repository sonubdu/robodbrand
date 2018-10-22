import React, { Component } from "react";
class WithOption extends Component {
  constructor(props) {
    super(props);

    let defaultOptionValues = {};
    this.props.product.options.forEach(selector => {
      defaultOptionValues[selector.name] = selector.values[0].value;
    });
    this.state = { selectedOptions: defaultOptionValues };
    this.handleOptionChange = this.handleOptionChange.bind(this);
   
  

  }

  handleOptionChange(event) {
    this.props.withcutchange();
    const target = event.target;
    let fakeCartData = localStorage.getItem("fakecart");
    fakeCartData = JSON.parse(fakeCartData);
    var key = this.props.product.id;
    let selectedOptions = this.state.selectedOptions;
    selectedOptions[target.name] = target.value;
  
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
   
    if (fakeCartData !== "" && fakeCartData !== null) {
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


  render() {
 
    let fakerdata = this.props.status
      ? this.state.dataaftereffect
      : this.props.FakeCartdata;
    let data = "";
    let Total = 0;
   
      
      if(fakerdata){
        data = fakerdata[this.props.product.id];
        if(data){
        Total = Number(Total) + Number(data.price * data.qty);
        }
      }
     
  
   
    if (Total === 0) {
      return (
    
        <div className={this.props.product.id.toString()+ " col-lg-12 col-md-12 col-sm-12 col-xs-12 productFeature"}>
        <div className="applecut">
         <button>
          <div className={this.props.applecut+" applecutbtn"}> </div>
           <span>{this.props.applecut}</span>
         </button>
         </div>
         </div>
      );
    }
    return (
      <div className={this.props.product.id.toString()+ " col-lg-12 col-md-12 col-sm-12 col-xs-12 productFeature"}>
              <div className={this.props.applecut==="With Apple Cut"?"wth_cut applecut":"without_cut applecut"}>
               <button  name="Color" value={this.props.applecut==="With Apple Cut"?data.title.toString().replace("With logo","").trim():data.title.toString()+" With logo"} onClick={this.handleOptionChange}>
               <div className={this.props.applecut+" applecutbtn"}> </div>
               </button>
               </div>
               </div>

    );
  }
}

export default WithOption;
