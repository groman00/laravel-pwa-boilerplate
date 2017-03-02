import gulp from 'gulp';
import { statics } from '../config';

gulp.task('static', () =>
    gulp
        .src([statics.src + '/**.*'])
        .pipe(gulp.dest(statics.dest))
);
