// process module
// process object is a global object that gives information about and controls the node.js process.
// as it is global, it can be used in the project without importing it from any module.


const process= require('process');

// process.versions property and variable count
let no_of_versions=0;

const versions= process.versions;

// iterating through all returned data
for(let key in versions){
    console.log(key +":\t\t\t" + versions[key]);
    no_of_versions++;
}

console.log("total no of values available: ", no_of_versions);