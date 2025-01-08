# Express.js: Handling Missing Files in res.sendFile()

This repository demonstrates a common error in Express.js applications: server crashes due to missing files when using `res.sendFile()`.  The example shows how to handle this error gracefully, preventing application crashes and providing informative error responses to the client.

## Bug

The original `server.js` attempts to serve `index.html` using `res.sendFile()`.  If `index.html` is missing, the server crashes.  This is because `res.sendFile()` doesn't handle file-not-found errors inherently.

## Solution

The `server-solution.js` demonstrates a robust solution. It uses a `try...catch` block to handle potential errors. If the file is not found, it responds with a custom 404 error message, preventing the server crash. This improves the user experience by providing a more informative response.

## How to reproduce the bug

1.  Clone this repository.
2.  Run `npm install express`
3.  Start the server: `node server.js`
4.  (Bug) Access the application in your browser.  You will see a server error if index.html is missing.
5.  (Solution) Uncomment `server-solution.js` and run `node server-solution.js`.  Access the application; a user-friendly "404 Not Found" message will now be displayed.
