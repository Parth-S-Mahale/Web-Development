const fs = require('fs');
const writableSteam = fs.createWriteStream('output.txt')
const readline = require('readline')

const readableStream = fs.createReadStream('example.txt')

const rl = readline.createInterface({input: readableStream})

rl.on('line', (line) => {
    console.log('Line:', line);    
})

rl.on('close', () => {
    console.log('Finished processing the file.');   
})

