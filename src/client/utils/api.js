/* global Blob, FormData */

import axios from 'axios';

import { HOST_API, API } from '../constants/application';

class API_CLASS {
    constructor(type) {
        this.type = type || false;
        this.options = type ? {
            headers: {
                'X-Requested-With': 'XMLHttpRequest'
            }
        } : {};
    }

    getUrl = uri => (this.type ? API : (HOST_API + uri));

    getHeaders = options => Object.assign(options, this.options);

    get = async (uri, options) =>
        this.api('get', this.getUrl(uri), null, options);

    put = async (uri, data, options) =>
        this.api('put', this.getUrl(uri), data, options);

    post = async (uri, data, options) =>
        this.api('post', this.getUrl(uri), data, options);

    delete = async (uri, options) =>
        this.api('delete', this.getUrl(uri), null, options);

    api = async (method, url, data, options = {}) => {
        const allOptions = this.getHeaders(options);

        const response = await axios({
            ...allOptions,
            url,
            data,
            method
        });

        if (response.error) {
            throw new Error(response.error);
        }

        if (response.errors && response.errors[0]) {
            throw new Error(response.errors[0]);
        }

        return response;
    }
}

const wordpress = new API_CLASS();
const api = new API_CLASS(true);

export {
    wordpress,
    api
};
