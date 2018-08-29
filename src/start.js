/* eslint-disable */
const clientStats = require('./stats.json');
const serverRender = require('./server.js').default;
const app = serverRender({ clientStats });

const date = new Date();
const formattedDate =
    date.getUTCFullYear() + '-' +
    ('0' + (date.getUTCMonth()+1)).slice(-2) + '-' +
    ('0' + date.getUTCDate()).slice(-2) + 'T' +
    ('0' + date.getUTCHours()).slice(-2) + ':' +
    ('0' + date.getUTCMinutes()).slice(-2) + ':' +
    ('0' + date.getUTCSeconds()).slice(-2) + '.' +
    date.getUTCMilliseconds() + 'Z';

app.listen(process.env.APP_SERVER_PORT, process.env.APP_SERVER_HOST, () => {
    console.log(`${formattedDate} - Server started: http://${process.env.APP_SERVER_HOST}:${process.env.APP_SERVER_PORT}`);
});
