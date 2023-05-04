const User = require("../models/User");
const router = require("express").Router();
const Thought = require("../models/Thought");

module.exports = {
  getThoughts(req, res) {
    Thought.find()
      .populate("reactions")
      .then((dataThought) => {
        return res.json(dataThought);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  },

  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thoughtId })
      .then((thoughtData) => {
        return res.json(thoughtData);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },

  createNewThought(req, res) {
    Thought.create(req.body)
      .then((dataThought) => {
        return User.findOneAndUpdate(
          { username: req.body.username },
          { $push: { thoughts: dataThought._id } },
          { new: true }
        );
      })
      .then((userData) => {
        return res.json(userData);
      })
      .catch((err) => {
        return res.status(500).json;
      });
  },

  deleteThought(req, res) {
    Thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thoughtData) => !thoughtData)
      .then(() => res.json({ message: "The Thought has died" }))
      .catch((err) => res.status(500).json(err));
  },

  updateThought(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: "The Thought has died" })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },

  createReaction(req, res) {
    console.log("I've got an opinion on this!");
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: { reactionId: req.params.userId } } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "Better luck next time" })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },

  deleteReaction(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { _id: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((reaction) =>
        !reaction
          ? res.status(404).json({ message: "God Speed" })
          : res.json(reaction)
      )
      .catch((err) => res.status(500).json(err));
  },
};
