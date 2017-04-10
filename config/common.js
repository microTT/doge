let env = process.env.NODE_ENV === 'production' ? 'production' : 'development';

module.exports = {
    env: env,
    baseDir: process.cwd(),
    middlewares: [
        './lib/middlewares/logger.js',
        './lib/middlewares/mountServices.js',
        './lib/middlewares/router.js',
        './lib/middlewares/navigate.js'
    ],
    services: {
        PostsReadService: './lib/services/PostsReadService.js',
        PostsWriteService: './lib/services/PostsReadService.js'
    }
};