const router = require('express').Router();

const {
  getAllThoughts,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  deleteReaction
} = require('../../controllers/thoughtController');

// GET all thoughts and POST a new thought
router.route('/')
  .get(getAllThoughts)
  .post(createThought);

// GET a single thought, PUT to update a thought, and DELETE a thought by id
router.route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// POST to add a new reaction to a thought
router.route('/:thoughtId/reactions')
  .post(addReaction);

// DELETE a reaction by id from a thought
router.route('/:thoughtId/reactions/:reactionId')
  .delete(deleteReaction);

module.exports = router;
