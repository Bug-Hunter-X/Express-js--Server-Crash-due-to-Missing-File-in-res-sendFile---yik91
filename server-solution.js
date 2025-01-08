const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

app.get('/', (req, res) => {
  try {
    res.sendFile(path.join(__dirname, 'index.html'));
  } catch (err) {
    console.error(err);
    res.status(404).send('404 Not Found');
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});