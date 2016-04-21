
var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var exit = require('gulp-exit');

var browserify = require('browserify');
var babel = require('babelify');
var watchify = require('watchify');

var runSequence = require('run-sequence');

function compile(watch) {
    var bundler = watchify(
        browserify({
                    entries: './client/app.jsx',
                    extensions: [' ', '.js', '.jsx'],
                    debug: true
                  }).transform(babel, {
                                      presets: ['es2015', 'react']
                                    })
        );

    function rebundle() {
        return bundler.bundle()
                .on('error', function(err){
                    console.log(err);
                    this.emit('end');
                })
                .pipe(source('bundle.js'))
                .pipe(buffer())
                .pipe(sourcemaps.init({ loadMaps: true }))
                .pipe(sourcemaps.write('./'))
                .pipe(gulp.dest('./public'));
    }

    if(watch) {
        bundler.on('update', function() {
            console.log('-> bundling...');
            rebundle();
        });
    } else {
        rebundle().pipe(exit());
    }
}

function watch() {
    return compile(true);
};

/*gulp.task('compress', function() {
  return gulp.src('./public/bundle.js')
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public'));
});*/

gulp.task('build', function() { return compile(); });
gulp.task('watch', function() { return watch(); });

gulp.task('default', ['watch']);