// Write a function that takes a URL and fetches data from that URL 
// but aborts when the request takes more than 10ms

const abortObj = new AbortController();
const signal = abortObj.signal;
const fetchData = () => {
    setTimeout(() => {
        const data = fetch(`https://jsonplaceholder.typicode.com/users`, {signal}).then((response) => {
            if(!response.ok) {
                throw new Error("Can't fetch")
            }
            return response.json();

            
        }).then((resp) => {
            console.log(resp)
        }).catch((error) => {
            console.log(error.message)
        })
    },10)
}
fetchData()
abortObj.abort()
