var gulp = require('gulp'),
    util = require('gulp-util'),
    _ = require('lodash'),
    Q = require('q'),
    optimize = require('requirejs').optimize;

gulp.task('requirejs', [], function() {
    _.each(requireConf.paths, function(x, i) {
        if (_.isArray(x))
            requireConf.paths[i] = 'empty:';
    });

    util.log(requireConf);

    var cfg = _.extend({}, requireConf, {
        baseUrl: 'Scripts',
        mainConfigFile: 'Scripts/require.config.js',
        optimize: 'none',
        out: 'Scrits/build/app.js',
        name: 'app/_run',
    });

    var defer = Q.defer();

    optimize(cfg, defer.resolve);
    return defer.promise;
});