const fs = require("fs");
function dataWrite(a) {
  try {
    fs.writeFileSync("data.txt", a);
    return "Data written sucessfully";
  } catch (err) {
    console.log("Error while writing the data" + err);
  }
}
function dataRead() {
  try {
    const rf = fs.readFileSync("data.txt", { encoding: "utf-8" });
    return rf;
  } catch (err) {
    console.log("Error while reading the data" + err);
  }
}

function dataAppend() {
  try {
    fs.appendFileSync("data.txt", "\n" + "Data appended");
    return "Data appended successfully";
  } catch (err) {
    console.log("Error while appending the data" + err);
  }
}

function unlink() {
  try {
    fs.unlinkSync("data.txt");
    return "file unlink successfully";
  } catch (err) {
    console.log("Error while unlinking the file" + err);
  }
}

const obj = {
  dataRead: dataRead,
  dataWrite: dataWrite,
  dataAppend: dataAppend,
  unlink: unlink,
};
module.exports = obj;
