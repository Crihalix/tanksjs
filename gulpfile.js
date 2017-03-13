
var gulp = require('gulp');

gulp.task('default', [ 'js' ], function(


gulp.task('watch', function() {
    return gulp.watch(['app/js/*.js'], ['default']);
});
