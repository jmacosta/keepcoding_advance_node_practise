import cote from 'cote';
import sharp from 'sharp';
const { Responder } = cote;
const responder = new Responder({ name: 'Thumbnail service' });
responder.on('create-thumbnail', (req, done) => {
  const { image, origin } = req;
  console.log(Date.now(), 'Thumbnail', image);
  resizeImage(image, origin);
  done('make it');
});

const resizeImage = async (image, origin) => {
  const originalImage = origin + image;
  sharp(originalImage)
    .resize({ height: 100 })
    .toFile(`../public/thumbs/thumbnail-${image}`, (err, info) => {
      if (err) {
        console.log('error processing image', err);
      } else {
        console.log('image processed successfully', info);
      }
    });
};
