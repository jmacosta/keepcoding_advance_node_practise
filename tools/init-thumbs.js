import cote from 'cote';
import fs from 'node:fs';
import path from 'node:path';
const { Requester } = cote;
const actualFolder = process.cwd();
const assetsFolder = path.join(actualFolder, 'public/assets/');
const requester = new Requester({ name: 'Image for Thumb' });

const createThumb = (image, origin) => {
  return new Promise((resolve, reject) => {
    const event = {
      type: 'create-thumbnail',
      origin: origin,
      image: image
    };
    requester.send(event, result => {
      console.log(Date.now(), 'Message from Service ', result);
      resolve();
    });
  });
};

fs.readdir(assetsFolder, async (err, files) => {
  if (err) {
    console.error('Error in the folder', err);
    return;
  }
  const promisesThumbs = files.map(file => createThumb(file, assetsFolder));
  try {
    await Promise.all(promisesThumbs);
    console.log('All thumbs created');
    process.exit();
  } catch (error) {
    console.error('Error creating thumbs', error);
    process.exit(1);
  }
});
