const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const eventsRoutes = require('./routes/events');
const userRoutes = require('./routes/userRoutes');

app.use(bodyParser.json());
app.use(cors());  
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
  res.send('Hello World from Event Management App');
});

// Events Route from routes/events.js
app.use('/events', eventsRoutes);

// User Route from routes/userRoutes.js
app.use('/api', userRoutes);

// Start Server on PORT 6000
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;