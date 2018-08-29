export const cut = (n, text = '') => `${text.substr(0, n)}${text.length > n ? '...' : ''}`;

export const getParameterByName = (name, url) => {
    if (!name) return false;
    if (!url) url = window.location.href;

    name = name.replace(/[\[\]]/g, '\\$&'); // eslint-disable-line

    const regex = new RegExp(`[?&]${name}(=([^&#]*)|&|#|$)`);
    const results = regex.exec(url);

    if (!results) return null;
    if (!results[2]) return '';

    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};
