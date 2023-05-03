const router = require("express").Router();

const {
  getThoughts,
  getSingleThought,
  createNewThought,
  deleteThought,
  updateThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thoughtController");

router.route("/").get(getThoughts);

router
  .route("/:thoughtId")
  .get(getSingleThought)
  .post(createNewThought)
  .delete(deleteThought)
  .put(updateThought);

router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

router.route("/:thoughtId/reactions").post(createReaction);

module.exports = router;
