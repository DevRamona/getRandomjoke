// // You are building a web application that fetches data from multiple APIs to display
//  information about different countries. You need to fetch the country details from one API
//   and the weather information for the capital city from another API.

// // Here are the requirements:

// // Use the fetch API to get the country details from [https://restcountries.com/v3.1/name/{countryName}](https://restcountries.com/v3.1/name/%7BcountryName%7D).
// // Use the fetch API to get the weather details from [https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true](https://api.open-meteo.com/v1/forecast?latitude=%7Blat%7D&longitude=%7Blon%7D&current_weather=true).
// // The weather API requires the latitude and longitude of the capital city, which you will get from the country details.
// // Display constthe country's name, capital city, and current temperature in the console.

// // Example:

// // If the user searches for "France", your application should:

// // Fetch country details from https://restcountries.com/v3.1/name/France.
// // Extract the capital city and its coordinates (latitude and longitude).
// // Fetch the current weather for the capital city from the weather API.

// // Display the results in the console as follows:

// // Country: France
// // Capital: Paris
// // Current Temperature: 18°C

// create an async function for the app

const fetchWeather = async (countryName) => {
  try {
    const countryData = await fetch(
      `https://restcountries.com/v3.1/name/${countryName}`
    );
    if (!countryData.ok) {
      throw new Error(`Failed to fetch`);
    }
    const countryResponse = await countryData.json();
    //  console.log(countryResponse)

    const country = countryResponse[0].name.common;
    const capitalCity = countryResponse[0].capital[0];
    const latitude = countryResponse[0].latlng[0];
    const longitude = countryResponse[0].latlng[1];
    //  console.log(`Country: ${country}`)
    //  console.log(`Capital city : ${capitalCity}`)
    //  console.log(`Latitude : ${latitude}`);
    //  console.log(`Longitude:${longitude}`)

    dataWeather = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    if (!dataWeather.ok) {
      throw new Error(`Caught an error`);
    }

    const responseWeather = await dataWeather.json();

    const temperature = responseWeather.current_weather.temperature;
    console.log(`${country}`);
    console.log(`${capitalCity}`);
    console.log(`${temperature}`);
  } catch (error) {
    console.log(error.message);
  }
};
const countryName = "Canada";
fetchWeather(countryName);

// const capitals = function (word) {
// 	function capitalIndices(word) {
//   const indices = [];
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === word[i].toUpperCase()) {
//       indices.push(i);
//     }
//   }
//   return indices;
// }

// console.log(capitalIndices("CodEWaRs"));
