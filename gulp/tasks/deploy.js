import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('deploy', () => runSequence('html-prod', 'lint', 'scripts-prod', 'styles-prod', 'static', 'images', 'fonts', 'service-worker-prod'));
