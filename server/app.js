// Testing Server

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();


app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World from Event Management App');
});

const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
