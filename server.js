
const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || "8085";
const path = require('path')
const webRouter = require('./routes/web')
const { logger } = require('./middleware/logger')
const errorHandler = require('./middleware/errorHandler')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const corsOptions = require('./config/corsOptions')
const connection = require('./config/database')
const mongoose = require('mongoose')
const { logEvents } = require('./middleware/logger')
const userRouter = require('./routes/userRoute')
const JWT = require('jsonwebtoken')
//Serving static files
app.use(express.static(path.join(__dirname, 'public'))) //built-in middleware

//using logger middleware
app.use(logger) //custom-middleware

//set up cors cross origin resource sharing
app.use(cors(corsOptions))

//using cookie-parser
app.use(cookieParser()) //third-party middleware
//parse JSON data
app.use(express.json())

//set Route
app.use('/', webRouter)
app.use('/users', userRouter)

//test jwt
const verifyAccessToken = (req, res, next) => {
  const authorizationHeader = req.headers['authorization']
  const token = authorizationHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({
      message: 'Unauthorized!'
    })
  }
  JWT.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, payload) => {
    console.log(err, payload)
    if (err) {
      return res.status(403).json({
        message: 'Forbidden users!'
      })
    }
    next()
  })
}
app.get('/jwt-test', verifyAccessToken, (req, res) => {
  let data = {
    email: 'caesar@gmail',
    username: 'caesar'
  }
  res.status(200).json({
    data: data
  })
})

app.post('/jwt-login', (req, res) => {
  const data = req.body
  const secretKey = process.env.ACCESS_TOKEN_SECRET
  const options = { expiresIn: '30s' }
  const accessToken = JWT.sign(data, secretKey, options)
  console.log(data)
  res.json({ accessToken })
})






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
  // test connection to database before running the server
  ; (async () => {
    try {
      // connect using mongoose
      await connection();
      app.listen(port, () => {
        console.log(`Server listening on port: ${port}`);
      });
    } catch (err) {
      console.log("Cannot connection to Database: ", err);
    }
  })();

