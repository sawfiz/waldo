const { DateTime } = require('luxon');
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const schema = new Schema(
  {
    game: { type: String, require: true, maxlength: 20 },
    name: { type: String, require: true, maxlength: 20 },
    time: { type: Number, require: true, maxlength: 20},
    date: { type: Date },
  }
);

module.exports = mongoose.model('Score', schema);
