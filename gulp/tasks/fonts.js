import gulp from 'gulp';
import { fonts } from '../config';

gulp.task('fonts', () =>
    gulp
        .src([fonts.src + '/*/**.*'])
        .pipe(gulp.dest(fonts.dest))
);
