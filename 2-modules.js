//CommonJS, every file is a module by default
//Modules - encapsulated code (only shares minimum) - resuable peice of code that encapsulates functionality. Initially available locally untill explicitly exported.

const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative-flavor.js");

require("./6-mind-grenade.js"); // if you invoke/execute  a function, it can still run without assigning it to a variable or without the use of module.exports  - "The sum is 15"

console.log(data); // object

sayHi("susan");

sayHi(names.john);
sayHi(names.peter);

sayHi(data.items);
sayHi(data.items[0]);
sayHi(data.items[1]);

sayHi(data.singlePerson); // not working b/c it is an object
