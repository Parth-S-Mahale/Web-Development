const fs = require("fs");

const dirName = 'newDirectory3'

if(fs.existsSync(dirName)){
    console.log('Directory Exists');
} else {
    console.log('Directory does not exist');
}
