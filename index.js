const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the Training Data Platform!');
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});