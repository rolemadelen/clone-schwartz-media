const path = require('path');

module.exports = {
    name: 'Schwartz Media Clone Setup',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.css', '.scss'],
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
                use: [],
            }
     ]
    },
    output: {
        path: path.join(__dirname, 'src/dist'),
        filename: '[name].js',
        publicPath: './src/dist/'
    }
}