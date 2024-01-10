//importing the file system module - provides functionality for working files
const { readFile, writeFile } = require("fs");

console.log("start");

/*
reads the content of the pathway asynchronously
callback function will run once functionality is complete
*/

readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return; //exits function
  }
  const first = result; //sets content of first file to "first variable"

  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    const second = result;

    //asynchronously writes the combined text files into a new file
    writeFile(
      "./content/result-async.txt",
      `Here is the result: ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("done with this task");
      }
    );
  });
});
console.log("starting next task");

//Async - the read and write functions can operate concurrently, they do not have to be sequentially. Once the files are read/written - the callback function is executed to indicate completion.
