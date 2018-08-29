/**
 * WindowSizeListener
 * React component for listening to window resize events
 */
import React from 'react';
import PropTypes from 'prop-types';
import debounce from '../../utils/debounce';

class WindowSizeListener extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'WindowSizeListener';
        this.listeners = [];
        this.DEBOUNCE_TIME = this.props.debounceTime;
        this.onResize = this.onResize.bind(this);
    }

    shouldComponentUpdate(nextProps) {
        return nextProps.onResize !== this.props.onResize;
    }

    componentDidMount() {
        // Defer creating debouncedResize until it's mounted
        // This allows users to change DEBOUNCE_TIME if they want
        // If there's no listeners, we need to attach the window listener
        if (!this.listeners.length) {
            this.debouncedResize = debounce(
                this.onResize,
                this.DEBOUNCE_TIME
            );
            window.addEventListener('resize', this.debouncedResize, false);
        }
        this.listeners.push(this.props.onResize);
        this.onResize();
    }

    componentWillUnmount() {
        const idx = this.listeners.indexOf(this.props.onResize);
        this.listeners.splice(idx, 1);
        if (!this.listeners.length) {
            window.removeEventListener('resize', this.debouncedResize, false);
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.onResize !== this.props.onResize) {
            const idx = this.listeners.indexOf(this.props.onResize);
            this.listeners.splice(idx, 1, nextProps.onResize);
        }
    }

    /**
     * Resize handler
     * Gets the window size and calls eacg listener
     * @private
     */
    onResize() {
        const windowWidth = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;
        const windowHeight = window.innerHeight ||
            document.documentElement.clientHeight ||
            document.body.clientHeight;

        this.listeners.forEach((listener) => {
            listener({ windowWidth, windowHeight });
        });
    }

    render() {
        return (this.props.children ? this.props.children : null);
    }
}

WindowSizeListener.propTypes = {
    onResize: PropTypes.func.isRequired,
    debounceTime: PropTypes.number
};

WindowSizeListener.defaultProps = {
    debounceTime: 100
};

export default WindowSizeListener;
