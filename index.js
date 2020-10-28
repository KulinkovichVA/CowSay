const myInformation = require('./information.js');
const myMessage = `Hello I'm ${myInformation.name} from ${myInformation.campus}`;
const cowsay = require("cowsay");
console.log(cowsay.say({text: myMessage, e: "oO", T: "U"}));
