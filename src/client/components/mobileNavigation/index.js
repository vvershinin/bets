import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import './index.scss';
import Transition from '../../components/Transition';
import Button from '../../components/Button';

class MobileNavLogged extends React.Component {
    state = {
        isVisibleRight: false,
        isVisibleLeft: false
    };

    handleRight = () => {
        this.setState({
            isVisibleRight: !this.state.isVisibleRight
        });
    };

    handleLeft = () => {
        this.setState({
            isVisibleLeft: !this.state.isVisibleLeft
        });
    };

    render() {
        const {
            className,
            leftElement,
            leftButton,
            leftTitle,
            leftClass,
            rightElement,
            rightTitle,
            rightButton,
            rightClass
        } = this.props;

        return (
            <div>
                <Transition
                    isVisible={ this.state.isVisibleLeft }
                    animation={ 'slide left' }
                    duration={ 500 }
                >
                    <div className="slideWindow slideWindowLeft">
                        <div className="slideWindowHeader">
                            <Button
                                className="nav-toggle active slideWindowCloseBtn"
                                onClick={ this.handleLeft }
                            ><i /></Button>
                            <div className="slideWindowText">{ leftTitle }</div>
                        </div>
                        <div className="slideWindowWrapper">
                            { leftElement }
                        </div>
                    </div>
                </Transition>
                <Transition
                    isVisible={ this.state.isVisibleRight }
                    animation={ 'slide left' }
                    duration={ 500 }
                >
                    <div className="slideWindow slideWindowRight">
                        <div className="slideWindowHeader">
                            <Button
                                className="nav-toggle active slideWindowCloseBtn"
                                onClick={ this.handleRight }
                            ><i /></Button>
                            <div className="slideWindowText">{ rightTitle }</div>
                        </div>
                        <div className="slideWindowWrapper">
                            { rightElement }
                        </div>
                    </div>
                </Transition>
                <div className={ classNames('footerMobileNav', className) }>
                    <div className={ classNames('footerMobileNavItem', leftClass) } onClick={ this.handleLeft }>
                        { leftButton }
                    </div>
                    <div className={ classNames('footerMobileNavItem', rightClass) } onClick={ this.handleRight }>
                        { rightButton }
                    </div>
                </div>
            </div>
        );
    }
}

MobileNavLogged.propTypes = {
    className: PropTypes.string.isRequired,
    leftElement: PropTypes.node.isRequired,
    leftButton: PropTypes.node.isRequired,
    leftTitle: PropTypes.string.isRequired,
    leftClass: PropTypes.string.isRequired,
    rightElement: PropTypes.node.isRequired,
    rightTitle: PropTypes.string.isRequired,
    rightButton: PropTypes.node.isRequired,
    rightClass: PropTypes.string.isRequired
};

MobileNavLogged.defaultProps = {};

export default MobileNavLogged;
