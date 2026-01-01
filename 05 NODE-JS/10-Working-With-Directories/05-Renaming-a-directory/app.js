const fs = require("fs");

fs.rename("newDirectory", "newDirectory3", (err) => {
  if (err) {
    return console.error("Error renaming directory:", err);
  }
  console.log("Directory rename successfully!");
});
