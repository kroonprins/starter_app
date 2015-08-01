'use strict';

var gulp = require('gulp');
var EXPRESS_PORT = 8081;

gulp.task('watch', function() {
    var livereload = require('gulp-livereload');
    livereload.listen();
    gulp.watch(['js/**', '*.html', 'css/**']).on('change', livereload.changed);
});

gulp.task('server', function() {
    var express = require('express');
    var app = express();
    app.use(require('connect-livereload')());
    app.use(express.static(__dirname));
    app.listen(EXPRESS_PORT);
});

gulp.task('open', ['server'], function() {
    var open = require('gulp-open');
    var options = {
      uri: 'http://localhost:'+EXPRESS_PORT
    };
    gulp.src(__filename)
       .pipe(open(options));
});

gulp.task('default', ['open', 'watch'], function() {
});
