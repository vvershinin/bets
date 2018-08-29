import React from 'react';
import PropTypes from 'prop-types';
import { renderTime } from './seconds';

import './timer.scss';

/**
 * Timer module
 * A simple timer component.
 * */
export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = { clock: 0, time: '' };
        this.offset = null;
        this.interval = null;
    }

    componentDidMount() {
        this.play();
    }

    componentWillUnmount() {
        this.pause();
    }

    pause() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    play() {
        if (!this.interval) {
            this.offset = Date.now();
            this.interval = setInterval(this.update.bind(this), this.props.options.delay);
        }
    }

    reset() {
        const clockReset = 0;
        this.setState({ clock: clockReset });
        const time = renderTime(clockReset / 1000);
        this.setState({ time });
    }

    update() {
        let clock = this.state.clock;
        clock += this.calculateOffset();
        this.setState({ clock });
        const time = renderTime(clock / 1000);
        this.setState({ time });
    }

    calculateOffset() {
        const now = Date.now();
        const newOffset = now - this.offset;
        this.offset = now;
        return newOffset;
    }

    render() {
        const {
            time
        } = this.state;

        const {
            options: {
                prefix
            }
        } = this.props;

        return (
            <span className="react-timer">{time} {prefix}</span>
        );
    }
}

Timer.propTypes = {
    options: PropTypes.shape({
        prefix: PropTypes.string,
        offset: PropTypes.number,
        delay: PropTypes.number
    }).isRequired
};
