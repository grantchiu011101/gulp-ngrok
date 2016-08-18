var gulp = require('gulp');
var plugins = require('gulp-load-plugins')() ;
var ngrok = require('./') ;

gulp.task('ngrok', function () {
	ngrok({proto: 'http'}) ;
});
