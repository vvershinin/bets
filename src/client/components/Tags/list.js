import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import Tag from './tag';
import './tags.scss';


@translate(['common'])
class Tags extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {
            t,
            list } = this.props;
        return (
            <div>
                <div className="tagsTitle">{ t('tags') }</div>
                <div className="tagsList">
                    {
                        list && list.map((tag, index) => (
                            <Tag
                                key={ index }
                                name={ tag.name }
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
}

Tags.propTypes = {
    list: PropTypes.array.isRequired
};

export default Tags;

