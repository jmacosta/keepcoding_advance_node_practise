import cote from 'cote';
import fs from 'node:fs';
import path from 'node:path';
const { Requester } = cote;
const actualFolder = process.cwd();
const assetsFolder = path.join(actualFolder, 'public/assets/');
const requester = new Requester({ name: 'Image for Thumb' });

const createThumb = (image, origin) => {
  const event = {
    type: 'create-thumbnail',
    origin: origin,
    image: image
  };
  requester.send(event, result => {
    console.log(Date.now(), 'Message from Service ', result);
  });
};

fs.readdir(assetsFolder, async (err, files) => {
  const promisesThumbs = [];
  if (err) {
    console.error('Error in the folder', err);
    return;
  }
  files.forEach(file => {
    createThumb(file, assetsFolder);
  });

  console.log('All thumbs created');
  //process.exit();
});
