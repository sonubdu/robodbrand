import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
class VariantSelector extends Component {
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

    let mattedata = matte.map(value => {
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

    let metaldata = metal.map(value => {
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

    let leatherdata = leather.map(value => {
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

    let truecolordata = truecolor.map(value => {
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

    let wooddata = wood.map(value => {
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
    let robodata = carbon.map(value => {
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
        <div>
        <button
          title={value}
          style={style}
          className="Product__option"
          onClick={this.props.handleOptionChange}
          name={this.props.option.name}
          value={value}
          key={`${this.props.option.name}-${value}`}
        />
        </div>
      );
    });
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
      
        <div className="robodesign">
       <Carousel showStatus={false} showIndicators={false} showThumbs={false} centerMode centerSlidePercentage={5}>
       {robodata}
       {robodata}
       {robodata}
       {robodata}
       {robodata}
       {robodata}
       {robodata}
       {robodata}
       </Carousel>
        </div>
      </div>
    );
  }
}

export default VariantSelector;
