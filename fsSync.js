// const fs=require("fs");

// creating a new file
// fs.writeFileSync("read.txt","Welcome to Node leaning!!");


// if file not present, it will first create the file, but if the file is already present, it'll override the text
// fs.writeFileSync("read.txt","Garima Arora, Welcome to Node leaning!!"); 

// what if I want to add data to my already existing file

// fs.appendFileSync("read.txt"," Hi, this is the modules example!!");


// if we want to read any file
// fs.readFileSync('read.txt');
// const buf_data=fs.readFileSync('read.txt');
// console.log(buf_data);
// giving output
/*<Buffer 47 61 72 69 6d 61 20 41 72 6f 72 61 2c 20 57 65 6c 63 6f 6d 65 20 74 6f 20 4e 6f 64 65 20 6c 65 61 6e 69
 6e 67 21 21 48 69 2c 20 74 68 69 73 20 69 73 ... 56 more bytes> 
 Nodejs has additional data type called Buffer, it is mainly used to
 store binary data, while reading a file or receiving packets over the 
network.
 */

// to convert buffer data to string
// const org_data=buf_data.toString();
// console.log(org_data);

// to rename file
// fs.renameSync("read.txt","read_write.txt");


// CHALLENGE:-
/*1.) Create a folder 
2.) create a file in it and data into it.
3.) Add more data into the file at the end of existing data.
4.)Read data without getting the buffer data at first.
5.) rename the file
6.) now delete both the file and folder */
// const fs=require("fs");
// fs.mkdirSync("challenge");
// fs.writeFileSync("challenge/read_write.txt","It's challenge time!!");

// fs.appendFileSync("challenge/read_write.txt"," Hi again!!");

// const data= fs.readFileSync("challenge/read_write.txt");
// const dattaa=data.toString();
// console.log(dattaa);

// fs.renameSync("challenge/read_write.txt","challenge/read_writechallenge.txt");

fs.unlinkSync("challenge/read_writechallenge.txt");
fs.rmdirSync("challenge");





