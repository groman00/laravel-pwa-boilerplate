const src = './resources/assets';
const dest = './public';
const styleSrc = src + '/scss';
const scriptSrc = src + '/js';
const htmlSrc = src + '/html';
// require('dotenv').config();

const styles = {
    src: styleSrc,
    main: styleSrc + '/main.scss',
    dest: dest + '/css'
};
const scripts = {
    src: scriptSrc,
    main: scriptSrc + '/main.js',
    dest: dest + '/js'
};
const statics = {
    src: src + '/static',
    dest: dest
};
const images = {
    src: src + '/images',
    dest: dest + '/images'
};
const fonts = {
    src: src + '/fonts',
    dest: dest + '/fonts'
};
const html = {
    src: htmlSrc + '/index.html',
    dest: dest
};

export { src, dest, styles, scripts, statics, images, fonts, html };
