var gulp = require('gulp')
var browserSync = require('browser-sync').create()
var sass = require('gulp-sass')

gulp.task('compile-task', function () {
  return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss', 'src/scss/*.scss'])
  .pipe(sass())
  .pipe(gulp.dest('src/css'))
  .pipe(browserSync.stream())
})

gulp.task('move-js', function () {
  return gulp.src(['node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/tether/dist/js/tether.min.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe(gulp.dest('src/js'))
    .pipe(browserSync.stream())
})

gulp.teask('launch-server', ['compile-sass', function () {
  browserSync
}])
