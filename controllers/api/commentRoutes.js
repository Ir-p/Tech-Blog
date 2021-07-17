const router = require('express').Router();
const { Comment } = require('../../models');

const withAuth = require('../../utils/auth');

// CREATE a comment 
router.post('/', withAuth, async(req, res) => {
    try {
      const commentData = await Comment.create({
        ...req.body,
        logged_in: req.session.logged_in,
        user_id: req.session.user_id
      });
  
      res.status(200).json(commentData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;