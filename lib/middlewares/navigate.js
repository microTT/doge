const fs = require('co-fs');
const path = require('path');
const ejs = require('ejs');

module.exports = function*(next) {
    let data = null;
    const url = this.request.url;
    const baseDir = this.config.baseDir;

    if (url.includes('/public/')) {
        data = yield fs.readFile(path.resolve(baseDir, url.substr(1)), {
            encoding: 'utf-8'
        });
    } else if(url.includes('/services/')) {
        data = yield this.services.PostsReadService.read();
        console.log(data);
    } else {
        let tpl = yield fs.readFile(path.resolve(baseDir, 'views/index.ejs'), {
            encoding: 'utf-8'
        });
        data = ejs.render(tpl, {
            isProductionEnv: this.config.env === 'production'
        });
    }

    this.body = data;

    yield next;
};