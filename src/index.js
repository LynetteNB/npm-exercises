const $ = require('jquery');

let sayhello = () => console.log("Hello!!");
sayhello();

$("body").html("<h1>This is an H1!</h1><ol><li>Step One</li><li>Step Two</li><li>Step Three</li></ol>");
