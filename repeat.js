// // // // // Implement a function called repeatEvery() that takes another function and a time interval
// // // // // (in milliseconds) as arguments. This function should execute the given function repeatedly
// // // // //  at the specified time interval until manually stopped.

// // // // function sayHello() {
// // // //     console.log("Hello")
// // // // }
// // // // let timer = setInterval(sayHello, 2000)
// // // // setTimeout(() => {
// // // //     clearInterval(timer)
// // // //     console.log("Stopped execution")
// // // // }, 10000)
// // // // // 2. Use the `async/await` syntax to fetch vehicle manufacturers’ data from the
// // // //  given API endpoint. After fetching, filter the results and log to the console only
// // // //  manufacturers whose `Country` is equal to `"UNITED STATES (USA)"`

// // // //     The API endpoint you should use is: [`https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`](https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2)

// // // const fetchManufactures = async () => {
// // //   try {
// // //     const data = await fetch(
// // //       `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllManufacturers?format=json&page=2`
// // //     );
// // //     if (!data.ok) throw new Error(`No HTTP request : ${data.status}`);
// // //     const response = await data.json();

// // //     const result = response.Results
// // //     const outputs = result.filter(output => output.Country === "UNITED STATES (USA)")
// // //     console.log(outputs);

// // //   } catch (error) {
// // //     console.error("Can't fetch");
// // //   }
// // // };
// // // fetchManufactures();

// // Implement a function performFastAsync() that sends a GET request to a specified API endpoint,
//  simultaneously initiates a timer with a given delay, and cancels either the request or timer based on which one
//   finishes first.

// // The function will accept two parameters: the URL of the API endpoint to send a request to and the number of
//  seconds (in milliseconds) to delay the timer.

// // The desired behavior involves two possible outcomes:
// // - If the request successfully completes before the timer runs out, the function should cancel the timer and
//  return a promise that resolves with the data obtained from the request.

// // - if the timer expires before the request finishes, the function should cancel the ongoing request and
//  return a promise that resolves with an empty array.

function performFastAsync(url, delay) {
  return new Promise((resolve, reject) => {
    const object = new AbortController();
    const signal = object.signal;

    const fetchPromise = fetch(url, {signal})
    .then((promise) => {
      promise.json()
    }).then((Result) => {
      clearTimeout(timerId);
      resolve(Result)
    }).catch(err => {
      if(err.name === "abortError") {
        resolve([])
      } else {
        reject(err)
      }
    })


    const timerId = setTimeout(() => {
      object.abort();
      resolve([])
    },delay)
  });
}
performFastAsync()