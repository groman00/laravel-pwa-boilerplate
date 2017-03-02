import gulp from 'gulp';
import sass from 'gulp-sass';
import rename from 'gulp-rename';
import { styles } from '../config';

function task(outputStyle) {
    return gulp.src(styles.main)
        .pipe(sass({ 'outputStyle': outputStyle }))
        .pipe(rename('app.css'))
        .pipe(gulp.dest(styles.dest));
}

gulp.task('styles-dev', () => task('expanded'));

gulp.task('styles-prod', () => task('compressed'));
