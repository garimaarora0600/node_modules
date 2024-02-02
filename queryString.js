// it provides utilities for parsing and formatting URL query strings. It can be used to convert query string into JSON object and vice-versa.
// it is a part of URL that starts after question marks(?)

const querystring=require('querystring');

// import url from 'url'
const url=require('url');
// import querystring from 'querystring';
let exampleUrl='http://www.company.com:81/a/b/c.html?user=GEEKSFORGEEKS&year=2021#p2';

// parse the whole url
let parse_url=url.parse(exampleUrl);

//parse only querystring
let parsed_querystring=querystring.parse(parse_url.query);

console.log("This is the parse url: ",parse_url);
console.log("this is parsed queryString: ",parsed_querystring);

// const q= querystring.parse('year=2024&month=february');
// console.log(q.year);
const querystring=require('querystring');

const q2=querystring.stringify({
    name:'Testing',
    company:'GeeksforGeeks',
    content:'Article',
    date:'6thFeb2024'
});
console.log(q2);
