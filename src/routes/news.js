const express = require('express') ;
const route = express.Router() ;

const newcontroller = require('../app/controller/Newcontroller');


route.use('/CNTT',newcontroller.showCNTT)
route.use('/',newcontroller.index)


module.exports = route ; 