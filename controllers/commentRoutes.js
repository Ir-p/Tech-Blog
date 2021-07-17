const router = require('express').Router();
const { Comment, Post, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/post/:id/comments/user-comment', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({
      ...req.body,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
    const comments = commentData.map((comment) => comment.get({ plain: true }));

    // Serialized data
    res.render('user-comment', {
      ...comments,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// new comment
router.get('/new', withAuth, async (req, res) => {
  try {
    const commentData = await Comment.findAll({});

    const comments = commentData.map((comment) => comment.get({ plain: true }));
    res.render('comment', {
      ...comments,
      user_name: req.session.user_name,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
