import importCss from 'babel-plugin-universal-import/importCss';
import path from 'path';

export default {
    load: () => Promise.all([
        import(/* webpackChunkName: 'details' */ './details'),
        importCss('details')
    ]).then(proms => proms[0]),
    chunkName: () => 'details',
    resolve: () => require.resolveWeak('./details'),
    path: () => path.join(__dirname, './details')
};
