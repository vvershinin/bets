import React, { Component } from 'react';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';

import './home.scss';

@translate(['home'])
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <p>{ t('title') } + 123456</p>
            </div>
        );
    }
}

const mapStateToProps = state => (state);

export default connect(mapStateToProps)(Home);
