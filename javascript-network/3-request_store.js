const fs = require('fs');
const request = require('request');

// Check if both the URL and file path are provided as command line arguments
if (process.argv.length !== 4) {
  console.error('Usage: node fetch_and_store.js <URL> <file path>');
  process.exit(1);
}

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Perform a GET request to the specified URL
request.get(url, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    process.exit(1);
  }

  // Write the response body to the specified file
  fs.writeFile(filePath, body, 'utf-8', (writeError) => {
    if (writeError) {
      console.error('Error writing to file:', writeError.message);
      process.exit(1);
    }

    console.log(`Contents of the webpage have been saved to: ${filePath}`);
  });
});