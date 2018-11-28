import React, { Component } from 'react'
import { Construction } from './Construction';
import './index.css';
import arrow from '../../assets/arrow.svg';
import Welcome from './Welcome';
import Navigation from '../Navigation';
import Skills from './Skills';
import Contact from '../Contact';

const THRESHOLD = 1;

export default class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            page: 0,
            canScroll: true,
            pages: [Welcome, Skills, Construction]
        };

        this.bindFunctions();
    }

    bindFunctions() {
        this.handleScroll = this.handleScroll.bind(this);
        this.allowScroll = this.allowScroll.bind(this);
        this.clickMove = this.clickMove.bind(this);
        this.navigateToNumber = this.navigateToNumber.bind(this);
        this.setTouch = this.setTouch.bind(this);
    }

    addEventListeners() {
        document.getElementById('up-arrow').addEventListener('click', this.clickMove);
        document.getElementById('down-arrow').addEventListener('click', this.clickMove);
        document.addEventListener('wheel', this.handleScroll);
        document.addEventListener('touchstart', this.setTouch);
        document.addEventListener('touchend', this.setTouch);
    }

    componentDidMount() {
        this.addEventListeners();
    }

    calculateSwype(event) {
        let newY = event.changedTouches[0].pageY;
        let num = (this.state.touch - newY) / (event.timeStamp - this.state.time);

        return { speed: Math.abs(num), up: num < 0 };
    }

    move(isUp) {
        if (this.state.canScroll && ((isUp && this.state.page > 0) || (!isUp && this.state.page < this.state.pages.length - 1)))
            this.setState({ page: this.state.page + (isUp ? -1 : 1), canScroll: false })
        setTimeout(this.allowScroll, 1000);
    }

    setTouch(event) {
        if (event.type === 'touchstart') {
            this.setState({ touch: event.changedTouches[0].pageY, time: event.timeStamp })
        } else if (event.type === 'touchend') {
            let swype = this.calculateSwype(event);
            if (swype.speed > THRESHOLD) {
                this.move(swype.up);
            }
        }
    }

    clickMove(event) {
        let isUp = event.target.id === 'up-arrow';
        this.move(isUp);
    }

    allowScroll() {
        this.setState({ canScroll: true });
    }

    handleScroll(event) {
        event.preventDefault();
        event.stopPropagation();
        if (this.state.canScroll) {
            let isUp = event.deltaY < 0;
            this.move(isUp);
        }
    }

    navigateToNumber(event) {
        this.setState({ page: +event.target.dataset.page });
    }

    render() {
        return (
            <div id="page" style={{ top: this.state.page * -100 + 'vh' }}>
                <div id="up-container">
                    <img style={{ opacity: +(this.state.page > 0) }} id='up-arrow' src={arrow} alt="up" />
                </div>
                {this.state.pages.map((Component, index) =>
                    <Component key={index} active={index === this.state.page} mobile={this.props.mobile} />)}
                <div id="down-container">
                    <img style={{ opacity: +(this.state.page < this.state.pages.length - 1) }} id='down-arrow' src={arrow} alt="up" />
                </div>
                <Navigation page={this.state.page} length={this.state.pages.length} move={this.navigateToNumber} />
                <Contact mobile={this.props.mobile} />
            </div>
        )
    }
}
