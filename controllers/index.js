const router = require('express').Router();

// home routes
const homeRoutes = require('./homeRoutes');
router.use('/', homeRoutes);

// API routes
const apiRoutes = require('./api');
router.use('/api', apiRoutes);

// post routes
const postRoutes = require('./postRoutes');
router.use('/dashboard', postRoutes);

// comment routes
const commentRoutes = require('./commentRoutes');
router.use('/comments', commentRoutes);


module.exports = router;
