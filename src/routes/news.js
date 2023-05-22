const express = require('express') ;
const route = express.Router() ;

const newcontroller = require('../app/controller/Newcontroller');


route.get('/CNTT',newcontroller.showCNTT)
route.get('/',newcontroller.index)


module.exports = route ; 