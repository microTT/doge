let logger = function*(next) {

    console.log('navigate');
    yield next;
};

module.exports = logger;