const urls = [
    `https://jsonplaceholder.typicode.com/posts`,
    `https://jsonplaceholder.typicode.com/albums`,
    `https://jsonplaceholder.typicode.com/todos`
]

const fetchData =()=> {
   return new Promise((resolve, reject) => {
        const mappedUrl = urls.map(url => fetch(url))
        //  console.log(mappedUrl);
        return Promise.all(mappedUrl)
        .then(response => console.log(response.json()))
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error(error.message)
        })

     })

} 
fetchData()
.then(resp => console.log(resp))
.catch(error => console.error(error.message))
// Promise.all(mappedUrl).then(response => console.log(response))