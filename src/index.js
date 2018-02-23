const $ = require('jquery');
const niceString = require('./say-hello.js');

let sayhello = () => console.log("Hello!!");
sayhello();

$("body").html("<h1>This is an H1!</h1><ol><li>Step One</li><li>Step Two</li><li>Step Three</li></ol>");
$("body").append("<h3>" + niceString() + "</h3>");
