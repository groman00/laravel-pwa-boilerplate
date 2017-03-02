import gulp from 'gulp';
import runSequence from 'run-sequence';
import { scripts, styles, statics, images, html } from '../config';

function sequenceTaskAndServiceWorker (task) {
    runSequence(task);
}

gulp.task('watch', () => {
    gulp.watch(scripts.src + '/**/*.*', sequenceTaskAndServiceWorker.bind(this, 'scripts-dev'));
    gulp.watch(styles.src + '/**/*.scss', sequenceTaskAndServiceWorker.bind(this, 'styles-dev'));
    gulp.watch(statics.src + '/**.*', sequenceTaskAndServiceWorker.bind(this, 'static'));
    gulp.watch(images.src + '/**.*', sequenceTaskAndServiceWorker.bind(this, 'images'));
    gulp.watch(html.src, sequenceTaskAndServiceWorker.bind(this, 'html-dev'));
});
