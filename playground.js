console.log("app started edited")
console.log(module)

const fs = require('fs');
const os = require('os');
debugger;
const user = os.userInfo();
fs.appendFile("greetings.txt",user.username,()=>{console.log("file created")});