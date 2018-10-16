import React, { Component } from "react";
import FakeCartItem from "./FakeCartItem";
class FakeCart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataaftereffect: ""
    };
    this.state = {
      qtychanged: 1
    };
    this.state = {
      buynowtext: "BUY NOW"
    };
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.removeFakeCartItem = this.removeFakeCartItem.bind(this);
    this.getFakeCartItem = this.getFakeCartItem.bind(this);
    this.upqty = this.upqty.bind(this);
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
    let fakerdata = JSON.parse(localStorage.getItem("fakecart"));
    let data = [];
    let mdata = "";

    for (let key in fakerdata) {
      mdata = fakerdata[key];
      data.push({ variantId: mdata.id, quantity: parseInt(mdata.qty, 10)});
    }
  
    this.props.addMultipleVariantToCart(data);
    localStorage.clear();
    this.props.onDelete(false);
  }

  buyNow() {
    this.setState({ buynowtext: "wait.." });
    let fakerdata = JSON.parse(localStorage.getItem("fakecart"));
    let data = [];
    let mdata = "";

    for (let key in fakerdata) {
      mdata = fakerdata[key];
      data.push({ variantId: mdata.id, quantity: parseInt(mdata.qty, 10)});
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
upqty(qty){
  this.setState({
    qtychanged: qty
  });
  this.props.onStatus(true);
}
  render() {
 
    let fakerdata = this.props.status
      ? this.state.dataaftereffect
      : this.props.FakeCartdata;
    //  console.log(fakerdata);
    let fakecartlineItem = [];
    let data = "";
    let Total = 0;
    for (var key in fakerdata) {
      data = fakerdata[key];
      Total = Number(Total) + Number(data.price * data.qty);
      fakecartlineItem.push(
        <FakeCartItem
          key={data.id}
          itemdata={data}
          removeFakeCartItem={this.removeFakeCartItem}
          upqty={this.upqty}
        />
      );
    }

    if (Total === 0) {
      return (
        <div className={"col-lg-12 "+this.state.qtychanged}>
          <div className="pui-kits-wrapper noKits form-wrapper">
            <h2 className="kits-header">
              Your{" "}
              <span>
                <span>Selection</span>{" "}
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
    return (
      <div className={"fakeCart col-lg-12 "+this.state.qtychanged}>
        <label className="cartTittle">Your Selection</label>
        <a className="pull-right">
          <i className="fa fa-pencil-square-o" aria-hidden="true" />
        </a>
        <div className="Items">{fakecartlineItem}</div>
        <div className="total kitTotal">
          <strong className="pull-left">Kit Total -</strong>
          Rs. { Number(Total).toFixed(2) }
        </div>
        <div className="total totalAmount">
          <strong className="pull-left">Total -</strong>
          Rs. { Number(Total).toFixed(2) }
        </div>

        <button
          className="Product__buy button pull-left col-lg-6"
          onClick={() => this.buyNow()}
        >
          <div className={this.state.buynowtext + "loadershow1"}>
          <span className="glyphicon glyphicon glyphicon-flash"></span>  &nbsp;  {this.state.buynowtext}
          </div>
        </button>

        <button
          className="Product__addtocart button pull-right col-lg-6"
          onClick={() => this.addToCart()}
        >
         <span className="glyphicon glyphicon-shopping-cart"></span> &nbsp; {"ADD TO CART"}
        </button>
      </div>
    );
  }
}

export default FakeCart;
