import { LanguageDetector } from 'i18next-express-middleware';
import i18n from 'i18next';

import locales from '../../locales/index';

i18n
    .use(LanguageDetector)
    .init({
        whitelist: ['en', 'ru'],
        fallbackLng: 'en',
        ns: ['common'],
        defaultNS: 'common',
        interpolation: {
            escapeValue: false // not needed for react!!
        }
    });

/* eslint-disable array-callback-return */
Object.keys(locales)
    .map((language) => {
        Object.keys(locales[language])
            .map((namespace) => {
                i18n.addResourceBundle(language, namespace, locales[language][namespace]);
            });
    });
/* eslint-enable array-callback-return */

export default i18n;
