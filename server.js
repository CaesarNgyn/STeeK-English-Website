
const express = require('express');
const app = express()
require('dotenv').config();
const port = process.env.PORT || "8085";
const path = require('path')
const webRouter = require('./routes/web')

//Serving static files
app.use(express.static(path.join(__dirname, 'public')))

//set Route
app.use('/', webRouter)

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

//Set up server
app.listen(port, () => {
  console.log(`STeeK Server now running on port ${port}`);
})