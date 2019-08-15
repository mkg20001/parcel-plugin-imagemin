const ImageAsset = require('./ImageAsset');

// Imagemin
const imagemin = require('imagemin');
const imageminOptipng = require('imagemin-optipng');

class PngAsset extends ImageAsset {
  async packageImage(options, location) {
    const params = options && options.optipng ? options.optipng : { optimizationLevel: 4 };
    return imagemin([location], {
      plugins: [imageminOptipng(params)]
    });
  }
}

module.exports = PngAsset;
