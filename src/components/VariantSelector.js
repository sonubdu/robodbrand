import React, {Component} from 'react';

class VariantSelector extends Component {
  render() {
   /* return (
     
      <select
        className="Product__option"
        name={this.props.option.name}
        key={this.props.option.name}
        onChange={this.props.handleOptionChange}
      >
        {this.props.option.values.map((value) => {
          return (
            <option value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</option>
          )
        })}
      </select>
    );
*/
    return (
     
      <div>
        {this.props.option.values.map((value) => {
          return (
            <button className="Product__option" onClick={this.props.handleOptionChange} name={this.props.option.name} value={value} key={`${this.props.option.name}-${value}`}>{`${value}`}</button>
          )
        })}
       </div>  
    );
  }
}

export default VariantSelector;
