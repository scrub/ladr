var gulp = require('gulp'),
    ts = require('gulp-typescript'),
    merge = require('merge2'),
    stylus = require('gulp-stylus'),
    nib = require('nib'),
    browserSync = require('browser-sync').create(),
    nodemon = require('gulp-nodemon'),
    mocha = require('gulp-mocha-co'),
    exit = require('gulp-exit'),
    tsProject = ts.createProject({
      declarationFiles: false,
      target: 'ES5',
      noExternalResolve : true,
      module : 'commonjs',
      typescript: require('typescript')
    });


gulp.task('scripts', function() {
  var tsResult = gulp.src(['static/*.ts', 'static/**/*.ts'])
  .pipe(ts(tsProject));

  return merge([ // Merge the two output streams, so this task is finished when the IO of both operations are done.
    tsResult.dts.pipe(gulp.dest('static')),
    tsResult.js.pipe(gulp.dest('static'))
  ])
  .pipe(browserSync.stream());
});

gulp.task('stylus', function() {
  gulp.src(['static/*.styl', 'static/**/*.styl'])
    .pipe(stylus({ use: [nib()] }))
    .pipe(gulp.dest('static/'))
    .pipe(browserSync.stream());
});


// Development server live-reload
gulp.task('nodemon', function() {
  nodemon({
    script: 'server.js',
    watch: ['api/', 'server.js', 'config.js'],
    env: { PORT: 8000 },
    nodeArgs: ['--harmony']
  }).on('restart');
});

// Development client live-reload
gulp.task('serve', ['stylus', 'scripts'], function() {
    browserSync.init({
        proxy: "localhost:8000",
        browser: "chrome"
    });

    gulp.watch(['static/*.styl', 'static/**/*.styl'], ['stylus']);
    gulp.watch(['static/*.ts', 'static/**/*.ts'], ['scripts']);
    gulp.watch(['views/*.jade', 'views/**/*.jade']).on('change', browserSync.reload);
});


// Tests
gulp.task('mocha', function() {
  process.env.PORT = 8001;

  return gulp.src(['test/*.js', 'test/**/*.js'])
    .pipe(mocha({
      reporter: 'nyan'
    }));
});

gulp.task('test-once', function() {
  gulp.tasks.mocha.fn().pipe(exit());
});

//gulpfile.js
gulp.task('tdd', function() {
  gulp.watch(
    ['server.js', 'config.js', 'api/*.js', 'api/**/*.js', 'test/*.js', 'test/**/*.js'],
    ['mocha']
  );
});

gulp.task('default', ['nodemon', 'mocha', 'tdd', 'serve']);
//gulp.task('default', ['serve']);
