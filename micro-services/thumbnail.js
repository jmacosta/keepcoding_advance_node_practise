import cote from 'cote';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
dotenv.config();

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
  const destFolder = checkDestFolder();
  sharp(originalImage)
    .resize({ height: 100 })
    .toFile(`${destFolder}thumbnail-${image}`, (err, info) => {
      if (err) {
        console.log('error processing image', err);
      } else {
        console.log('image processed successfully', info);
      }
    });
};

const checkDestFolder = () => {
  const actualFolder = process.cwd();
  const thumbsfolder = path.join(actualFolder, process.env.THUMBS_PATH);
  if (!fs.existsSync(thumbsfolder)) {
    try {
      fs.mkdirSync(thumbsfolder, { recursive: true });
      console.log('Create folder: ', thumbsfolder);
    } catch (error) {
      console.error('Error creating folder: ', error);
    }
  }
  return thumbsfolder;
};
