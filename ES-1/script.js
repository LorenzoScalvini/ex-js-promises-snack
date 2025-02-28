function getPostTitle(id) {
  return fetch(`https://dummyjson.com/posts/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Errore durante il recupero del post');
      }
      return response.json();
    })
    .then((data) => {
      return data.title;
    });
}

getPostTitle(1)
  .then((title) => {
    console.log('Titolo del post:', title);
  })
  .catch((error) => {
    console.error('Si è verificato un errore:', error);
  });
