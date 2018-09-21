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
    let alldata = [];

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
        <div className="camodata">{camodata}</div>
        <div className="carbondata">{carbondata}</div>
        <div className="dragondata">{dragondata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
        <div className="camodata">{camodata}</div>
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
