import React, { Component } from 'react';

// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes

import FEATURES from './store'
import Header from './header/Header'
import Features from './option/Features'
import Summary from './cart/Summary'
import './App.css';



// This object will allow us to
// easily convert numbers into US dollar values
const USCurrencyFormat = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});

class App extends Component {

  state = {
    features : FEATURES.FEATURES ,
    selected: FEATURES.SELECTED
  };
    //for cart
  updateFeature = (feature, newValue) => {
    const selected = Object.assign({}, this.state.selected);
    selected[feature] = newValue;
    this.setState({
      selected
    });
  };

  render() {

    return (
      <div className="App">
        <Header/>
        <main>
        
          <Features
           USFormat={USCurrencyFormat}
           features={this.state.features} 
           updateFeature={this.updateFeature}
           selected={this.state.selected}
          />

          <Summary
          selected={this.state.selected}
          />
        </main>
      </div>
    );
  }
}

export default App;
