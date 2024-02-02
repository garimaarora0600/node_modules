const http=require('http');
/*the require function will return an object as the http module returns its functionality as an object. */
// http.createServer() will be executed when someone tries to access the computer on port 3000.
http.createServer((req,res)=>{
    // res.writeHead() is the status code where 200 is OK, and second argument is an object containing response headers.
    res.writeHead(200,{'Content-type':'text/html'});
    res.write("welcome to the page!!");
    res.end();
}).listen(3000);