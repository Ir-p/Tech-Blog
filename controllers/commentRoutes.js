const router = require('express').Router();
const { Comment, Post, User } = require('../models');

const withAuth = require('../utils/auth');

router.get('/post/:id', withAuth, async (req, res) => {
    try {
            const postData = await Post.findAll({
              include: [{
                model: Comment,
                attributes: ['id','comment'],
              }],
            });
    const posts = postData.map((post) => post.get({ plain: true }));
            
    // Serialized data
    res.render('user-comment', {
      ...posts,
      logged_in: req.session.logged_in,
      user_id: req.session.user_id,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// new comment
router.get('/post/:id/comments', withAuth, async (req, res) => {
 
  try {
    const postData = await Post.findAll({
      include: [{model: Comment, attributes: ['comment']}]
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('posts:', posts)
    res.render('user-comment', {
      ...posts,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
