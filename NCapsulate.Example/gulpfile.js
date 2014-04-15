var gulp = require('gulp'),
    util = require('gulp-util'),
    _ = require('lodash'),
    Q = require('q'),
    optimize = require('requirejs').optimize;

gulp.task('requirejs', [], function() {
    var defer = Q.defer();

    optimize({
        baseUrl: 'Scripts',
        mainConfigFile: 'Scripts/require.config.js',
        optimize: 'none',
        out: 'Scripts/build/app.js',
        name: 'app/_bootstrap',
    }, defer.resolve);
    return defer.promise;
});

var uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('min', [], function() {
    gulp.src('Scripts/build/app.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('Scripts/build'));
});