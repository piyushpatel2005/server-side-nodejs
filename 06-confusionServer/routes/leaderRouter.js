const express = require('express');
const bodyParser = require('body-parser');

const leaderRouter = express.Router();

leaderRouter.use(bodyParser.json());

leaderRouter.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send all leaders to you!');
  })
  .post((req, res, next) => {
    res.end('will add the leader ' + req.body.name + ' with details ' + req.body.description);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leaders');
  })

leaderRouter.route('/:leaderId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
  })
  .get((req, res, next) => {
    res.end('will send leader with id: ' + req. params.leaderId);
  })
  .post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation is not supported on /leaders/:leaderId');
  })
  .put((req, res, next) => {
    res.write('Updating the leader: ' + req.params.leaderId + '\n');
    res.end('Will update leader: ' + req.body.name + ' with details: ' + req.body.description);
  })
  .delete((req, res, next) => {
    res.end('Will delete leader with id ' + req.params.leaderId);
  });

  module.exports = leaderRouter;
