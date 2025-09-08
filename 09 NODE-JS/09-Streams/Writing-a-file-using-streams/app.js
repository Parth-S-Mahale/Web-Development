const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt')

writableStream.write('Hello, ');
writableStream.write('World!');

writableStream.end()

writableStream.on('finish', () => {
    console.log('finished writing to the file.');
    
})