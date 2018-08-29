import React from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Icon } from 'semantic-ui-react';


import './index.scss';
import { FACEBOOK_KEY, GOOGLE_KEY } from '../../constants/social';

@translate(['common', 'code'])
class Login extends React.Component {
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

    render() {
        const {
            t,
            onSuccess,
            onFailure,
            errorSocial,
            error
        } = this.props;

        return (
            <div className="loginComponent">
                <div className="loginComponentTitle">{ t('common:text.social') }</div>
                <div className={ 'socialLogin' }>
                    <GoogleLogin
                        clientId={ GOOGLE_KEY }
                        className={ 'socialLoginBtn socialLoginBtnGoogle' }
                        buttonText={ <Icon name={ 'google plus g' } /> }
                        onSuccess={ onSuccess.bind(this, 'google') }
                        onFailure={ onFailure.bind(this, 'google') }
                    />
                    <FacebookLogin
                        appId={ FACEBOOK_KEY }
                        autoLoad={ false }
                        fields="name,email,picture,first_name,last_name"
                        callback={ onSuccess.bind(this, 'facebook') }
                        onFailure={ onFailure.bind(this, 'facebook') }
                        cssClass={ 'socialLoginBtn socialLoginBtnFacebook' }
                        icon={ <Icon name={ 'facebook f' } /> }
                        tag={ 'button' }
                        version={ '3.0' }
                        textButton={ null }
                    />
                </div>
                <div className="loginComponentStatus">
                    { this.getError(error, t) }
                    { errorSocial && <div className="loginComponentErrorSocial">{ errorSocial }</div> }
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    t: PropTypes.string.isRequired
};

Login.defaultProps = {};

export default Login;
