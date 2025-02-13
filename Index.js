const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./models/db')
const UserRoute = require('./routes/UserRoute')
const BlogRoute = require('./routes/BlogRoute')
const Contactroute = require('./routes/ContactRoute')
const OfferRoute = require('./routes/OfferRoute')
const MockUpRoute = require('./routes/MockupRoute')

app.use(cors());
app.use(express.json());

app.use('/api', UserRoute)
app.use('/api/blog', BlogRoute)
app.use('/api/contact', Contactroute)
app.use('/api/offer', OfferRoute)
app.use('/api/mockUp', MockUpRoute)

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Remove the app.listen() call

module.exports = app;