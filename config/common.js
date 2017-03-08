let env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    env: env,
    baseDir: process.cwd(),
    middlewares: [
        './lib/middlewares/logger.js',
        './lib/middlewares/router.js',
        './lib/middlewares/navigate.js'
    ]
};