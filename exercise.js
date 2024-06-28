const getFastPosts = () => {
    const urls = [
        'https://dummyjson.com/posts',
        'https://this-may-not-exist.com/posts',
        'https://jsonplaceholder.typicode.com/posts'
    ];
    const fetchPromises = urls.map(url => fetch(url).then(response => {
        if(!response.ok) {
            throw new Error (`HTTP error! Status: ${response.status} for URL: ${url}`);
        }
        return response.json();
    } ))
    return Promise.race(fetchPromises);
}
getFastPosts()
  .then(posts => {
    console.log(posts);
  })
  .catch(error => {
    console.error('Error fetching posts:', error);
  });