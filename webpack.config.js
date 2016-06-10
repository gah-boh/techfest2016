var path = require('path');
var WebpackNotifier = require('webpack-notifier');

module.exports = {
    entry: './app/app.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve('./build')
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve('./app'),
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-class-properties', 'transform-object-rest-spread']
                }
            }
        ]
    },
    devtool: 'source-map',
    plugins: [
        new WebpackNotifier()
    ]
};
