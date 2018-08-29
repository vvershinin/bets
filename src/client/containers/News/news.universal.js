import importCss from 'babel-plugin-universal-import/importCss';
import path from 'path';

export default {
    load: () => Promise.all([
        import(/* webpackChunkName: 'news' */ './news'),
        importCss('news')
    ]).then(proms => proms[0]),
    chunkName: () => 'news',
    resolve: () => require.resolveWeak('./news'),
    path: () => path.join(__dirname, './news')
};
