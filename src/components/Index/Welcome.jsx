import React, { Component } from 'react'
import nl from '../../assets/nl.png'
import './welcome.css';
import PropTypes from 'prop-types';


export default class Welcome extends Component {

  constructor(props) {
    super(props);
    this.state = {}

    this.checkForMobile = this.checkForMobile.bind(this);
  }

  static propTypes = {
    active: PropTypes.bool
  }

  componentDidMount() {
    this.checkForMobile();
    window.addEventListener('resize', this.checkForMobile);
  }
  
  checkForMobile() {
    this.setState({ mobile: window.outerWidth < 450 });
  }

  image = (<div>  <img src={nl} alt='Nathanial Lubitz' />  </div>)

  render() {
    return (
      <div className="single-page">
        <div id="top-content">
          <div className="contents">
            <div>
              <h2>Hello, I'm Nathanial Lubitz</h2>
              <h4>Welcome to my webpage!</h4>
            </div>
            {this.state.mobile && this.image}
            <div>
              <p>I am a self-motivated software engineer with a passion for frontend development.</p>
            </div>
          </div>
          {!this.state.mobile && this.image}
        </div>
      </div>
    )
  }
}
