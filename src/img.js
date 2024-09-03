const sharp = require('sharp');

sharp('8k.jpg')
  .resize(150, 150)
  .toFile('8k-thumbnail.jpg', (err, info) => {
    if (err) throw err;
    console.log('Thumbnail criado:', info);
  });
