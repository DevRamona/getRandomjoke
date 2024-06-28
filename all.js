// You are building a web application that needs to perform multiple asynchronous operations in parallel and handle their
//  results once all of them are completed. Specifically, you need to fetch data from three different APIs and then
//   process the combined results.

// Here are the requirements:

// 1. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/users`.
// 2. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/posts`.
// 3. Use the `fetch` API to get data from `https://jsonplaceholder.typicode.com/comments`.
// 4. Once all three fetch operations are completed, log the total number of users, posts, and comments in the console.


const urls = [
    `https://jsonplaceholder.typicode.com/users`,
    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholder.typicode.com/comments`

]
const differentApi = async(urls) => {
    try {
        const data = await Promise.all(urls.map(url => fetch(url)))
        const dataJson = await Promise.all(data.map(datas => datas.json()))
        const[users, posts, comments] = dataJson;

        console.log(`Total number of users: ${users.length}`);
        console.log(`Total number of posts: ${posts.length}`);
        console.log(`Total number of comments: ${comments.length}`);

    }catch(error) {
        console.log(error.message)
    }
    

}
differentApi(urls)