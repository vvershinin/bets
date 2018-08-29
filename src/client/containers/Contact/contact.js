import React, { Component } from 'react';
import { translate } from 'react-i18next';
import { Helmet } from 'react-helmet';

import './contact.scss';

@translate(['contact'])
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { t } = this.props;
        return (
            <div>
                <Helmet>
                    <title>{ t('title') }</title>
                </Helmet>
                <p>{ t('title') }</p>
            </div>
        );
    }
}

export default Home;
