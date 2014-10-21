'use strict';

var _ = require('lodash');
var Gdg = require('./gdg.model');

// Get list of gdgs
exports.index = function(req, res) {
  Gdg.find(function (err, gdgs) {
    if(err) { return handleError(res, err); }
    return res.json(200, gdgs);
  });
};

// Get a single gdg
exports.show = function(req, res) {
  Gdg.findById(req.params.id, function (err, gdg) {
    if(err) { return handleError(res, err); }
    if(!gdg) { return res.send(404); }
    return res.json(gdg);
  });
};

// Creates a new gdg in the DB.
exports.create = function(req, res) {
  Gdg.create(req.body, function(err, gdg) {
    if(err) { return handleError(res, err); }
    return res.json(201, gdg);
  });
};

// Updates an existing gdg in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Gdg.findById(req.params.id, function (err, gdg) {
    if (err) { return handleError(res, err); }
    if(!gdg) { return res.send(404); }
    var updated = _.merge(gdg, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, gdg);
    });
  });
};

// Deletes a gdg from the DB.
exports.destroy = function(req, res) {
  Gdg.findById(req.params.id, function (err, gdg) {
    if(err) { return handleError(res, err); }
    if(!gdg) { return res.send(404); }
    gdg.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}