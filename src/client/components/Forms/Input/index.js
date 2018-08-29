import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';

import './index.scss';

const renderField = ({
    className,
    idx,
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div className={ classNames(className, 'inputField') }>
        <input
            { ...input }
            placeholder={ label }
            type={ type }
            key={ `key-input-com-${idx}` }
            className={ 'inputFieldInput' }
        />
        {touched &&
        ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
    </div>
);

const inputField = ({
    name,
    idx,
    className,
    label,
    type
}) => (
    <Field
        name={ name }
        type={ type }
        component={ renderField }
        idx={ idx }
        className={ className }
        label={ label }
    />
);

inputField.propTypes = {
    name: PropTypes.string.isRequired,
    idx: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    className: PropTypes.string
};

inputField.defaultProps = {
    className: ''
};

export default inputField;

