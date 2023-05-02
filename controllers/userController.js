const { User } = require('../models/User');

const userController = {
  // Get all users
  getUsers(req, res) {
    User.find({})
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(userData => res.json(userData))
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Get single user by ID
  getUserById({ params }, res) {
    User.findOne({ _id: params.userId })
      .populate({
        path: 'thoughts',
        select: '-__v'
      })
      .populate({
        path: 'friends',
        select: '-__v'
      })
      .select('-__v')
      .then(userData => {
        // If no user is found, send 404
        if (!userData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => {
        console.log(err);
        res.sendStatus(400);
      });
  },

  // Create new user
  createUser({ body }, res) {
    User.create(body)
      .then(userData => res.json(userData))
      .catch(err => res.json(err));
  },

  // Update user by ID
  updateUser({ params, body }, res) {
    User.findOneAndUpdate({ _id: params.userId }, body, { new: true, runValidators: true })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  },

  // Delete user by ID
  deleteUser({ params }, res) {
    User.findOneAndDelete({ _id: params.userId })
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  },

  // Add friend to user's friend list
  addFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $addToSet: { friends: params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  },

  // Remove friend from user's friend list
  removeFriend({ params }, res) {
    User.findOneAndUpdate(
      { _id: params.userId },
      { $pull: { friends: params.friendId } },
      { new: true }
    )
      .then(userData => {
        if (!userData) {
          res.status(404).json({ message: 'No user found with this ID!' });
          return;
        }
        res.json(userData);
      })
      .catch(err => res.json(err));
  }
};

module.exports = userController;