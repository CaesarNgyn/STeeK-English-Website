
const express = require('express');
const app = express()
require('dotenv').config();
const port = process.env.PORT || "8085";
const path = require('path')
const webRouter = require('./routes/web')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')

//Serving static files
app.use(express.static(path.join(__dirname, 'public'))) //built-in middleware

//using logger middleware
app.use(logger) //custom-middleware

//set up cors cross origin resource sharing
app.use(cors(corsOptions))

//using cookie-parser
app.use(cookieParser()) //third-party middleware

//set Route
app.use('/', webRouter)

//parse JSON data
app.use(express.json())

//Handling 404 Error
app.all('*', (req, res) => {
  res.status(404)
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'))
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' })
  } else {
    res.type('txt').send('404 Not Found')
  }
})

//using errorHandler for errer handling middleware
app.use(errorHandler)

//Set up server
app.listen(port, () => {
  console.log(`STeeK Server now running on port ${port}`);
})