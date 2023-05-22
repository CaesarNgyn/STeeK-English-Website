const mongoose = require("mongoose");
const slug = require("mongoose-slug-updater");

mongoose.plugin(slug); 

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const Course = new Schema({
    // _id: ObjectId,
    name: { type: String, maxLength: 255 , default:"anonymous" ,require: true},
    description: String,
    image: { type: String, maxLength: 255 },
    price: { type : Number , min: 0 , index : true } ,
    slug : { type : String , slug : "name" ,unique : true } ,  
    vidID : String ,
    // createdAt : { type : Date , default : Date.now} ,
    // updatedAt : { type : Date , default : Date.now} ,
},{
    timestamps : true ,     
})

module.exports = mongoose.model('Course',Course);
