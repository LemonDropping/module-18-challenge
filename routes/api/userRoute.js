const router = require('express').Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend
} = require('../../controllers/userController');

// GET all users and POST a new user
router.route('/')
  .get(getAllUsers)
  .post(createUser);

// GET a single user, PUT to update a user, and DELETE a user by id
router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

// POST to add a new friend to a user's friend list
router.route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(removeFriend);

module.exports = router;
