import React, { Component } from "react";
import Cart from "../../../components/Cart";
import Products from "../../../components/Products";
import Productdiscription from "../../../components/Productdisciption";
import Usb from "../../../components/Usb";
import Newletter from "../../../components/NewLetter";
import Footer from "../../../components/Footer";
class Collection extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      buynow: { lineItems: [] },
      products: [],
      shop: {},
      cid: "",
      hmactive:"",
      hcv:"",
      withcut:false,
      collectiontitle:"",
      collectionimage:""
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.changemenu = this.changemenu.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.addMultipleVariantToCart = this.addMultipleVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.addMultipleVariantToBuy = this.addMultipleVariantToBuy.bind(this);
    
  }

  setProducts(id) {
    this.props.client.collection.fetchByHandle(id).then(collection => {
    if(collection.description==="withcut"){
      this.setState({
        withcut: true
      });
    }
    this.setState({
      collectionhandle: collection.handle
    });
    this.setState({
      collectiontitle: collection.title
    });
    this.setState({
      collectionimage: collection.image.src
    });
      this.setState({
        products: collection.products
      });
    });
  }

  componentWillMount() {
    this.props.client.checkout.create().then(res => {
      this.setState({
        checkout: res
      });
    });
   
    if (this.props.shopid !== "undefined") {
         this.setProducts(this.props.shopid);
    }


    this.props.client.shop.fetchInfo().then(res => {
      this.setState({
        shop: res
      });
    });
  }

  addVariantToCart(variantId, quantity) {
    this.setState({
      isCartOpen: true
    });

    const lineItemsToAdd = [{ variantId, quantity: parseInt(quantity, 10) }];
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }
  addMultipleVariantToCart(carddata) {
    this.setState({
      isCartOpen: true
    });
    const lineItemsToAdd = carddata;
    const checkoutId = this.state.checkout.id;
    return this.props.client.checkout
      .addLineItems(checkoutId, lineItemsToAdd)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  addMultipleVariantToBuy(carddata) {
    const lineItemsToAdd = carddata;
    const checkoutId = this.state.checkout.id;
   this.props.client.checkout
    .addLineItems(checkoutId, lineItemsToAdd)
    .then(res => {
      window.location.href=res.webUrl;
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id;
    const lineItemsToUpdate = [
      { id: lineItemId, quantity: parseInt(quantity, 10) }
    ];

    return this.props.client.checkout
      .updateLineItems(checkoutId, lineItemsToUpdate)
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id;

    return this.props.client.checkout
      .removeLineItems(checkoutId, [lineItemId])
      .then(res => {
        this.setState({
          checkout: res
        });
      });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false
    });
  }
  changemenu() {
    if(this.state.hmactive===""){
      this.setState({
        hmactive: "hmactive"
      });
      this.setState({
        hcv: "hamburger--collapse is-active"
      });
      
    }else{
      this.setState({
        hmactive: ""
      });
      this.setState({
        hcv: ""
      });

    }
    
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <header className="App__header">
              {!this.state.isCartOpen && (
                <div className="App__view-cart-wrapper">
                  <div className="homeStrip" />
                  <nav className="navbar navbar-default">
                    <div className="navbar-header">
                      <a className="logo">
                        <img alt="logo" src="/texture/logo.png"/>
                      </a>
                      <div className="hamburgermenu">
                       <button  onClick={this.changemenu} className={this.state.hcv+" hamburger"} type="button">
                            <span className="hamburger-box">
                             <span className="hamburger-inner"></span>
                             </span>
                          </button>
                      </div>
                    </div>
                    <ul className={this.state.hmactive+" nav main_menu navbar-nav"}>
                      <li className="">
                        <a href="https://flaunnt.com/pages/shop">SHOP</a>
                      </li>
                      <li>
                        <a href="https://flaunnt.com/pages/installation-videos">HOW TO INSTALL</a>
                      </li>
                    </ul>
                    <ul className={this.state.hmactive+" nav navbar-nav cart_menu pull-right"}>
                      <li>
                        <a href="https://flaunnt.com/account/login">
                          <img alt="user" src="/texture/ic1.png"/>
                        </a>
                      </li>
                      <li>
                        <a
                          className="App__view-cart"
                          onClick={() => this.setState({ isCartOpen: true })}
                        >
                          
                          <img alt="cart" src="/texture/ic2.png"/>
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div className="homeStripBottom" />

                  <h2 className="brandTittle text-center col-lg-12">
                    {this.state.collectiontitle}
                  </h2>
                </div>
              )}
            </header>
          </div>
        </div>
        <Products
          products={this.state.products}
          buynow={this.state.buynow}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
          addMultipleVariantToCart={this.addMultipleVariantToCart}
          addMultipleVariantToBuy={this.addMultipleVariantToBuy}
          withcut={this.state.withcut}
          ctitle={this.state.collectionhandle}
          ktitle={this.state.collectiontitle}
        />
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
        <Productdiscription 
         cimages={this.state.collectionimage}
        />
        <Newletter />
        <Usb />

        <Footer />
      </div>
    );
  }
}

export default Collection;
