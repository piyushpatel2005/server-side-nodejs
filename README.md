# Server Side NodeJS development

This repo is about NodeJS and its various modules.

This project explores various serverside JavaScript aspects.

[NodeJS](http://nodejs.org)
[MongoDB](http://mongodb.com)
[ExpressJS](http://expressjs.com)
[Mongoose](http://mongoosejs.com)

To work on this various lessons, install `NodeJS` and `npm`. `npm` comes with `NodeJS`

- Check version of NodeJS and npm using

`node -v`

`npm -v`


NodeJS uses CommonJS module syntax to make JavaScript modular. In Node, all files are modules. You can export only a part of the functions or variables to other applications using

`module.exports = <what_you_are_exporting>`

From another file, you can import this file using:

`require('<filename>'); // specify relative path`

If it is installed modules, then they can be importing directly as module name.

`require('<module-name>')`

Check the example of modules at [01-nodejs](./01-callbacks/index.js).

## Callbacks:

NodeJS uses asynchronous programming model. This is also called non-blocking model. It uses callback which will be executed once another function has been done.

When error occurs, an error object is returned else a proper object is returned.

Check [example of callback](./02-nodejs/rectangle.js)
