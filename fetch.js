// 1. Create a function called `fetchUserTodos` that uses the `Promise.all()` method to fetch users and todos concurrently
//  from the provided API endpoints and combine them based on the `userId`. The function should return a promise that resolves
//   with the combined data.
// - Users endpoints [`https://jsonplaceholder.typicode.com/users`](https://jsonplaceholder.typicode.com/users)
// - Todos endpoints [`https://jsonplaceholder.typicode.com/todos`](https://jsonplaceholder.typicode.com/todos)
//     The returned promise should resolve into an array of users, where each user object has a new key `todos`.
//     This key should contain an array of todos that belong to the user, determined by matching the `userId`
//     of thec todo with the `id` of the user. User objects may look like

const usersUrl = `https://jsonplaceholder.typicode.com/users`;
const todosUrl = `https://jsonplaceholder.typicode.com/todos`;
const fetchUserTodos = async () => {
  try {
    const [usersResponse, todoResponse] = await Promise.all([
      fetch(usersUrl),
      fetch(todosUrl),
    ]);
    if (!usersResponse || !todoResponse) {
      throw new Error("Can't fetch");
    }
    const users = await usersResponse.json();
    const todos = await todoResponse.json();
    // console.log(users);
    const combinedData = users.map((user) => {
      return {
        ...user,
        todos: todos.filter((todo) => todo.userId === user.id),
      };
      
    });
    console.log(JSON.stringify(combinedData, null , 2))
  } catch (error) {
    console.log(error.message);
  }
};
fetchUserTodos();
