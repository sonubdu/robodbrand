import React, { Component } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';
class VariantSelector extends Component {
  responsive = {
    0: { items: 1 },
    600: { items: 8},
    1024: { items: 15 },
  };
  
  onSlideChange(e) {
    console.log('Item`s position during a change: ', e.item);
    console.log('Slide`s position during a change: ', e.slide);
  };

  onSlideChanged(e) {
    console.log('Item`s position after changes: ', e.item);
    console.log('Slide`s position after changes: ', e.slide);
  };
  
 
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
    let none = [];
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
      if (value.toString().search("Stone") === 0) {
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
      if (value.toString().search("Truecolor") === 0) {
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
    let camodata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let carbondata = carbon.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let dragondata = dragon.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let stonedata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let mattedata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let metaldata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let leatherdata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let truecolordata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });

    let wooddata = camo.map(value => {
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
      return (
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
      );
    });
    let robodata = robo.map(value => {
      let bgv =
        "/texture/phone_img.png";
      let style = {
        backgroundImage: "url(" + bgv + ")"
      };
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
        <img src={bgv}  alt={value} />
        </button>
        </div>
      );
    });
    const items = robodata;
    let robdesi={display:"none"}
    if(items.length > 0){
      robdesi={
        display:"block"
      };
    }
    return (
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
        {none}
        </div>
      
        <div className="robodesign" style={robdesi}>
        <a className="right carousel-control" onClick={() => this.Carousel._slidePrev()}  role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span> <span className="sr-only">Next</span> </a>
        <a className="left carousel-control"   onClick={() => this.Carousel._slideNext()} role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <span className="sr-only">Previous</span> </a>
      
        <AliceCarousel
        items={items}
        dotsDisabled={true}
        buttonsDisabled={true}
        ref={ el => this.Carousel = el }
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

export default VariantSelector;
