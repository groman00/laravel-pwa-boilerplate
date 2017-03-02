import requireDir from 'require-dir';

// Require all tasks in gulp/tasks, including subfolders
requireDir('./gulp/tasks', { recurse: true });



/*
var gulp = require('gulp');
var rename = require('gulp-rename');
var webpack = require('webpack-stream');

// Run webpack
gulp.task('webpack', function(){
    return gulp.src('./resources/assets/js/main.js')
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
        }))
        .pipe(rename('bundle.js'))
        .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['webpack']);
*/