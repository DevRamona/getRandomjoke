const getDadJoke = async () => {
    try {
        const data = await fetch(`https://icanhazdadjoke.com/`, {
            method : "GET", 
            headers: {
                Accept: "text/plain" 

        }
            
            }
        );
        const textJokeData = await data.text();
        console.log(textJokeData)
        
    }catch(error) {
        console.log("Caught an error", error)
    }
   
}
getDadJoke()