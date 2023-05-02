const router = require('express').Router();
const userRoutes = require('./api/users-routes');
const thoughtRoutes = require('./api/thoughts-routes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;
