// path provides utilities for working with file and directory paths.
const path=require('path');
// CASE-1 IF "dir","root", and "base" are all given, "root" is ignored.
let path1=path.format({
    root: "C:\\ignored\\root",
    dir: "website\\dist",
    base:"path.js",
});
console.log("path 1: ",path1);

// CASE2- if "dir" not specified then "root" will be used
// if only "root" is provided ,platform separator will not be included.
// "ext" will be ignored.
let path2=path.format({
    root:"C:\\",
    base:"style.css",
    ext:".ignored",
});
console.log("Path 2:",path2);


// CASE 3: if "base" is not specified "name" and "ext" will be used
let path3=path.format({
    root:"website\\",
    name:"main",
    ext:".js"
});
console.log("Path 3: ",path3);