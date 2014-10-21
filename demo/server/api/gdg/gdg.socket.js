/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Gdg = require('./gdg.model');

exports.register = function(socket) {
  Gdg.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Gdg.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('gdg:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('gdg:remove', doc);
}