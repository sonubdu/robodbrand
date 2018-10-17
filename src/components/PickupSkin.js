import React, { Component } from "react";
class PickupSkin extends Component {
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

    this.removeFakeCartItem = this.removeFakeCartItem.bind(this);
    this.getFakeCartItem = this.getFakeCartItem.bind(this);
    this.handleClick = this.handleClick.bind(this);

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
  handleClick() {
    
    this.props.onStatus(true);
    
    this.props.showpiker();
    
  }
  render() {
 
    let fakerdata = this.props.status
      ? this.state.dataaftereffect
      : this.props.FakeCartdata;
      let bstyle ={};

    let data = "";
    let Total = 0;
    for (var key in fakerdata) {
      data = fakerdata[key];
      Total = Number(Total) + Number(data.price * data.qty);
      break;
     }
if(Total > 0){
  let bgv =
  "/texture/" +
  data.title
  .toString()
  .replace("With logo", "")
  .replace(" ", "-")
  .replace(" ", "")
  .toLowerCase() +
  ".png";
bstyle = {
backgroundImage: "url(" + bgv + ")"
};
}
    if (Total === 0) {
      return (
        <div className={"col-lg-12 "+bstyle+this.state.qtychanged}><button type="button" onClick={this.handleClick} className="pick_skin">Pick a Skin</button>
        </div>
      );
    }
    return (
      <div className="row after_pick">
      <div className="col-xs-3"><button onClick={() => this.handleClick(data.parentid)}  className="Product__option texture_bg" style={bstyle}></button></div>
      <div className="col-xs-6"><button onClick={() => this.handleClick(data.parentid)}  type="button" className="pick_skin">{data.title.toString().replace("With logo",'')}</button></div>
      <div className="col-xs-3"><button className="Product__option des_btn none"  onClick={() => this.removeFakeCartItem(data.parentid)}><img className="trash_icn" alt="dlt"  src="/texture/dlt.png" /></button></div>
      </div>
    );
  }
}

export default PickupSkin;
