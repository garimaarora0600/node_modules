// assert module provides a bunch of facilities that are useful for assertion of the function.
// it provides a set of assertion functions for verifying invariants. 
// if condition is true, it will output nothing else an asswertion error is given by the console.

// const assert=require("assert");
// let x=4;
// let y=5;
// try{
//     // checking condition
//     assert(x==y);
// }
// catch{
//     // error output
//     console.log(`${x} is not equal to ${y}`);
// }

// assert(x>y);

// asser.deepStrictEqual() function tests for deep equality between the 
// actual parameters and expected parameters.

// try{
//     assert.deepStrictEqual({a:1},{a:'1'});
// }
// catch(error){
//     console.log("Error: ",error);
// }

// try{
//     assert.deepStrictEqual({a:'5'},{a:'5'});
//     console.log("no error");
// }
// catch(error){
//     console.log("Error: ",error);
// }





// assert.ok()= it tests if the value is true or not.
// const assert=require('assert').strict;
// try{
//     assert.ok(false,"It's false");
// }
// catch(error){
//     console.log("Error:",error);
// }


// try{
//     assert.ok(typeof 12345==='number');
//     console.log("no error");
// }
// catch(error){
//     console.log("error: ",error);
// }

// deep equal is same as deepStrictEqual except that it adds the stict checking of type and value
// where deep equal does a == comparison of type and value.