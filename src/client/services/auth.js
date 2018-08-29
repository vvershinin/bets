import Cookies from 'js-cookie';
import { api } from '../utils/api';

export const login = async ({ username, password }) =>
    api.post('', null, {
        params: {
            req: 'login',
            userIdentifier: username,
            password,
            otpDeliveryChannel: '2'
        }
    }).then((res) => {
        const {
            data: {
                ErrorCode,
                StatusCode
            }
        } = res;

        if (ErrorCode && ErrorCode !== 0) return Promise.reject({ error: ErrorCode });
        if (StatusCode !== 10) return Promise.reject({ error: StatusCode });

        Cookies.set('test', true, { expires: 30 });

        return res;
    });

export const signUp = async ({ email, password, name, surname, language, username, currency }) => {
    const signUpData = await api.post(
        '',
        null,
        {
            params: {
                req: 'registerUser',
                Profile: 'register',
                BirthDate: '1992-10-03',
                UserName: username,
                Password: password,
                Email: email,
                Name: name,
                Surname: surname,
                Gender: 'M',
                CountryID: '739',
                UserLanguage: language,
                AcceptedTerm: '17',
                PreferredCurrencyID: currency
            }
        },
        true
    );

    const {
        data: {
            StatusCode,
            fieldErrorList
        }

    } = signUpData;

    if (StatusCode !== 10) {
        return Promise.reject({ error: fieldErrorList });
    }

    return login({ username, password });
};

