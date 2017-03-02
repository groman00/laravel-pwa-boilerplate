import path from 'path';
import gulp from 'gulp';
import webpack from 'webpack';
import webpackStream from 'webpack-stream';
import rename from 'gulp-rename';
import gulpIf from 'gulp-if';
import { scripts } from '../config';

function task(webpackPlugins) {
    return gulp.src(scripts.main)
        .pipe(webpackStream({
            plugins: webpackPlugins,
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
                        include: [path.join(__dirname, '../../', scripts.src)]
                    }
                ]
            },
            vue: {
              loaders: {
                js: 'babel-loader'
              }
            },
            resolve: {
                alias: {
                    'vue$': 'vue/dist/vue.common'
                }
            }
        }).on('error', (e) => {
            console.error(e.stack);
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest(scripts.dest));
};

gulp.task('scripts-dev', () => task([]));

gulp.task('scripts-prod', () => task([
    new webpack.DefinePlugin({
        'process.env': {
            NODE_ENV: '"production"'
        }
    }),
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false
        }
    })
]));
