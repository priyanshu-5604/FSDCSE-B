const fs = require("fs");
fs.writeFile("data2.txt", "Welcome to FSD Session", () => {
  console.log("Data Written successfully");
});

fs.readFile("data2.txt", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
