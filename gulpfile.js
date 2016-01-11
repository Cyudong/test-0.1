/**
 * Created by Cyudong on 16-1-9.
 * 组件安装
 * npm install gulp-util gulp-uglify gulp-less gulp-clean gulp-sequence gulp-minify-css --save-dev
 */
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    //kpc = require('gulp-kpc'),
    less = require('gulp-less'),
   // compass = require('gulp-for-compass'),
    clean = require('gulp-clean'),
    runSequence = require("gulp-sequence"),
    cssmin = require('gulp-minify-css');

// 默认任务 清空图片、样式、js并重建 运行语句 gulp
gulp.task('default', ['clean'], function(){
    gulp.start('css','js');
});
gulp.task('clean',function(){
    gulp.src('build',{
        read: false
    }).pipe(clean({force: true}));
})
gulp.task('css', function() {
    setTimeout(function(){
        gulp.src('src/**/*.less')
            .pipe(less())
            .pipe(cssmin())
            .pipe(gulp.dest('build'));
        gulp.src('src/**/*.css')
            .pipe(cssmin())
            .pipe(gulp.dest('build'));
    },2000)
});
gulp.task('js',function() {
    setTimeout(function(){
        gulp.src('src/**/*.js')
            //.pipe(kpc(options))
            .pipe(uglify({
                output:{
                    ascii_only:true
                }
            }))
            .pipe(gulp.dest('build'));
    },2000);
});
gulp.task("watch",function(){
    gulp.watch('src/**/*.js', ['js']);
    gulp.watch('src/**/*.less', ['css']);
});

//gulp.task("default",['css']);
gulp.task("rs",function(cb){
    runSequence('clean',["css","js"])(cb);
    //[]
});
