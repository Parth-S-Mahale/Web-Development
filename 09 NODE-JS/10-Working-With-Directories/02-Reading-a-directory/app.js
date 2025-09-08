const fs = require("fs");

// fs.readdir('./', (err, files) => {
//     if(err){
//         console.log('Error while reading directory:',err);
//     }
//     console.log('Directory Content:', files);
// })

const files = fs.readdirSync('./')
console.log("Directory Content:", files);
