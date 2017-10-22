const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Promotions = require('../models/promotions');
const authenticate = require('../authenticate');
const cors = require('./cors');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.get('/', cors.cors, (req, res, next) => {
  Promotions.find({})
  .then((promotions) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.json(promotions);
  }, (err) => next(err))
  .catch(err => next(err));
});

promoRouter.post('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Promotions.create(req.body)
  .then((promo) => {
    console.log('Promotion create ', promo);
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch(err => next(err));
});

promoRouter.put('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation is not supported on /promotions');
});

promoRouter.delete('/', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Promotions.remove({})
  .then((resp) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(resp);
  }, (err) => next(err))
  .catch(err => next(err));
});


promoRouter.get('/:promoId', cors.cors, (req, res, next) => {
  Promotions.findById(req.params.promoId)
  .then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch(err => next(err));
});

promoRouter.post('/:promoId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation is not supported on /promotions/:promoId');
});

promoRouter.put('/:promoId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Promotions.findByIdAndUpdate(req.params.promoId, {
    $set: req.body
  }, {new: true})
  .then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch(err => next(err));
});

promoRouter.delete('/:promoId', cors.corsWithOptions, authenticate.verifyUser, authenticate.verifyAdmin, (req, res, next) => {
  Promotions.findByIdAndRemove(req.params.promoId)
  .then((promo) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'application/json');
    res.json(promo);
  }, (err) => next(err))
  .catch(err => next(err));
});

module.exports = promoRouter;
