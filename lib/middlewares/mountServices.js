/**
 * Created by micro0 on 11/03/2017.
 */
const path = require('path');
const fs = require('co-fs');

module.exports = function*(next) {
    const servicesConf = this.config.services || {};
    const servicesKey = Object.keys(servicesConf);
    this.services = this.services || {};

    servicesKey.forEach(key => {
       const servicePath = path.join(this.config.baseDir, servicesConf[key]);
       const service = require(servicePath);

       this.services[key] = service;

    });

    yield next;
};