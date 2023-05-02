const router = require('express').Router();

const {
    allThoughts,
    oneThought,
    newThought,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction
} = require('../../controllers/thought-controller');

router.route('/').get(allThoughts);

router.route('/:thoughtId').get(oneThought).post(newThought).delete(deleteThought).put(updateThought);

router.route('/:thoughtId/reaction').post(createReaction);

router.route('/:thoughtId/reaction/:reactionId').delete(deleteReaction);

module.exports = router;