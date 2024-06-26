const postObject = {
    id: '5wHexPC5hib',
    joke: 'I made a belt out of watches once... It was a waist of time.'
  }
const postDadJoke = async(postObject) => {
const response = await fetch(`https://httpbin.org/post`, {
    method: "POST", 
    headers: {
        "content-type" : "application/json"
    },
    body: JSON.stringify(postObject)
   
})
const jsonResponse = await response.json();
console.log(jsonResponse)
}
postDadJoke(postObject)