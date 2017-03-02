import gulp from 'gulp';
import swPrecache from 'sw-precache';
import path from 'path';
import { dest } from '../config';

gulp.task('service-worker-dev', () =>
    swPrecache.write(path.join(dest, 'service-worker.js'), {
        verbose: true,
        importScripts: ['/sw-import.js'],
        staticFileGlobs: [],
        runtimeCaching: []
    })
);

gulp.task('service-worker-prod', () =>
    swPrecache.write(path.join(dest, 'service-worker.js'), {
        verbose: true,
        staticFileGlobs: [
            dest + '/**.html',
            dest + '/manifest.json',
            dest + '/images/**.*',
            dest + '/fonts/*/**.*',
            dest + '/js/**.js',
            dest + '/css/**.css'
        ],
        stripPrefix: dest + '/',
        importScripts: ['/sw-import.js'],
        runtimeCaching: []
    })
);
