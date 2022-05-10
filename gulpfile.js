const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function sassCompiler(){
    return src('sass/main.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(dest('css/'));
}


exports.default = function(){
    watch('sass/*.scss',sassCompiler);
};