const promise = require("fs").promises;
const a = promise.writeFile("data.txt", "Hello using promises");
a.then(() => {
  console.log("Data Written");
})
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("File created successfully");
  });
