// Create a function called myFetch that should work as a simple version of the native fetch() API.
//  The function myFetch should use the XMLHttpRequest to make a GET Request and return a promise that
//   resolves with the request’s response and rejects with an error if any.function myFetch(){ //... your code here
// }
// myFetch('https://my-random-api.com/data')
// .then(data => console.log(data))
// .catch(error => console.log('Error:', error));

// const myFetch = () => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open("GET", `https://jsonplaceholder.typicode.com/posts`);
//     xhr.onload = function () {
//       if (xhr.status === 200) {
//         const data = JSON.parse(xhr.responseText);
//         console.log(data);
//         resolve(data);
//       }
//     };
//     xhr.onerror = function() {
//         reject("Network error")
//     }
//     xhr.send()
//   });
// };
// myFetch()
//   .then((data) => console.log(data))
//   .catch((error) => console.log("Error:", error));


 