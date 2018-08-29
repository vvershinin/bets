import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import classNames from 'classnames';
import './index.scss';

const renderRadio = ({
    className,
    idx,
    type,
    input,
    label
}) => (
    <div
        className={ classNames(className, 'inputRadio') }
        key={ `key-radio-com-${idx}` }
    >
        <input
            { ...input }
            type={ type }
            className={ 'inputRadioInput' }
            key={ `key-radio-${idx}` }
            id={ `key-radio-${idx}` }
        />
        <label
            htmlFor={ `key-radio-${idx}` }
            className={ 'inputRadioLabel' }
            key={ `key-radio-label-${idx}` }
        >
            { label }
        </label>
    </div>
);

const Radio = ({
    name,
    idx,
    className,
    label,
    value
}) => (
    <Field
        name={ name }
        type={ 'radio' }
        component={ renderRadio }
        idx={ idx }
        className={ className }
        label={ label }
        value={ value }
    />
);

Radio.propTypes = {
    name: PropTypes.string.isRequired,
    className: PropTypes.string,
    idx: PropTypes.string.isRequired
};

Radio.defaultProps = {
    className: '',
    key: '0'
};

export default Radio;

