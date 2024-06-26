const getPromise = async() => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const response =  data.json()
    console.log(response instanceof Promise)
}
getPromise();