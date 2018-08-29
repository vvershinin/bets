import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';
import IconCheck from './../../Icons/IconCheck';
import './index.scss';

const renderCheckbox = ({
    className,
    idx,
    input,
    label,
    type,
    meta: { touched, error, warning }
}) => (
    <div
        className={ classNames(className, 'inputCheckbox') }
        key={ `key-checkbox-com-${idx}` }
    >
        <input
            { ...input }
            type={ type }
            className={ 'inputCheckboxInput' }
            key={ `key-checkbox-${idx}` }
            id={ `key-checkbox-${idx}` }
        />
        <label
            htmlFor={ `key-checkbox-${idx}` }
            className={ 'inputCheckboxLabel' }
            key={ `key-label-${idx}` }
        >
            <IconCheck className={ 'inputCheckboxCheck' } />
            { label }
            {touched &&
                ((error && <span>{error}</span>) ||
                    (warning && <span>{warning}</span>))}
        </label>
    </div>
);

const Checkbox = ({
    name,
    idx,
    className,
    label
}) => (
    <Field
        name={ name }
        type={ 'checkbox' }
        component={ renderCheckbox }
        idx={ idx }
        className={ className }
        label={ label }
    />
);

Checkbox.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    idx: PropTypes.string.isRequired
};

Checkbox.defaultProps = {
    className: ''
};

export default Checkbox;

