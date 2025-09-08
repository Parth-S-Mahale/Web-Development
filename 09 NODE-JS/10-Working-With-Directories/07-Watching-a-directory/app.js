const fs = require("fs");

fs.watch('./', (eventtype, filename) => {
    console.log(`Event ${eventtype}`);
    if(filename){
        console.log(`Filname: ${filename}`);      
    }
})
