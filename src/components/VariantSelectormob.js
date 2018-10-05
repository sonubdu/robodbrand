import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
class VariantSelectormob extends Component {
  responsive = {
    0: { items: 5 },
    600: { items: 12 },
    800: { items: 15 },
    1024: { items: 15 }
  };

  onSlideChange(e) {
    console.log("Item`s position during a change: ", e.item);
    console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
    console.log("Item`s position after changes: ", e.item);
    console.log("Slide`s position after changes: ", e.slide);
  }

  render() {
    let carbon = [];
    let camo = [];
    let dragon = [];
    let stone = [];
    let matte = [];
    let metal = [];
    let leather = [];
    let truecolor = [];
    let wood = [];
    let none = ["none"];
    let robo = [];

    this.props.option.values.map(value => {
      if (value.toString().search("Camo") === 0) {
        camo.push(value);
      }
      if (value.toString().search("Carbon") === 0) {
        carbon.push(value);
      }
      if (value.toString().search("Dragon") === 0) {
        dragon.push(value);
      }
      if (value.toString().search("Marble") === 0) {
        stone.push(value);
      }
      if (value.toString().search("Matte") === 0) {
        matte.push(value);
      }
      if (value.toString().search("Metal") === 0) {
        metal.push(value);
      }
      if (value.toString().search("Leather") === 0) {
        leather.push(value);
      }
      if (value.toString().search("Tc") === 0) {
        truecolor.push(value);
      }
      if (value.toString().search("Wood") === 0) {
        wood.push(value);
      }
      if (value.toString().search("Robo") === 0) {
        robo.push(value);
      }
      return true;
    });
   
    let camoCount=-1;
    let camodata = camo.map(value => {
      camoCount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let camoClassName="Product__option";
      if(camoCount===Math.ceil(camo.length/2)){
        camoClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={camoClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        >
       
        </button>
      
      );
    });
    
    let carbonCount=-1;
    let carbondata = carbon.map(value => {
      carbonCount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let carbonClassName="Product__option";
      if(carbonCount===Math.ceil(carbon.length/2)){
        carbonClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={carbonClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
          </button>
        
      );
    });
    let dragonCount=-1;
    let dragondata = dragon.map(value => {
      dragonCount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let dragonClassName="Product__option";
      if(dragonCount===Math.ceil(dragon.length/2)){
        dragonClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={dragonClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
        </button>
      
      );
    });
    let stonecount=-1;
    let stonedata = stone.map(value => {
      stonecount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let stoneClassName="Product__option";
      if(stonecount===Math.ceil(stone.length/2)){
        stoneClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={stoneClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
        </button>
      
      );
    });
    
    let mattecount=-1;
    let mattedata = matte.map(value => {
      mattecount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let matteClassName="Product__option";
      if(mattecount===Math.ceil(matte.length/2)){
        matteClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={matteClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });
    let metalcount=-1;
    let metaldata = metal.map(value => {
      metalcount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let metalClassName="Product__option";
      if(metalcount===Math.ceil(metal.length/2)){
        metalClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={metalClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
          </button>
        
      );
    });
     let leathercount=-1;
    let leatherdata = leather.map(value => {
      leathercount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let leatherClassName="Product__option";
      if(leathercount===Math.ceil(leather.length/2)){
        leatherClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={leatherClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
          </button>
        
      );
    });
    let truecolorcount=-1;
    let truecolordata = truecolor.map(value => {
      truecolorcount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let truecolorClassName="Product__option";
      if(truecolorcount===Math.ceil(truecolor.length/2)){
        truecolorClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={truecolorClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
        </button>
      
      );
    });
     let woodcount=-1;
    let wooddata = wood.map(value => {
      woodcount++;
      let bgv =
        "/texture/" +
        value
          .toString()
          .replace(" ", "-")
          .toLowerCase() +
        ".png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
      let woodClassName="Product__option";
      if(woodcount===Math.ceil(wood.length/2)){
        woodClassName="Product__option breakrow";
      }
      return (
        <button
          data-tip={value}
          style={style}
          className={woodClassName}
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}>
        
          </button>
        
      );
    });
    let robodata = robo.map(value => {
      let bgv = "/texture/phone_img.png";

      return (
        <div>
          <button
            title={value}
            className="Product__option1"
            onClick={this.props.handleOptionChange}
            name={this.props.option.name}
            value={value}
            key={`${this.props.option.name}-${value}`}
          >
            <img src={bgv} alt={value} />
          </button>
        </div>
      );
    });

    let nonedata = none.map(value => {
      return (
        <button
          data-tip={value}
          className="Product__option"
          name={this.props.option.name}
          key={`${this.props.option.name}-${value}`}
          value={value}
          onClick={() => this.props.removeFakeCartItem(this.props.parentid)}
          >
        <span className="glyphicon glyphicon-trash"></span>
         </button>
      );
    });
    const items = robodata;
    let robdesi = { display: "none" };
    if (items.length > 0) {
      robdesi = {
        display: "block"
      };
    }
    return (
      <div>
        <div className="diffCol">
          <div className="camodata">
            <h6 className="title">camo</h6>
            {camodata}
          </div>
          <div className="carbondata">
            <h6 className="title">carbon fiber</h6>
            {carbondata}
          </div>
          <div className="dragondata">
            <h6 className="title">dragon</h6>
            {dragondata}
          </div>

          <div className="camodata">
            <h6 className="title">stone</h6>
            {stonedata}
          </div>
          <div className="camodata">
            <h6 className="title">matte</h6>
            {mattedata}
          </div>
          <div className="camodata">
            <h6 className="title">metal</h6>
            {metaldata}
          </div>
          <div className="camodata">
            <h6 className="title">leather</h6>
            {leatherdata}
          </div>
          <div className="camodata">
            <h6 className="title">true color</h6>
            {truecolordata}
          </div>
          <div className="camodata">
            <h6 className="title">wood</h6>
            {wooddata}
          </div>
          <div className="camodata">
            <h6 className="title">none</h6>
            {nonedata}
          </div>
        </div>

        <div className="robodesign" style={robdesi}>
          <a
            className="right carousel-control"
            onClick={() => this.Carousel._slidePrev()}
            role="button"
            data-slide="next"
          >
            {" "}
            <span
              className="glyphicon glyphicon-chevron-right"
              aria-hidden="true"
            />{" "}
            <span className="sr-only">Next</span>{" "}
          </a>
          <a
            className="left carousel-control"
            onClick={() => this.Carousel._slideNext()}
            role="button"
            data-slide="prev"
          >
            {" "}
            <span
              className="glyphicon glyphicon-chevron-left"
              aria-hidden="true"
            />{" "}
            <span className="sr-only">Previous</span>{" "}
          </a>

          <AliceCarousel
            items={items}
            dotsDisabled={true}
            buttonsDisabled={true}
            ref={el => (this.Carousel = el)}
            autoPlay={false}
            fadeOutAnimation={false}
            mouseDragEnabled={false}
            playButtonEnabled={false}
            responsive={this.responsive}
            autoPlayActionDisabled={true}
            onSlideChange={this.onSlideChange}
            onSlideChanged={this.onSlideChanged}
          />
        </div>
      </div>
    );
  }
}

export default VariantSelectormob;