const router = require('express').Router();
const { Post, User } = require('../models');

// edit post
router.get('/post-edit/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    const post = postData.get({ plain: true });
    console.log('post:', post)
    res.render('post-edit', {
      layouts: 'homepage',
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// export
module.exports = router;
