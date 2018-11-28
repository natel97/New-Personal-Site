import React from 'react'
import nl from '../../assets/nl.png'
import './welcome.css';
import PropTypes from 'prop-types';


const Welcome = (props) => {


  let image = (<div>  <img src={nl} alt='Nathanial Lubitz' />  </div>)

    return (
      <div className="single-page">
        <div id="top-content">
          <div className="contents">
            <div>
              <h2>Hello, I'm Nathanial Lubitz</h2>
              <h4>Welcome to my webpage!</h4>
            </div>
            {props.mobile && image}
            <div>
              <p>I am a self-motivated software engineer with a passion for frontend development.</p>
            </div>
          </div>
          {!props.mobile && image}
        </div>
      </div>
    )
  }

Welcome.propTypes = {
  active: PropTypes.bool,
  mobile: PropTypes.bool
}

export default Welcome