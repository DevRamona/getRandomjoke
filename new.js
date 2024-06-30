// // You are developing a web application that aggregates and processes data from multiple sources. 
// The application needs to fetch user data, their posts, the comments on those posts, and the albums and
//  photos associated with the user. The function should perform the following tasks:

// // 1. Fetch user data from `https://jsonplaceholder.typicode.com/users/{userId}`.
// // 2. Fetch the user's posts from `https://jsonplaceholder.typicode.com/posts?userId={userId}`.
// // 3. Fetch the comments for each post from `https://jsonplaceholder.typicode.com/comments?postId={postId}`.
// // 4. Fetch the user's albums from `https://jsonplaceholder.typicode.com/albums?userId={userId}`.
// // 5. Fetch the photos for each album from `https://jsonplaceholder.typicode.com/photos?albumId={albumId}`.
// // 6. Calculate and display the following information:
// //     - The user's name and email.
// //     - The total number of posts and the average number of comments per post.
// //     - The total number of albums and the average number of photos per album.



const fetchData = async(userId) => {
    try {
         const [userData, postData, albumData] = await Promise.all([
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`),
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
         ])
         if(!userData.ok) throw new Error("Failed to fetch users");
         if(!postData.ok) throw new Error("Failed to fetch posts");
         if(!albumData.ok) throw new Error("Failed to fetch album");

         const users = await userData.json();
         const posts = await postData.json();
         const album = await albumData.json();

        //  console.log(users)
        //  console.log(posts)
        //  console.log(album)

         const commentPromises = posts.map(post => fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`).then(response => {
            if(!response.ok) throw new Error("Can't fetch comments")
                return response.json()
         }))
         const comments = await Promise.all(commentPromises)
        //  console.log(comments)

         const photoAlbumsPromises = album.map(albums => fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albums.id}`).then(resp => {
            if(!resp.ok) throw new Error("Can't fetch photos")
                return resp.json()
         }))
         const photoAlbums = await Promise.all(photoAlbumsPromises)
        //  console.log(photoAlbums)


         const totalComments = comments.flat().length;
         const averageCommentsPerPost = posts.length > 0 ? (totalComments / posts.length).toFixed(2) : 0;
 
         const totalPhotos = photoAlbums.flat().length;
         const averagePhotosPerAlbum = photoAlbums.length > 0 ? (totalPhotos / photoAlbums.length).toFixed(2) : 0;
 
         // Display results
         console.log(`User: ${users.name}, Email: ${users.email}`);
         console.log(`Total Posts: ${posts.length}, Average Comments per Post: ${averageCommentsPerPost}`);
         console.log(`Total Albums: ${photoAlbums.length}, Average Photos per Album: ${averagePhotosPerAlbum}`);


    }catch(error) {
        console.error(error.message)
    }
    

}
fetchData("10")