const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/post-edit');
      } else {
        alert('Failed to delete the post');
      }
    }
  };

  document
  .querySelector('.post-list')
  .addEventListener('submit', delButtonHandler);