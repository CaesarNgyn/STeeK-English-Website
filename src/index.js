const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hanadlebars = require('express-handlebars');
const { url } = require('inspector');
const app = express();
const port = 3000;
const route = require('./routes')
const db = require('./config/db')
const methodOverride = require('method-override')



// override with POST having ?_method=DELETE or PUT
app.use(methodOverride('_method'))

//Connect to DB
db.connect();


// console.log(path.join(__dirname,'resources/views'));
// logger GET
// app.use(morgan('combined'));

//use middleware to get bodytable of POST via XMLHttpRequest , fetch ,axios
app.use(express.urlencoded({
  extended: true
}))
app.use(express.json())

//MiddleWare
// app.use(Guard)
function Guard(req,res,next){
  if(['user','admin'].includes(req.query.ve)){
    req.face = 'Yes'
    return next();
  }
  res.status(403).json({
    message : ' Access Denied ' ,
  })

}

// hanadlebars (template engine)
app.engine('hbs', hanadlebars.engine({
  extname: '.hbs',
  helpers: {
    sum: (a,b) => a+b ,
    checkSale : value => value ? value + '$' : 'free', 
  }
}))
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Run API public folder
app.use(express.static(path.join(__dirname, 'public')))


//Route innit
route(app);
// app.get('/', (req, res) => {
//   res.render('home');
// })

app.listen(port, () => {
  console.log(` App listening on port http://localhost:${port}`);
})