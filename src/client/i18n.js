import i18n from 'i18next';
import sprintf from 'i18next-sprintf-postprocessor';

i18n
    .use({
        type: 'backend',
        read: (language, namespace, callback) => {
            import(/* webpackChunkName: 'locales/[request]' */ `../../locales/${language}/${namespace}/index.js`)
                .then((data) => {
                    callback(null, data);
                });
        }
    })
    .use(sprintf)
    .init({
        whitelist: ['en', 'ru'],
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false // not needed for react!!
        },
        react: {
            wait: true
        }
    });

export default i18n;
