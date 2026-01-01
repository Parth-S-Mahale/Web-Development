const fs = require('fs');

const readableStream = fs.createReadStream('example.txt')

const writableStream = fs.createWriteStream('example-output.txt')

readableStream.pipe(writableStream)

writableStream.on('finish', () => {
    console.log('File Copied Successfully !');
})