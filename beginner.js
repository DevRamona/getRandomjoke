// // Create a function that takes a callback and executes it after 3 seconds using `setTimeout`

// function createFunc(callback) {
//     setTimeout(() => {
//         callback("Hello World")
//     },3000)

    
    

// }
// function functionCreated(message) {
//     console.log(message)
// }
// createFunc(functionCreated)




// Create a simple callback function that multiplies two numbers and then calls a callback with the result.


function multiply(a,b,callback) {
   const result = a * b
    callback(result)

}
function multiplication(result) {
    console.log(`The multiplication will be: ${result}`)
}
multiply(5, 10, multiplication)