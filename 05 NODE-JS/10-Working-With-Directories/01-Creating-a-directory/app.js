const fs = require("fs");

// fs.mkdir("newDirectory", (err) => {
//   if (err) {
//     return console.log('Error while creating directory:',err);
//   }

//   console.log('Directory created successfully');
// });

fs.mkdirSync('newdirectory2')
console.log("Directory created successfully");
