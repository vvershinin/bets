import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { translate } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Icon } from 'semantic-ui-react';

import Social from './../../utils/social';
import Form from './../../components/Forms';
import { auth } from '../../actions';
import { FACEBOOK_KEY, GOOGLE_KEY } from '../../constants/social';

import './index.scss';

@translate(['common', 'code'])
@connect(state => ({
    auth: state.auth
}), dispatch => ({
    signUp: ({
        email,
        password,
        name,
        surname,
        language,
        username,
        term,
        currency
    }) => dispatch(auth.signUp.init({
        email, password, name, surname, language, username, term, currency
    })),
    login: ({ username, password }) => dispatch(auth.login.init({
        username, password
    })),
    failure: res => dispatch(auth.failure(res))
}))
class LoginPage extends React.Component {
    state = {
        errorText: null
    };

    getError = (error, t) => {
        if (!error) return null;

        if (error instanceof Array) {
            return error.map(
                value => (
                    <div className="loginComponentError">
                        { `${Object.keys(value)}  ${t(`code:status.${Object.values(value)}`)}` }
                    </div>)
            );
        }

        return (
            <div className="loginComponentError">
                { t(`code:status.${error}`) }
            </div>
        );
    };

    onSuccessSocial = (socialType, res) => {
        const {
            type,
            signUp,
            login,
            i18n: {
                language
            }
        } = this.props;

        const data = Social.getData(socialType, res, language);

        if (type === 'registration') {
            signUp(data);
        } else {
            login(data);
        }
    };

    onFailureSocial = (socialType, res) => {
        const {
            failure
        } = this.props;

        failure(res);
    };

    onSubmit = (values) => {
        const {
            type,
            signUp,
            login,
            i18n: {
                language
            },
            t
        } = this.props;

        const {
            email,
            password,
            currency,
            term
        } = values;

        const data = {};

        data.username = email.replace(/(\W|\.)/g, '').slice(0, 20);
        data.email = email;
        data.password = password;
        data.name = 'Alex';
        data.surname = 'Chukhrai';
        data.language = language;
        data.term = term;
        data.currency = t(`code:currency.${currency}`);

        if (type === 'registration') {
            signUp(data);
        } else {
            login(data);
        }
    };

    render() {
        const {
            auth: {
                error = null
            },
            type,
            t
        } = this.props;
        return (
            <div className="loginComponent">
                <div className="loginComponentSocial socialLogin">
                    <div className="socialLoginBtn socialLoginBtnSteam">
                        <Icon name={ 'steam symbol' } />
                    </div>
                    <FacebookLogin
                        appId={ FACEBOOK_KEY }
                        autoLoad={ false }
                        fields="name,email,picture,first_name,last_name"
                        callback={ this.onSuccessSocial.bind(this, 'facebook') }
                        onFailure={ this.onFailureSocial.bind(this, 'facebook') }
                        cssClass={ 'socialLoginBtn socialLoginBtnFacebook' }
                        icon={ <Icon name={ 'facebook f' } /> }
                        tag={ 'button' }
                        version={ '3.0' }
                        textButton={ null }
                    />
                    <GoogleLogin
                        clientId={ GOOGLE_KEY }
                        className={ 'socialLoginBtn socialLoginBtnGoogle' }
                        buttonText={ <Icon name={ 'google plus g' } /> }
                        onSuccess={ this.onSuccessSocial.bind(this, 'google') }
                        onFailure={ this.onFailureSocial.bind(this, 'google') }
                    />
                </div>
                <div className="loginComponentEmail">
                    { type === 'login' ?
                        <Form.LogForm
                            onSubmit={ this.onSubmit }
                        /> :
                        <Form.RegForm
                            onSubmit={ this.onSubmit }
                        />
                    }
                </div>
                <div className="loginComponentStatus">
                    { this.getError(error, t) }
                    { this.state.errorText && <div className="loginComponentErrorSocial">{ this.state.errorText }</div> }
                </div>
            </div>
        );
    }
}

LoginPage.propTypes = {
    type: PropTypes.string.isRequired
};

LoginPage.defaultProps = {};

export default LoginPage;
