

var gulp = require('gulp');
var concat = require('gulp-concat');
var react = require('gulp-react');


gulp.task('default', function() {
  return gulp.src([
      'react-components/components/**/*.jsx',
      'react-components/app.jsx' // compile main component last
    ])
    // compile jsx components into single file
    .pipe(concat('react-components.js'))
    .pipe(react({harmony: false, es6module: true}))
    .pipe(gulp.dest('./public/js'));
});