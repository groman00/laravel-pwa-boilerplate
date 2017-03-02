import gulp from 'gulp';
import eslint from 'gulp-eslint';
import { scripts } from '../config';

gulp.task('lint', () =>
    gulp.src(scripts.src + '/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format())
);
