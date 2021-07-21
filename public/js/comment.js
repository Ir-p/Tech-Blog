const createCommentHandler = async (event) => {
  event.preventDefault();

  const post_id = document.location.pathname.split('/')[2];
  const comment = document.querySelector('#comment-content').value.trim();
  console.log('comment and post_id:', comment, post_id);

  if (comment && post_id) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  }
};
console.log(document.location.pathname.split('/')[2]);

// browser event handler
document
  .querySelector('#comment-btn')
  .addEventListener('click', createCommentHandler);
