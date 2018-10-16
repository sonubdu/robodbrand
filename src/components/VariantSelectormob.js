import React, { Component } from "react";
class VariantSelectormob extends Component {
  responsive = {
    0: { items: 4 },
    600: { items: 7 },
    800: { items: 11 },
    1024: { items: 12 }
  };


  onSlideChange(e) {
    //console.log("Item`s position during a change: ", e.item);
    //console.log("Slide`s position during a change: ", e.slide);
  }

  onSlideChanged(e) {
   // console.log("Item`s position after changes: ", e.item);
   // console.log("Slide`s position after changes: ", e.slide);
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
    // withoutlogodata
    let vcarbon = [];
    let vcamo = [];
    let vdragon = [];
    let vstone = [];
    let vmatte = [];
    let vmetal = [];
    let vleather = [];
    let vtruecolor = [];
    let vwood = [];
    let vrobo = [];

    this.props.option.values.map(value => {
      if (value.toString().search("Camo") === 0) {
        if(value.toString().includes('With logo')){
          vcamo.push(value);
        }else{
          camo.push(value);
        }
      }
      if (value.toString().search("Carbon") === 0) {
         if(value.toString().includes('With logo')){
          vcarbon.push(value);
        }else{
          carbon.push(value);
        }
      }
      if (value.toString().search("Dragon") === 0) {
   
        if(value.toString().includes('With logo')){
          vdragon.push(value);
        }else{
          dragon.push(value);
        }
      }
      if (value.toString().search("Marble") === 0) {
        
        if(value.toString().includes('With logo')){
          vstone.push(value);
        }else{
          stone.push(value);
        }
      }
      if (value.toString().search("Matte") === 0) {
        
        if(value.toString().includes('With logo')){
          vmatte.push(value);
        }else{
          matte.push(value);
        }
      }
      if (value.toString().search("Metal") === 0) {
       
        if(value.toString().includes('With logo')){
          vmetal.push(value);
        }else{
          metal.push(value);
        }
      }
      if (value.toString().search("Leather") === 0) {
       
        if(value.toString().includes('With logo')){
          vleather.push(value);
        }else{
          leather.push(value);
        }
      }
      if (value.toString().search("Tc") === 0) {
     
        if(value.toString().includes('With logo')){
          vtruecolor.push(value);
        }else{
          truecolor.push(value);
        }
      }
      if (value.toString().search("Wood") === 0) {

        if(value.toString().includes('With logo')){
          vwood.push(value);
        }else{
          wood.push(value);
        }
      }
      if (value.toString().search("Robo") === 0) {
        
        if(value.toString().includes('With logo')){
          vrobo.push(value);
        }else{
          robo.push(value);
        }
      }
      return true;
    });

    if(this.props.tabid===1){
      if(this.props.applecut==="With Apple Cut"){
       camo =vcamo;
       carbon=vcarbon;
       dragon = vdragon;
       stone = vstone;
       matte = vmatte;
       metal = vmetal;
       leather = vleather;
       truecolor = vtruecolor;
       wood = vwood;
       robo = vrobo;
      }
     }
   
    let camoCount=-1;
    let camodata = camo.map(value => {
      camoCount++;
      let bgv =
        "/texture/" +
        value
        .toString()
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
      .replace("With logo", "")
      .replace(" ", "-")
      .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
      .replace("With logo", "")
      .replace(" ", "-")
      .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
        .replace("With logo", "")
        .replace(" ", "-")
        .replace(" ", "")
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
      <div className={"time"+Date.now()}>
	  <div className="var_head"><h3>Pick a Skin</h3> <button type="button" onClick={this.props.hidepikker} className="hd_pkr">x</button></div>
	  
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

        <div className="robodesign robo_itm" style={robdesi}>
        <h6 className="title">Robobull Design</h6>
        {items}
         
        </div>
      </div>
    );
  }
}

export default VariantSelectormob;
