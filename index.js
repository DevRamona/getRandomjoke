const para = document.getElementById("text");
const button = document.getElementById("btn");

const getJoke = async() => {
    const fetchedData = await fetch(`https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit`);
    const response = await fetchedData.json();
    // console.log(response)
    setTimeout(() => {
        if(response.type === "single"){
            para.textContent = response.joke
        } else if(response.type === "twopart") {
            para.textContent = `${response.setup} ${response.delivery}`
        }

    }, 2000)
    
    button.addEventListener("click", getJoke);
}
getJoke()


