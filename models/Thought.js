const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },
  username: {
    type: String,
    required: true,
    trim: true
  },
  reactions: {
    type: Map,
    of: Number
  }
}, {
  timestamps: true
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
