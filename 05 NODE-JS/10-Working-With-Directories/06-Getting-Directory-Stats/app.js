const fs = require("fs");

fs.stat('example.txt', (err, stats) => {
    if(err) {
        return console.error(err);
    }
    console.log('Directory stats:', stats);
    console.log('is directory:', stats.isDirectory());
})
