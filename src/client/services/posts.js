import { wordpress as api } from '../utils/api';
import {
    PER_PAGE_NEWSFEED,
    PER_PAGE_TOP_NEWS,
    TOP_3_NEWS
} from '../constants/application';

export const getNewsfeed = async ({ lang, page, perPage }) => // eslint-disable-line
    /**
     * {
     *      categories_exclude: TOP_3_NEWS,
     *      orderby: modified,
     *      order: desc
     *      page: 1
     *      per_page: 10,
     *      lang: 'ru'
     * }
     */
    // eslint-disable-next-line
    api.get(`/wp-json/wp/v2/posts?categories_exclude=${TOP_3_NEWS}&orderby=modified&order=desc&page=${page}&per_page=${perPage}&lang=${lang}`
    );

export const getTopNews = async ({ lang, page }) => // eslint-disable-line
    /**
     * {
     *      orderby: view,
     *      order: desc,
     *      categories_exclude: TOP_3_NEWS
     *      page: 1
     *      per_page: 10,
     *      lang: 'ru'
     * }
     */
    // eslint-disable-next-line
    api.get(`/wp-json/wp/v2/posts?orderby=views&categories_exclude=${TOP_3_NEWS}&page=${page}&per_page=${PER_PAGE_TOP_NEWS}&lang=${lang}`
    );

export const getTop3News = async ({ lang, page }) => // eslint-disable-line
    /**
     * {
     *      categories: TOP_3_NEWS,
     *      order: desc,
     *      page: 1
     *      per_page: 10,
     *      lang: 'ru'
     * }
     */

    api.get(`/wp-json/wp/v2/posts?categories=${TOP_3_NEWS}&order=desc&lang=${lang}`
    );

export const getPostByParam = async ({ lang, params }) => {
    let query = `/wp-json/wp/v2/posts?per_page=${PER_PAGE_NEWSFEED}`;

    Object.keys(params).forEach((value) => {
        query += `${value}=${params[value]}&`;
    });

    query += `${Object.keys(params).length > 0 ? '' : '&'}lang=${lang}`;

    return api.get(query);
};

export const getPostDetails = async ({ lang, id }) =>
    api.get(`/wp-json/wp/v2/posts/${id}?lang=${lang}`);

export const getPostComments = async ({ lang, id }) =>
    api.get(`/wp-json/wp/v2/comments?post=${id}&lang=${lang}`);
