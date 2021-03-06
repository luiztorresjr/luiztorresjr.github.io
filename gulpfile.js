var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    notify = require("gulp-notify"),
    bower = require('gulp-bower');

var config = {
	sassPath: './resources/sass',
	bowerDir: './bower_components'
}

gulp.task('bower', function(){
	return bower()
	.pipe(gulp.dest('config.bowerDir'))
});

gulp.task('icons', function(){
	return gulp.src(config.bowerDir+'/fontawesome/font/**.*')
	.pipe(gulp.dest('./public/fonts'));
});

gulp.task('css', function(){
	return gulp.src(config.sassPath+'/style.scss')
	.pipe(sass({
		style: 'compressed',
		loadPath: [
			'./resources/sass',
			config.bowerDir+'/bootstrap-sass-official/assents/stylesheets',
			config.bowerDir+'/fontawesome/scss',
			]
	})
		.on("error", notify.onError(function(error){
			return "Error: " + error.message;
		})))
	.pipe(gulp.dest('./public/css'));
});

gulp.task('default', function(){
	console.log("Termindado");
});