const fs=require("fs");

// fs.writeFile("fsAsync/read.txt", "today is an awesome day..",
// (err)=>{
//     console.log("file created!!");
// });


// fs.appendFile("fsAsync/read.txt","Hi, it's example of async file!!",
// ()=>{
//     console.log("task completed!!");
// });


// read the data
fs.readFile("fsAsync/read.txt","UTF-8",(err,data)=>{
    // console.log(data.toString());
    console.log(data);
})
