import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('default', () => runSequence('html-dev', 'scripts-dev', 'styles-dev', 'static', 'images', 'fonts', 'service-worker-dev'));
