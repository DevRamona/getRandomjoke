// // You are developing a web application that displays a list of user profiles. Each user profile contains the user's
//  name, email, and a list of their posts. You need to fetch the user details from one API and their posts from another
//   API.

// // Here are the requirements:

// // 1. Use the `fetch` API to get the user details from `https://jsonplaceholder.typicode.com/users`.
// // 2. For each user, use the `fetch` API to get their posts from `https://jsonplaceholder.typicode.com/posts?userId={userId}`.
// // 3. Display each user's name, email, and the titles of their posts in the console.

// // **Example:**

// // For each user, your application should:

// // 1. Fetch user details from `https://jsonplaceholder.typicode.com/users`.
// // 2. For each user, fetch their posts from `https://jsonplaceholder.typicode.com/posts?userId={userId}`.
// // 3. Display the results in the console as follow


const fetchUsers =async() => {
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users`)
    if(!userData.ok) {
        throw new Error(`Caught an error`)
    }
    const jsonUser = await userData.json()
    // console.log(jsonUser)
    for(const user of jsonUser) {
        const {name, email, id} = user;
        const postData = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        if (!postData.ok) {
            throw new Error(`Failed to fetch posts for user ${name}`);
            
        }
        const postJson = await postData.json()
        console.log(`User :${name}`)
     console.log(`Email : ${email}`)
     console.log(`Posts :`)
     postJson.forEach(post => {
        console.log(` - ${post.title}`)
     })
    }
     

    
    
    // console.log(postJson)
  
        // console.log(title)
        

    
    
    

} 
fetchUsers()