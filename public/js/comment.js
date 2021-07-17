const createCommentHandler = async (event) => {
    console.log("hello");
    event.preventDefault();

    const post_id = document.querySelector('#comment-title').value.trim();
    const comment = document.querySelector('#comment-content').value.trim();
    console.log(comment, post_id);
    
    if (post_id && comment) {
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({ comment, post_id }),
        headers: { 'Content-Type': 'application/json' }
      });
  

      if (response.ok) {
        document.location.replace('/comments');
      } else {
        alert(response.statusText);
      }
    }
  };
  
  // browser event handler
  document.querySelector('#comment-btn').addEventListener('click', createCommentHandler);