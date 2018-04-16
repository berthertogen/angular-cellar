// var webpack = require('webpack');
// var glob = require("glob");

// // entry: glob.sync("./test/**/*Spec.js")



// module.exports = {
//     context: __dirname + '/app',
//     // entry: {
//     //     app: './app.js',
//     //     vendor: ['angular']
//     // },
//     entry: glob.sync("./js/**/*.js"),
//     output: {
//         path: __dirname + '/js',
//         filename: 'app.bundle.js'
//     },
//     plugins: [
//         new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
//     ]
// };



var glob = require("glob");

var webpack = require('webpack');

// use resolve() to normalize paths between unix/windows environments
var path = require('path');

function resolve (dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {

    mode: 'production',

    // entry: glob.sync("./js/**/*.js"),
    entry: {
        main: resolve('./angular-cellar/js/index.js'),

        vendor: [
            'angular',
            'angular-route'
        ] 
        // code splitting: we take all of our vendor code and put it in a separate bundle (vendor.min.js)
        // this way it will have better caching/cache hits since it changes infrequently
        // vendor: [
        //     // local packages
        //     'angular',
        //     // 'jquerynotify'

        //     // npm packages are added to vendor code separately in splitChunks config below
        // ]
    },

    output: {
        path: resolve('./angular-cellar/dist/'),
        filename: '[name].js'
    },

    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },

    // module: {
    //     rules: [
    //         {
    //             test: /\.css$/,
    //             loader: 'style!css'
    //         },
    //         {
    //             test: /\.html$/,
    //             use: 'raw-loader'
    //         },
    //         {
    //             test: /^(?!.*\.{test,min}\.js$).*\.js$/,
    //             exclude: /(node_modules)/,
    //             use: {
    //                 loader: 'babel-loader'
    //             }
    //         }
    //     ]
    // },

    // resolve: {
    //     modules: [
    //         resolve('app'),
    //         resolve('app/css'),
    //         'node_modules'
    //     ],

    //     alias: {
    //         // external libraries
    //         jquerynotify: resolve('app/js/jquery.notify.min'),
    //         clipboard: resolve('app/js/clipboard.min'),

    //         // directory alias to shorten template paths
    //         templates: resolve('app/templates')
    //     }
    // },

    // plugins: [
    //     // ensure that we get a production build of any dependencies
    //     // this is primarily for React, where this removes 179KB from the bundle
    //     new webpack.DefinePlugin({
    //         'process.env.NODE_ENV': '"production"'
    //     })
    // ]

};