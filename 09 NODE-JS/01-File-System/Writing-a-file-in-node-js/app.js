const fs = require('fs')

const content = "Hello, NodeJS"

fs.writeFile('output.txt', content, (err) => {
    if(err){
        console.log(err);
        return;
    }
    console.log('File written successfully!');
    
})