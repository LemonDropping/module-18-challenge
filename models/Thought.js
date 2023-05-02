const mongoose = require('mongoose');

const thoughtSchema = new mongoose.Schema({
  thoughtText: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 280
  },

  createdAt: {
    type: Date,
    default: Date.now,
    get: timestamp => dateFormat(timestamp)
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
  toJSON: {
    virtuals: true,
    getters: true
  },
  id: false
});

thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.size;
});

const Thought = mongoose.model('Thought', thoughtSchema);

module.exports = Thought;
