const path = require('path');

module.exports = {
    name: 'Schwartz Media Clone Setup',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js'],
    },

    entry: {
        app: path.join(__dirname, 'src/main')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader']

            }
     ]
    },
    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: '[name].js',
        publicPath: '/src/dist/'
    }
}