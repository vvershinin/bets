const getInitialI18nStore = (namespaces, i18n) => {
    const initialI18nStore = {};
    initialI18nStore[i18n.language] = {};

    // eslint-disable-next-line array-callback-return
    namespaces.forEach((namespace) => {
        initialI18nStore[i18n.language][namespace] = i18n.getResourceBundle(i18n.language, namespace);
    });
    return initialI18nStore;
};

export {
    getInitialI18nStore
};
