import gulp from 'gulp';
import rename from 'gulp-rename';
import htmlmin from 'gulp-html-minifier';
import gulpIf from 'gulp-if';
import template from 'gulp-template';
import { html } from '../config';

function task(debug) {
    return gulp.src(html.src)
        // .pipe(template({ 'chrome_origin_key': process.env.CHROME_ORIGIN_KEY }))
        .pipe(rename('index.html'))
        .pipe(gulpIf(!debug, htmlmin({
            collapseWhitespace: true,
            minifyJS: true,
            minifyCSS: true,
            removeComments: true
        })))
        .pipe(gulp.dest(html.dest));
}

gulp.task('html-dev', () => task(true));

gulp.task('html-prod', () => task(false));
