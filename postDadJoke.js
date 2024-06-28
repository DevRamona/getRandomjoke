// const postObject = {
//     id: '5wHexPC5hib',
//     joke: 'I made a belt out of watches once... It was a waist of time.'
//   }
// const postDadJoke = async(postObject) => {
// const response = await fetch(`https://httpbin.org/post`, {
//     method: "POST", 
//     headers: {
//         "content-type" : "application/json"
//     },
//     body: JSON.stringify(postObject)
   
// })
// const jsonResponse = await response.json();
// console.log(jsonResponse)
// }
// postDadJoke(postObject)

const postObject = {
    id: '5wHexPC5hib',
       joke: 'I made a belt out of watches once... It was a waist of time.'
     }

     const getJokes = async(postObject) => {
        const data = await fetch(`https://httpbin.org/post`, {
            method:"POST", 
            headers : {
                "content-type" : "application/json",
            }, 
            body: JSON.stringify(postObject)

        })
        const jsonResponse = await data.json();
        console.log(jsonResponse)
     }
     getJokes(postObject)

// const postObject = {
//       id: '5wHexPC5hib',
//          joke: 'I made a belt out of watches once... It was a waist of time.'
//        }

//        const postJoke =(postObject) => {
//         const data = fetch(`https://httpbin.org/post`, {
//             method: "POST",
//             headers : {
//                 "content-type" : "application/json"
//             },
//             body : JSON.stringify(postObject)
//         }).then(response => {
//             if(!response.ok) {
//                 throw new Error(`The HTTP request status : ${response.status}`)
//             }
//             return response.json()
//         }).then(data => console.log(data))
//         .catch(error => {
//             console.error(error.message)
//         })
//        }
//        postJoke(postObject)