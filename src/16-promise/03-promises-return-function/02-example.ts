const axios = require("axios"); // Import Axios library

function fetchDataFromAPI(url: string) {
  return new Promise((resolve, reject) => {
    axios
      .get(url)
      .then((response: { status: number; data: unknown }) => {
        if (response.status === 200) {
          resolve(response.data); // Resolve with the data
        } else {
          reject(new Error("Failed to fetch data from the API"));
        }
      })
      .catch((error: any) => {
        reject(error); // Reject with the error
      });
  });
}

// Example usage:
const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";
// Sample API URL
fetchDataFromAPI(apiUrl)
  .then((data) => {
    console.log(data); // Data fetched successfully
  })
  .catch((error) => {
    console.error(error); // Failed to fetch data from the API
  });

// හුගක් හවලොවට return promise use කරන්හන එ promise එක  විවිද purpose සද ො reuse කිරීහම අවශ්‍යතොවය මතයි.
