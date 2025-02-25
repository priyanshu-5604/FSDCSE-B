const { unlink } = require("fs");
const { dataRead, dataWrite, dataAppend } = require("./FileOperation");

const ans = dataWrite("Hello Node.js using Fs Module");
console.log(ans);

const res = dataRead();
console.log("Read Data: " + res);

const r1 = dataAppend();
console.log(r1);

const r2 = unlink();
console.log(r2);
