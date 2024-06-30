// javascriptCopy code
function fetchUserData(userId) {
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch user');
        }
        return response.json();
    });

    const postsPromise = fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }
        return response.json();
    });

    const albumsPromise = fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`).then(response => {
        if (!response.ok) {
            throw new Error('Failed to fetch albums');
        }
        return response.json();
    });

    Promise.all([userPromise, postsPromise, albumsPromise])
        .then(async ([user, posts, albums]) => {
            const commentsPromises = posts.map(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`).then(response => response.json()));
            const comments = await Promise.all(commentsPromises);

            const photosPromises = albums.map(album => fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`).then(response => response.json()));
            const photos = await Promise.all(photosPromises);

            const totalComments = comments.flat().length;
            const averageCommentsPerPost = posts.length > 0 ? totalComments / posts.length : 0;

            const totalPhotos = photos.flat().length;
            const averagePhotosPerAlbum = albums.length > 0 ? totalPhotos / albums.length : 0;

            console.log(`User: ${user.name}, Email: ${user.email}`);
            console.log(`Total Posts: ${posts.length}, Average Comments per Post: ${averageCommentsPerPost.toFixed(2)}`);
            console.log(`Total Albums: ${albums.length}, Average Photos per Album: ${averagePhotosPerAlbum.toFixed(2)}`);
        })
        .catch(error => {
            console.error(error);
        });
}

// Example usage:
fetchUserData(1);


