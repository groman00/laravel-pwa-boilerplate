import gulp from 'gulp';
import webpack from 'webpack-stream';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import { scripts } from '../config';

function task(debug) {
    return gulp.src(scripts.main)
        .pipe(webpack({
            module: {
                loaders: [
                    {
                        test: /\.vue$/,
                        loader: 'vue-loader',
                    },
                    {
                        test: /\.js$/,
                        exclude: /node_modules/,
                        loader: 'babel-loader',
                        query: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.common.js'
                }
            }
        }).on('error', (e) => {
            console.error(e.stack);
        }))
        .pipe(gulpIf(!debug, uglify({ mangle: true })))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(scripts.dest));
};

gulp.task('scripts-dev', () => task(true));

gulp.task('scripts-prod', () => task(false));
