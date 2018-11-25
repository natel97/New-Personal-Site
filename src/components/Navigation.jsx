import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './navigation.css';

export default class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: []
    }
  }
  static propTypes = {
    page: PropTypes.number,
    length: PropTypes.number
  }

  componentWillReceiveProps(next) {
    let i = 0;
    let items = [];
    while (i++ < this.props.length) {
      items.push(
        <div onClick={this.props.move} data-page={i - 1} className={`nav ${next.page === i - 1 ? 'selected' : ''}`} key={i}>
          <div data-page={i - 1} className="nav-pill"></div>
        </div>)
    }
    this.setState({ items })
  }

  componentDidMount() {
    this.componentWillReceiveProps({ page: this.props.page });
  }

  render() {
    return (
      <div style={{ position: 'fixed', left: '40vw', top: 0 }}>
        <div className="right-nav">
          {this.state.items}
        </div>
      </div>
    )
  }
}
