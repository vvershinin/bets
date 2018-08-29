import importCss from 'babel-plugin-universal-import/importCss';
import path from 'path';

export default {
    load: () => Promise.all([
        import(/* webpackChunkName: 'contact' */ './contact'),
        importCss('contact')
    ]).then(proms => proms[0]),
    chunkName: () => 'contact',
    resolve: () => require.resolveWeak('./contact'),
    path: () => path.join(__dirname, './contact')
};
