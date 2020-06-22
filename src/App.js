import React, { Component } from 'react';
import FEATURES from './store'
import Header from './header/Header'
import Features from './option/Features'
import Summary from './cart/Summary'
import './App.css';

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
