const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

console.log(first);
console.log(second);

console.log("start");

//node will create the file if non-existent, or will override if already exists
writeFileSync(
  "./content/result-sync.txt",
  `Hello, here is the result:  ${first}, ${second}`,
  { flag: "a" }
);
//'a' (append): If the file specified in the first parameter already exists, the data will be appended to the end of the file. If the file doesn't exist, a new file will be created.

console.log("finish");
