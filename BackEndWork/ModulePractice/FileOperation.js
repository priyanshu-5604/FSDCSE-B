const fs = require("fs");
fs.readFile("studentData.json", (err, data) => {
  if (err) {
    console.log(err);
  }
  console.log(data.toString());
});
