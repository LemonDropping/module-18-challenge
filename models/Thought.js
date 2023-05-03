const { Schema, model } = require("mongoose");
const { schemaReaction } = require("./Reaction");

const schemaThought = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },

    createdAt: {
      type: Date,
      default: Date.now,
      get: (date) => date.toLocaleDateString(),
    },

    username: {
      type: String,
      required: true,
    },

    reactions: [schemaReaction],
  },

  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

schemaThought.virtual("reactionCount").get(function () {
  return this.reactions.length;
});

const Thought = model("thought", schemaThought);

module.exports = Thought;
