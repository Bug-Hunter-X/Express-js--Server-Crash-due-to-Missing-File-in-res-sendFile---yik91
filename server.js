const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // This will cause an error if the file doesn't exist
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});