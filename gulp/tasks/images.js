import gulp from 'gulp';
import { images } from '../config';

gulp.task('images', () =>
    gulp
        .src([images.src + '/**.*'])
        .pipe(gulp.dest(images.dest))
);
