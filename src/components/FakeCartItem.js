import React, {Component} from 'react';

class FakeCartItem extends Component {
  constructor(props) {
    super(props);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    let data=this.props.itemdata;
    
  
    return (
      <ul className="drow">
      <li className="dark_grey block">
      <ul>
        <li>
        {data.parent}   
        </li>
        <li>
        {data.title}   
        </li>
        </ul>
      </li>
      <li className="light_grey block">
      <ul>
      <li>
      {data.price}   
      </li>
      <li>
      <input size="1" min="1" type="text" defaultValue={1} onChange={this.handleQuantityChange}></input>
        <input type="button" size="2" value="X" onClick={() => this.props.removeFakeCartItem(data.parentid)}/>
      </li>
      <li>
     <h2> {data.price}</h2> 
      </li>
      </ul>
      </li>
      </ul>
    );
  }
}

export default FakeCartItem;
