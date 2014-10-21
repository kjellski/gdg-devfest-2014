'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var GdgSchema = new Schema({
  name: String,
  members: { type: Number, default: 1 },
  active: Boolean
});

module.exports = mongoose.model('Gdg', GdgSchema);