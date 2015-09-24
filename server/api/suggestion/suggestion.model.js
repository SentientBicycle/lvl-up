'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SuggestionSchema = new Schema({
  title: String,
  content: String,
  likes: Number,
  date: Date,
  tags: [String],
  geometry: { type: { type: String, default:'Point' }, coordinates: [Number] },
  status: String
});

module.exports = mongoose.model('Suggestion', SuggestionSchema);