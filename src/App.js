import React, { Component } from 'react';
import './App.css';
import Index from './components/Index/Index';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.checkForMobile = this.checkForMobile.bind(this);
  }

  componentDidMount() {
    this.checkForMobile();
    window.addEventListener('resize', this.checkForMobile);
  }

    
  checkForMobile() {
    this.setState({ mobile: window.outerWidth < 450 });
  }

  render() {
    return (
      <div className="App">
        <Index mobile={this.state.mobile} />
      </div>
    );
  }
}

export default App;
