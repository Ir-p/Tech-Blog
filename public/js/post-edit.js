const updatePostHandler = async (event) => {
  event.preventDefault();

  const id = window.location.toString().split('/').slice(-1)[0];
  const title = document.querySelector('#post-title').value.trim();
  const content = document.querySelector('#post-content').value.trim();
  

  console.log("title, conent:", title, content);
  
  if (id && title && content) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: { 'Content-Type': 'application/json' }
    });


    if (response.ok) {
      document.location.replace(`/dashboard`);
    } else {
      alert(response.statusText);
    }
  }
};

const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete the post');
      }
    }
  };

  document.querySelector('#update-post-btn').addEventListener('click', updatePostHandler);
  document.querySelector('#delete-post-btn').addEventListener('click', delButtonHandler);