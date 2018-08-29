/* eslint-disable */
import crypto from 'crypto-js';
import { SECRET_KEY } from '../constants/application';

class Social {
    static facebook(res, language) {
        const {
            email,
            id,
            first_name,
            last_name,
            name,
            picture
        } = res;

        const data = {};

        data.username = email.replace(/(\W|\.)/g, '').slice(0, 20);
        data.email = email;
        data.password = crypto.MD5(id + SECRET_KEY).toString().slice(0, 30);
        data.name = first_name;
        data.surname = last_name;
        data.language = language;

        return data;
    }

    static google(res, language) {
        const {
            profileObj: {
                email,
                familyName,
                givenName,
                googleId,
                imageUrl,
                name
            }
        } = res;

        const data = {};

        data.username = email.replace(/(\W|\.)/g, '').slice(0, 20);
        data.email = email;
        data.password = crypto.MD5(googleId + SECRET_KEY).toString().slice(0, 30);
        data.name = givenName;
        data.surname = familyName;
        data.language = language;

        return data;
    }

    static getData(type, res, language) {
        let data = null;

        if (!type) throw new Error(' Please enter type of social registration');

        switch (type) {
            case 'google':
                data = this.google(res, language);
                break;
            case 'facebook':
                data = this.facebook(res, language);
                break;
            default:
                break;
        }

        return data;
    }
}

export default Social;
