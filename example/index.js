const Mime = require('../index');

var mime = new Mime();
// Alternatively; mime = new Mime('text/plain') to specify the expected default mime type returned on type queries

// Default mime type for unknown type queries
console.log("Default Mime Type: ", mime.type()); // eslint-disable-line

// mime.type Accepts file extensions with or without a '.' 
console.log("Mime type for: .txt", "-", mime.type(".txt")); // eslint-disable-line
console.log("Alternative extension: txt", "-", mime.type("txt")); // eslint-disable-line

// Can be used to generate content-type headers with the encoding specified
console.log("Content-Type:", mime.type(".txt", 'utf8')); // eslint-disable-line

// Find extensions for a known mime type
console.log("Known extensions for Mime Type: 'text/html' =", mime.ext("text/html")); // eslint-disable-line

// Unknown mime types always return '' for an extension query
console.log("Extensions for Unknown Mime Type: 'unknowntype' = '" + mime.ext("unknowntype") + "'"); // eslint-disable-line
