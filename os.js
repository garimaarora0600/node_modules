// os is node module used to provide information about the operating system.
// it provides functions to interact with the operating system. It provides the hostname of os a
// and returns amount of free memory in bytes.
const os=require('os');

// returning cpu architecture
console.log("CPU architecture: ",os.arch());

console.log("Free memory: ",os.freemem());

console.log("Total memory: ",os.totalmem());

console.log('List of network Interfaces: '+ os.networkInterfaces());

console.log('OS default directory for temp files: ' +os.tmpdir());

console.log("hostname: "+ os.hostname());