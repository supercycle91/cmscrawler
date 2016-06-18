 var fs = require("fs");
// Get content from file
 var contents = fs.readFileSync("log.json");
// Define to JSON type
 var jsonContent = JSON.parse(contents);
// Get Value from JSON
 console.log("User Name:", jsonContent.username);
 console.log("Email:", jsonContent.email);
 console.log("Password:", jsonContent.password);