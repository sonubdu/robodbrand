import React, { Component } from 'react';
import Cart from '../../../components/Cart';
import Products from '../../../components/Products';
class Collection extends Component {
  constructor() {
    super();

    this.state = {
      isCartOpen: false,
      checkout: { lineItems: [] },
      products: [],
      shop: {},
      cid:"Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzYyNjAzNzg4MzU3"
    };

    this.handleCartClose = this.handleCartClose.bind(this);
    this.addVariantToCart = this.addVariantToCart.bind(this);
    this.addMultipleVariantToCart = this.addMultipleVariantToCart.bind(this);
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
  }
  
   setProducts(id){
    this.props.client.collection.fetchWithProducts(id).then((collection) => {
      this.setState({
         products: collection.products,
       });
     });

   }
   
  componentWillMount() {
    this.props.client.checkout.create().then((res) => {
      this.setState({
        checkout: res,
      });
    });
      this.setProducts(this.state.cid);
       if(this.props.shopid!=="undefined"){
        this.props.client.collection.fetchAllWithProducts().then((collections) => {
          // Do something with the collections
          let ccoun=0;
          for(var key in collections){
             if(collections[key].handle===this.props.shopid){
              ccoun++;
           this.setProducts(collections[key].id);
             
            }
          }
          if(ccoun===0){
            this.setProducts(this.state.cid);
            }
        });
       }
     
   
/*
    this.props.client.product.fetchAll().then((res) => {
      this.setState({
        products: res,
      });
    });
*/
    this.props.client.shop.fetchInfo().then((res) => {
      this.setState({
        shop: res,
      });
    });
  }

  addVariantToCart(variantId, quantity){
    this.setState({
      isCartOpen: true,
    });

    const lineItemsToAdd = [{variantId, quantity: parseInt(quantity, 10)}]
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }
  addMultipleVariantToCart(carddata){
    this.setState({
      isCartOpen: true,
    });
    const lineItemsToAdd=carddata 
    const checkoutId = this.state.checkout.id
    return this.props.client.checkout.addLineItems(checkoutId, lineItemsToAdd).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  updateQuantityInCart(lineItemId, quantity) {
    const checkoutId = this.state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]

    return this.props.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  removeLineItemInCart(lineItemId) {
    const checkoutId = this.state.checkout.id

    return this.props.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      this.setState({
        checkout: res,
      });
    });
  }

  handleCartClose() {
    this.setState({
      isCartOpen: false,
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App__header">
          {!this.state.isCartOpen &&
            <div className="App__view-cart-wrapper">
              <button className="App__view-cart" onClick={()=> this.setState({isCartOpen: true})}>Cart</button>
            </div>
          }
          <div className="App__title">
            <h1>{this.state.shop.name}: React Example</h1>
            <h2>{this.state.shop.description}</h2>
          </div>
        </header>
        <Products
          products={this.state.products}
          client={this.props.client}
          addVariantToCart={this.addVariantToCart}
          addMultipleVariantToCart={this.addMultipleVariantToCart}
        />
        <Cart
          checkout={this.state.checkout}
          isCartOpen={this.state.isCartOpen}
          handleCartClose={this.handleCartClose}
          updateQuantityInCart={this.updateQuantityInCart}
          removeLineItemInCart={this.removeLineItemInCart}
        />
      </div>
    );
  }
}

export default Collection;
