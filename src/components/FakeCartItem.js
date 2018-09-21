import React, { Component } from "react";

class FakeCartItem extends Component {
  constructor(props) {
    super(props);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
  }

  decrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity - 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  incrementQuantity(lineItemId) {
    const updatedQuantity = this.props.line_item.quantity + 1;
    this.props.updateQuantityInCart(lineItemId, updatedQuantity);
  }

  render() {
    let data = this.props.itemdata;

    return (
      <ul className="drow">
        <li className="drow_left">
          <ul>
            <li>
              <strong>{data.parent}</strong>
            </li>
            <li>{data.title}</li>
          </ul>
        </li>
        <li className="drow_right">
          <ul>
            <li>Rs. {data.price}</li>
            <li>
              <input
                className="inputCartInput"
                size="1"
                min="1"
                type="text"
                defaultValue={1}
                onChange={this.handleQuantityChange}
              />
              <button
                className="deleteBtn"
                type="button"
                size="2"
                value="X"
                onClick={() => this.props.removeFakeCartItem(data.parentid)}
              >
                <i className="fa fa-trash-o" aria-hidden="true" />
              </button>
            </li>
            <li className="text-right">
              <strong>Rs. {data.price}</strong>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default FakeCartItem;
