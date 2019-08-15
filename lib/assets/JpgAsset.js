const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminJpegtran = require('imagemin-jpegtran');

class JpgAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.jpegtran ? options.jpegtran : {};
    return imagemin([location], {
      plugins: [imageminJpegtran(params)]
    });
  }
}

module.exports = JpgAsset;
