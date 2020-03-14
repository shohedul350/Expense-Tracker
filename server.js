const express = require('express');
const dotenv = require('dotenv');
// const colors = require('colors');
const morgan = require('morgan');
const path = require('path');
const connectDB = require('./config/db');

//  connect database
dotenv.config({ path: './config/config.env' });
connectDB();
const app = express();

app.use(express.json());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// server static assets if in production

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
// route
app.use('/api/v1/transactions', require('./routes/transactions'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server is running on ${process.env.NODE_ENV} mode on port ${PORT}`));
