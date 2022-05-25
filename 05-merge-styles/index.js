const fs = require('fs');
const path = require('path');
const stylesDir = './05-merge-styles/styles';
const bundlePath = './05-merge-styles/project-dist/bundle.css';

const writeStream = fs.createWriteStream(bundlePath);

fs.readdir(stylesDir, { withFileTypes: true }, (readError, files) => {
  if (readError) {
    console.log(readError);
  } else {
    files.forEach(file => {
      if (file.isFile() && path.extname(file.name) === '.css') {
        let stylesheets = '';

        const stylePath = path.join(stylesDir, file.name);
        const readStream = fs.createReadStream(stylePath, 'utf-8');

        readStream.on('data', data => stylesheets += data);
        readStream.on('end', () => writeStream.write(`${stylesheets}\n`));
        readStream.on('error', readStreamError => console.log(readStreamError));
      }
    });
  }
});