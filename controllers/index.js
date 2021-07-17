const router = require('express').Router();

// API routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// home routes
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

// post routes
const postRoutes = require('./postRoutes');
router.use('/dashboard', postRoutes);

// comment routes
// const commentRoutes = require('./commentRoutes');
// router.use('/comments', commentRoutes);


module.exports = router;
