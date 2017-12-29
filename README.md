# mime

> Simple mime type library. Can be used standalone or as a module for the allegiant app framework.
>> There be 🐲 here! The API and functionality are being cemented, anything before a 1.0.0 release is subject to change.

# Installation

```
npm install @allegiant/mime --save
```

## Usage
```js
const Mime = require('@allegiant/mime');

var mime = new Mime();
// Alternatively; mime = new Mime('text/plain') to specify the expected default mime type returned on type queries

// Default mime type for unknown type queries
console.log("Default Mime Type: ", mime.type());

// mime.type Accepts file extensions with or without a '.' 
console.log("Mime type for: .txt", "-", mime.type(".txt"));
console.log("Alternative extension: txt", "-", mime.type("txt"));

// Can be used to generate content-type headers with the encoding specified
console.log("Content-Type:", mime.type(".txt", 'utf8'));

// Find extensions for a known mime type
console.log("Known extensions for Mime Type: 'text/html' =", mime.ext("text/html"));

// Unknown mime types always return '' for an extension query
console.log("Extensions for Unknown Mime Type: 'unknowntype' = '" + mime.ext("unknowntype") + "'");
```

### Copyright & License

Copyright &copy; 2017 Allegiant. Distributed under the terms of the MIT License, see [LICENSE](https://github.com/allegiant-js/mime/blob/master/LICENSE)

Availble via [npm](https://www.npmjs.com/package/@allegiant/mime) or [github](https://github.com/allegiant-js/mime).
