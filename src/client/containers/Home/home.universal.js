import importCss from 'babel-plugin-universal-import/importCss';
import path from 'path';

export default {
    load: () => Promise.all([
        import(/* webpackChunkName: 'home' */ './home'),
        importCss('home')
    ]).then(proms => proms[0]),
    chunkName: () => 'home',
    resolve: () => require.resolveWeak('./home'),
    path: () => path.join(__dirname, './home')
};
