const router = require("express").Router();
const userRoutes = require("./userRoute");
const thoughtRoutes = require("./thoughtRoute");

router.use("/thoughts", thoughtRoute);
router.use("/users", userRoute);

module.exports = router;
