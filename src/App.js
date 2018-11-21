import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>
            Under Construction
          </h2>
          <div>
            <p>This website has been outdated for a while!</p>
            <p>
              <span>Don't believe me? </span>
              <a href="http://old.nathaniallubitz.com">See for yourself!</a>
            </p>
          </div>
          <small>
            <span>Feel free to check out my </span>
            <a href="https://repo.nathaniallubitz.com/explore/repos">code repository</a>
            <span> and my </span>
            <a href="https://github.com/natel97">GitHub account</a>
            <span> in the meantime.</span>
          </small>
        </div>
      </div>
    );
  }
}

export default App;
