import React, { Component } from "react";

class FakeCartItem extends Component {
  constructor(props) {
    super(props);
    this.decrementQuantity = this.decrementQuantity.bind(this);
    this.incrementQuantity = this.incrementQuantity.bind(this);
    this.state={qty:0};
  }
  componentWillMount(){
    this.setState({qty:1});
    
  }
  decrementQuantity(evt) {
    if(this.state.qty > 1){
    const updatedQuantity = this.state.qty - 1;
     this.setState({qty:updatedQuantity});
     let fakeCartData = localStorage.getItem("fakecart");
     fakeCartData = JSON.parse(fakeCartData);
     fakeCartData[evt.target.name]['qty']=updatedQuantity;
     localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
     this.props.upqty(updatedQuantity);
    }
  }

  incrementQuantity(evt) {
    if(this.state.qty < 10){
     const updatedQuantity = this.state.qty + 1;
     this.setState({qty:updatedQuantity});
     let fakeCartData = localStorage.getItem("fakecart");
     fakeCartData = JSON.parse(fakeCartData);
     fakeCartData[evt.target.name]['qty']=updatedQuantity;
     localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
     this.props.upqty(updatedQuantity);
    }
  }

  handleQuantityChange(evt) {
    if(evt.target.value > 0){
    let fakeCartData = localStorage.getItem("fakecart");
    fakeCartData = JSON.parse(fakeCartData);
    fakeCartData[evt.target.name]['qty']=evt.target.value;
    localStorage.setItem("fakecart", JSON.stringify(fakeCartData));
    }
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
              <div className="incrmnt_sec">
              <input
                className="inputCartInput"
                size="1"
                min="1"
                type="text"
                value={this.state.qty}
                name={data.parentid}
                onChange={this.handleQuantityChange}
              />
              <button
                className="decr"
                type="button"
                size="2"
                value="-"
                onClick={this.decrementQuantity}
                name={data.parentid}>
               </button>
                <button
                className="incr"
                type="button"
                size="2"
                value="+"
                onClick={this.incrementQuantity}
                name={data.parentid}>
                </button>
              </div>
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
              <strong>Rs. {Number(data.price * this.state.qty).toFixed(2)}</strong>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
}

export default FakeCartItem;
