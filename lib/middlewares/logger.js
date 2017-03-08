let logger = function*(next) {
    yield next;
};

module.exports = logger;