
const fs = require('fs');
let readStreem = fs.createReadStream('./01-read-file/text.txt')
readStreem.on('data', (chunk) =>  {
    console.log(chunk.toString());

})