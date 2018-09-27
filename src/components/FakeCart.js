import React, { Component } from "react";
import FakeCartItem from "./FakeCartItem";
class FakeCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataaftereffect: ""
    };
    this.state = {
      buynowtext: "BUY NOW"
    };
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeFakeCartItem = this.removeFakeCartItem.bind(this);
    this.getFakeCartItem = this.getFakeCartItem.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  addToCart() {
    let fakerdata = this.props.FakeCartdata;
    let data = [];
    let mdata = "";

    for (let key in fakerdata) {
      mdata = fakerdata[key];
      data.push({ variantId: mdata.id, quantity: 1 });
    }
    this.props.addMultipleVariantToCart(data);
    localStorage.clear();
    this.props.onDelete(false);
  }

  buyNow() {
    this.setState({buynowtext:""});
    let fakerdata = this.props.FakeCartdata;
    let data = [];
    let mdata = "";

    for (let key in fakerdata) {
      mdata = fakerdata[key];
      data.push({ variantId: mdata.id, quantity: 1 });
    }
    this.props.addMultipleVariantToBuy(data);
    
    }

  removeFakeCartItem(key) {
    let fakeCartData = localStorage.getItem("fakecart");
    fakeCartData = JSON.parse(fakeCartData);
    delete fakeCartData[key];
    localStorage.removeItem(key);
    localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
    this.getFakeCartItem();
    this.props.onDelete(true);
  }

  getFakeCartItem() {
    let fakeCartData = localStorage.getItem("fakecart");
    fakeCartData = JSON.parse(fakeCartData);
    this.setState({
      dataaftereffect: fakeCartData
    });
  }

  render() {
  
    let fakerdata = this.props.status
      ? this.state.dataaftereffect
      : this.props.FakeCartdata;
 
    let fakecartlineItem = [];
    let data = "";
    let Total = 0;
    for (var key in fakerdata) {
      data = fakerdata[key];
      Total = Number(Total) + Number(data.price);
      fakecartlineItem.push(
        <FakeCartItem
          key={data.id}
          itemdata={data}
          removeFakeCartItem={this.removeFakeCartItem}
        />
      );
    }

    if (Total === 0) {
      return (

<div className="col-lg-12">
<div className="emptyCart">

</div>
<div className="emptyCartText">
<div className="innertext">
Your cart is empty! Let’s flip up something fun together !
</div>
<button
          className="Product__addtocart button"
          onClick={() => this.addToCart()}
        >
         {"Continue Shoping"} 
 </button>
  </div>
 
   
</div>


      );
}
    return (
      <div className="fakeCart col-lg-12">
        <label className="cartTittle">Your Selection</label>
        <a  className="pull-right">
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
        </a>
        <div className="Items">{fakecartlineItem}</div>
        <div className="total kitTotal">
          <strong className="pull-left">Kit Total-</strong>
          Rs. {Total}
        </div>
        <div className="total totalAmount">
          <strong className="pull-left">Total-</strong>
          Rs. {Total}
        </div>

        <button
          className="Product__buy button pull-left"
          onClick={() => this.buyNow()}
        >
          <div className={this.state.buynowtext+"loadershow"}>
          {this.state.buynowtext}
          </div>
        </button>

        <button
          className="Product__addtocart button pull-right"
          onClick={() => this.addToCart()}
        >
          {"ADD TO CART"}
        </button>
      </div>
    );
  }
}

export default FakeCart;
