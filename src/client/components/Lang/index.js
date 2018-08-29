import React from 'react';
import PropTypes from 'prop-types';

import {
    Dropdown,
    Flag
} from 'semantic-ui-react';

import {
    DEFAULT_LANG_FLAG,
    FLAG
} from '../../constants/application';

class Lang extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lang: props.lang || DEFAULT_LANG_FLAG
        };
    }

    getLangOption = lang =>
        lang.map((value, idx) => (
            {
                text: <Flag name={ value } />,
                key: idx,
                value
            })
        );
    onChangeDD = (e, { value }) => {
        const lang = value === 'us' ? 'en' : value;

        this.props.changeLang(lang);
        this.setState({ lang: value });
    }

    render() {
        return (
            <div className="language">
                <Dropdown
                    options={ this.getLangOption(FLAG) }
                    trigger={ <Flag name={ this.state.lang } /> }
                    onChange={ this.onChangeDD }
                />
            </div>
        );
    }
}

Lang.propTypes = {
    lang: PropTypes.string,
    changeLang: PropTypes.func.isRequired
};

Lang.defaultProps = {
    lang: DEFAULT_LANG_FLAG
};

export default Lang;
