import React, {Component} from 'react';
import FakeCartItem from './FakeCartItem';
class FakeCart extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      dataaftereffect:''
    }
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeFakeCartItem = this.removeFakeCartItem.bind(this);
    this.getFakeCartItem = this.getFakeCartItem.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }
  
addToCart(){
let fakerdata=this.props.FakeCartdata;
let data=[];
let mdata="";

for(let key in fakerdata) {
  mdata= fakerdata[key]; 
   data.push({variantId: mdata.id, quantity: 1});
}
this.props.addMultipleVariantToCart(data)
localStorage.clear()
this.props.onDelete(false);
}

removeFakeCartItem(key){
  let fakeCartData=localStorage.getItem('fakecart');
  fakeCartData=JSON.parse(fakeCartData);
  delete fakeCartData[key];
  localStorage.setItem('fakecart',JSON.stringify(fakeCartData));
  this.getFakeCartItem();
  this.props.onDelete(true);
}

getFakeCartItem(){
  let fakeCartData=localStorage.getItem('fakecart');
  fakeCartData=JSON.parse(fakeCartData);
  this.setState({
    dataaftereffect:fakeCartData
  });
}


render() {
  
  console.log(this.props.status);
   let fakerdata = this.props.status ?  this.state.dataaftereffect : this.props.FakeCartdata;
    console.log(fakerdata)
    let fakecartlineItem=[];
    let data="";
    let Total=0;
    for(var key in fakerdata) {
       data= fakerdata[key];
       Total= Number(Total) + Number(data.price);
       fakecartlineItem.push( 
          <FakeCartItem 
            key={data.id}
            itemdata={data}
            removeFakeCartItem={this.removeFakeCartItem}
           />
           
         );
     }
   
   if(Total===0){
     return null;
   }
    return (
      <div className="fakeCart">
      <div className="addtocart">
       <center>
        <button  className="Product__buy button" onClick={() => this.addToCart()}>{"add to cart"}</button>
        </center>
      </div>
      <div className="Items">
      {fakecartlineItem}
      </div>
      <div className="total">
       <span>Total</span> : { Total }
      </div>
      <div className="addtocart">
       <center>
       <button  className="Product__buy button" onClick={() => this.addToCart()}>{"add to cart"}</button>
        </center>
      </div>
      </div>
    );
  }
}

export default FakeCart;
