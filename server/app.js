const express = require('express');
const app = express();
const port = 5020;

app.use(express.static('public')); // Serve static files from the 'public' directory

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
