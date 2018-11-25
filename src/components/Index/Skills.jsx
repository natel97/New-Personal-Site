import React, { Component } from 'react'
import './skills.css'
// import PropTypes from 'prop-types'

export default class Skills extends Component {
  static propTypes = {
  }

  constructor(props) {
    super(props);
    this.state = { skills: <div></div> };
  }

  componentDidMount() {
    let skills = {
      'C#': {
        _: 6,
        'ASP.NET': 4,
        XUnit: 4
      },
      Java: {
        _: 8,
        Spring: 7,
        JUnit: 7
      },
      Groovy: {
        _: 3,
        Spock: 4,
        Grails: 3
      },
      SQL: {
        _: 7
      },
      Mobile: {
        _: 6,
        'Ionic Framework': 6,
        'React Native': 7,
        'Android Studio': 6,
        'Objective-C': 4,
        Swift: 4,
        'PWA': 7
      },
      HTML: {
        _: 6
      },
      CSS: {
        _: 7,
        SASS: 7
      }, 
      JavaScript: {
        _: 8,
        React: 7,
        Angular: 8,
        AngularJS: 6,
        NodeJS: 7,
        JQuery: 8        
      }
    }
    
    let tempSkills = Object.keys(skills).map((skill, index) => (
    <div key={index} className='single-skill'>
      <p>{skill}: {skills[skill]._}</p>
      <div>
        {Object.keys(skills[skill]).filter(x => x !== '_').map((f, i) => (<div key={i}>{f}: {skills[skill][f]}</div>))}
      </div>
    </div>))

    this.setState({ skills: tempSkills })
  }

  render() {
    return (
      <div className='single-page'>
        <h3>Skills</h3>
        <p>Skills are ranked out of a scale of 10!</p>
        <div className='all-skills'>
          {this.state.skills}
        </div>
      </div>
    )
  }
}
