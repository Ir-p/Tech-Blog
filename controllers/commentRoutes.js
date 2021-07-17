// routes and models
const router = require('express').Router();
const { Comment, Post, User } = require('../models');

// helper to check if user is logged in
const withAuth = require('../utils/auth');

// my comments 
router.get('/', withAuth, async(req, res) => {
  try{
    const postData = await Post.findAll({
      include: [{  
        model: Comment, attributes: ['id', 'comment', 'date_created'],
        include: [{ model: User }],
        where: {user_id: req.session.user_id} 
      }]
    });
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log('posts:', posts);
    // Pass serialized data and session flag into template
    res.render("user-comments", {
      layout: "homepage",
      links,
      logged_in: req.session.logged_in,
      user_name: req.session.user_name,
      username: req.session.user,
      user_id: req.session.user_id
    }); 
  } catch (err) {
    res.status(500).json(err);
  }    
});

// new comment 
router.get('/new', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
    });

    const posts = postData.map((post) => post.get({ plain: true }));
    res.render('comment', { 
      layout: 'homepage',
      links, 
      logged_in: req.session.logged_in,
      user_name: req.session.user_name
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;