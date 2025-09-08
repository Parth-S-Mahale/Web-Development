const fs = require("fs");

/* 
fs.rmdir('newDirectory', (err) => {
    if(err){
        return console.log('Error while removing directory:',err);
    }
    console.log('Directory removed successfully');
    
}) 
*/

/* 
fs.rm('newDirectory',{recursive: true}, (err) => {
    if(err){
        return console.log('Error while removing directory:',err);
    }
    console.log('Directory removed successfully');
    
}) 
*/

fs.rmdirSync('newDirectory2')
console.log("Directory removed successfully");
