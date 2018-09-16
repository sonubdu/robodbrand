import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import Shop from './containers/Shop/Shop';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="App">
          <Shop  client={this.props.client}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
