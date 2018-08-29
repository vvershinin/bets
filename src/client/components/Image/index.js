import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as Semantic from 'semantic-ui-react';

const PendingPool = {};
const ReadyPool = {};

class ImageCell extends Component {
    constructor(props) {
        super(props);
        this.loadImage = this.loadImage.bind(this);
        this.onLoadImage = this.onLoadImage.bind(this);
        this.state = {
            ready: false
        };
    }

    componentWillMount() {
        this.loadImage(this.props.src);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.src !== this.props.src) {
            this.setState({ src: null });
            this.loadImage(nextProps.src);
        }
    }

    loadImage(src) {
        if (ReadyPool[src]) {
            this.setState({ src });
            return;
        }

        if (PendingPool[src]) {
            PendingPool[src].push(this.onLoadImage);
            return;
        }
        PendingPool[src] = [this.onLoadImage];

        if (typeof Image === 'undefined') return;

        const img = new Image();

        img.onload = () => {
            PendingPool[src].forEach((callback) => {
                callback(src);
            });
            delete PendingPool[src];
            img.onload = null;
            src = undefined;
        };
        img.src = src;
    }

    onLoadImage(src) {
        ReadyPool[src] = true;
        if (src === this.props.src) {
            this.setState({
                src
            });
        }
    }
    getStyle = src => ({
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%'
    });

    render() {
        return (

            this.state.src ?
                <div style={ this.getStyle(this.state.src) } className={ this.props.className } />
                :
                <Semantic.Dimmer active>
                    <Semantic.Loader />
                </Semantic.Dimmer>
        );
    }
}

ImageCell.propTypes = {
    src: PropTypes.string.isRequired,
    className: PropTypes.string
};

ImageCell.defaultProps = {
    className: ''
};

export default ImageCell;
