var gulp = require('gulp');
var gutil = require('gulp-util');
var del = require('del');
var path = require('path');
var runSequence = require('run-sequence');
var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');

var webpackConfig = require('./webpack.config');

gulp.task('clean', function(done) {
    del('build').then(function() {
        done();
    });
});

gulp.task('html', function() {
    return gulp.src('./app/**/*.html')
               .pipe(gulp.dest('./build'));
});

gulp.task('html:watch', ['html'], function() {
    return gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('css', function() {
    return gulp.src(['./app/styles.css', './node_modules/bootstrap/dist/css/bootstrap.css'])
        .pipe(gulp.dest('./build/styles'));
});

gulp.task('css:watch', ['css'], function() {
    return gulp.watch('./app/styles.css', ['css']);
});

gulp.task('webpack-dev-server', function() {
    var compiler = webpack(webpackConfig);
    new WebpackDevServer(compiler, {
        contentBase: path.resolve('./build'),
        inline: true,
        stats: {
            chunks: false,
            colors: true
        }
    })
    .listen(9000, null, function(err) {
        if(err) {
            throw new gutil.PluginError('webpack-dev-server', err);
        }
        gutil.log('[webpack-dev-server]', 'http://localhost:9000/index.html');
    });
});

gulp.task('default', ['clean'], function(done) {
    runSequence(['html:watch', 'css:watch'], 'webpack-dev-server', done);
});
