const requestJoke = async(firstName, lastName) => {
    try {
        const response = await fetch(`https://api.icndb.com/jokes/random?firstName=${firstName}&lastName=${lastName}`)
    const textJokeData = await response.json();
    console.log(textJokeData.value);

    } catch(error) {
        console.log("Caught error", error)
    }
    

}
requestJoke("clinton", "Eastwood")