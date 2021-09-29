const path = require('path');

const manager = {
    mode: 'production',
    entry: './src/index.ts',
    resolve: {
        extensions: [".ts", ".js"],
        fallback: {
            "os": false
        }
    },
    module: {
        rules: [
            { test: /\.ts$/, loader: 'ts-loader' },
            {
                test: /worker\.js$/i,
                loader: "worker-loader",
                options: {
                    inline:"no-fallback"
                },
            },
        ],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'umd',
        globalObject: 'typeof self !== \'undefined\' ? self : this'
    },
};

module.exports = [
    manager
];

