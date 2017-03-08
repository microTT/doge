
let WebpackDevServer = require('webpack-dev-server');

let webpack = require('webpack');

let packConfig = require('./webpack.config.js');
let packPort = 8080;
let compiler = webpack(packConfig);

let devServer = new WebpackDevServer(compiler, {
    hot: true,
    quiet: false,
    noInfo: false,
    // publicPath:'/public/assets/',
    inline: true,
    stats: { colors: true },
});

devServer.listen(packPort, function(err, result) {
    console.log('packserver build success');
});