import React from 'react';
import WindowSizeListener from './index';

export function withWindowSizeListenerHOC(Component, onResizeFunc) {
    return class withWindowSizeListener extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                windowSize: {
                    windowWidth: null,
                    windowHeight: null
                }
            };
        }

        render() {
            return (
                <WindowSizeListener
                    onResize={
                        (windowSize) => {
                            onResizeFunc && onResizeFunc();
                            this.setState({ windowSize });
                        }
                    }
                >
                    <Component { ...this.props } windowSize={ this.state.windowSize } />
                </WindowSizeListener>
            );
        }
    };
}

export default withWindowSizeListenerHOC;
