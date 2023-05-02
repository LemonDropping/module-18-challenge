const router = require('express').Router();

const {
  getThoughts, 
  getSingleThought,
  createNewThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require('../../controllers/thought-controller')

// Get all thoughts + create new thoughts
router.route('/').get(getThoughts).post(createNewThought);

// Get a single thought by it's _id 
// Update a thought by it's _id
// Remove a thought by it's _id
router.route('/:thoughtId').get(getSingleThought).put(updateThought).delete(deleteThought);

// Create new reaction 
// delete a reaction
router.route('/:thoughtId/reactions').post(createReaction);
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;