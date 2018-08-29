import React from 'react';
import { reduxForm } from 'redux-form';
import { translate } from 'react-i18next';

import Checkbox from './Checkbox';
import Radio from './Radio';
import Input from './Input';
import Button from './../Button';

import './registration.scss';

const validate = (values) => {
    const errors = {};

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/gi.test(values.email)) {
        errors.email = 'Invalid email address';
    }

    if (!values.password) {
        errors.password = 'Required';
    } else if (values.password.length < 6) {
        errors.password = 'Min length 6.';
    } else if (values.password.length > 30) {
        errors.password = 'Max length 30.';
    } else if (!/^[a-zA-Z0-9]+$/g.test(values.password)) {
        errors.password = 'Pattern is not matched';
    }

    if (!values.term) {
        errors.term = 'Required';
    }
    return errors;
};

const RegistrationForm = (props) => {
    const {
        handleSubmit,
        onSubmit,
        submitting,
        t
    } = props;

    return (
        <form onSubmit={ handleSubmit(onSubmit) } className={ 'registrationForm' }>
            <Input
                name="email"
                type="email"
                idx={ 0 }
                label="Email"
            />
            <Input
                name="password"
                type="password"
                idx={ 1 }
                label="Password"
            />
            <div className="currencyCheckboxes">
                <div className="currencyCheckboxesLabel"> { t('currency') }</div>
                <div className="currencyCheckboxesWrap">
                    <Radio
                        name="currency"
                        idx={ 2 }
                        value="RUB"
                        label="₽"
                    />
                    <Radio
                        name="currency"
                        idx={ 1 }
                        value="EUR"
                        label="€"
                    />
                    <Radio
                        name="currency"
                        idx={ 0 }
                        value="USD"
                        label="$"
                        checked
                    />
                </div>
            </div>
            <Checkbox
                idx={ 0 }
                name={ 'term' }
                className={ 'termUsage' }
                label={ t('term') }
            />
            <Button
                type="submit"
                disabled={ submitting }
                className={ 'btnSubmit btnFullWidth' }
            >
                { t('button.signin') }
            </Button>
        </form>
    );
};

export default reduxForm({
    form: 'registration-form', // a unique identifier for this form
    validate, // <--- validation function given to redux-form
    initialValues: {
        currency: 'USD'
    }
})(translate(['common'])(RegistrationForm));

