const mongoose = require('mongoose');

require('dotenv').config();

const dbState = [
  { value: 0, label: "disconnected" },
  { value: 1, label: "connected" },
  { value: 2, label: "connecting" },
  { value: 3, label: "disconnecting" }
];

//check connection to mongodb
const connection = async () => {
  const options = {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASSWORD
  }
  console.log(process.env.DB_HOST)
  await mongoose.connect(process.env.DB_HOST, options);
  // await mongoose.connect('mongodb://localhost:27017/testSTK');

  const state = Number(mongoose.connection.readyState);
  console.log(state);
  console.log(dbState.find(f => f.value === state).label, "to database"); // connected to db
}

module.exports = connection;