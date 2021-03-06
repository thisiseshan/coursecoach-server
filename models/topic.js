const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  typ: {
  	type: String,
  	required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Topic', TopicSchema);
