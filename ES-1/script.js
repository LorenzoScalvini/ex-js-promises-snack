function getPost(id) {
  return fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return null;
    })
    .then((post) => {
      if (!post) {
        return null;
      }
      return fetch(`https://dummyjson.com/users/${post.userId}`)
        .then((response) => {
          if (response.ok) {
            return response.json();
          }
          return null;
        })
        .then((user) => {
          return { ...post, user };
        });
    })
    .catch(() => null);
}

getPost(1)
  .then((post) => {
    if (post) {
      console.log('Post completo con autore:', post);
    } else {
      console.log('Errore nel recupero del post');
    }
  })
  .catch((error) => {
    console.log('Si è verificato un errore:', error);
  });
