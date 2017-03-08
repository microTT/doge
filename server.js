let path = require('path');

let koa = require('koa');
let app = koa();

let config = getConfig();

app.use(function*(next) {
    this.config = config;
    yield next;
});
config.middlewares.forEach(mw => {
    const filePath = path.join(config.baseDir, mw);
    const middleware = require(filePath);
    app.use(middleware);
});

app.listen(3000);
console.log('service start');

function getConfig() {
    return require('./config/common.js');
}
