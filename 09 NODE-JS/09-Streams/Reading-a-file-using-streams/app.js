const fs = require('fs')
const readableStream = fs.createReadStream('example.txt', {encoding: 'utf8'})

readableStream.on('data', (chunk) => {
    console.log(chunk);
})

readableStream.on('end', () => {
    console.log('Finished reading the file!');
})

readableStream.on('error', (err) => {
    console.log('Error:', err);
})
