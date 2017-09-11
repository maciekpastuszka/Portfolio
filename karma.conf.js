module.exports = function (config) {
    config.set({
        basePath: './',
        files: ['resources/js/components/nav.js', 'test/**/*.js'],

        frameworks: ['browserify', 'mocha', 'chai'],
        browsers: ['PhantomJS'], // 'Chrome'

        preprocessors: {
            'resources/js/components/nav.js': ['browserify'],
            'test/**/*.js': ['browserify']
        },
        browserify: {
            debug: true,
            bundleDelay: 1000,
            transform: [['babelify', {
                ignore: /node_modules/
            }]],
            extensions: ['.js']
        },
        reporters: ['mocha'],

        logLevel: config.LOG_DISABLE,
        singleRun: true,
        autoWatch: false
    });
};