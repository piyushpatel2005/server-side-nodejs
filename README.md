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

## ExpressJS

ExpressJS makes routing and application server development very easy. It gives simple methods with HTTP verbs which takes the route and the callback with request, response and next method which will be called after completion of this middleware.

You can see express routing in [Express](./04-express/index.js)

Express application can be developed using `express()` function from Express framework. ExpressJS uses different middleware through which request and response passes and the modified request object is then passed to the next middleware if `next()` function is called. If not, response ends there.

Response can be passed or written using different methods of `res` object. Like, `res.write`, `res.end`, `res.setHeader`, `res.json`. These are some of the methods. Check official [docs](http://expressjs.com) to see complete list of methods.

Routers can be separated into separate module. This uses `express.Router()` method to create router.

Check [example](./05-express-routing/index.js)

### Express Generator

Express application can be easily scaffolded out using  `express-generator`. This module can be installed globally and then we can easily type simple commands which will create simple Express application.

The generated applications has various folders.

`app.js` : starting application
`public` : static resources
`routes` : application routes
`views` : templates for application

We can install `express-generator` globally using:

`npm install -g express-generator`.

## MongoDB

MongoDB driver is available as npm package name `mongodb`. This provides various interaction functionality with the MongoDB.
