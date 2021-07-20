const createCommentHandler = async (event) => {
    console.log("hello");
    event.preventDefault();

    const post_id = document.querySelector('#comment-post-id').value.trim();
    const comment = document.querySelector('#comment-content').value.trim();
    console.log('comment and post_id:', comment, post_id);
    
    if (comment && post_id) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' }
      });
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // browser event handler
  document.querySelector('#comment-btn').addEventListener('click', createCommentHandler);