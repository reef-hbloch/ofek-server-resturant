const mongoose = require("mongoose");
// const { DB_USER, DB_PASS } = require("../config/envConfig");
const connectDB = async () => {
  try {
    // await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.lq4b1.mongodb.net/poco?retryWrites=true&w=majority`);
    await mongoose.connect(`mongodb+srv://dbUser:ram2399@cluster0.fosrujh.mongodb.net/poco?retryWrites=true&w=majority`)
    console.log("Connection successful");
  } catch (error) {
    console.log(error);
    process.exit(); 
  } 
}; 

module.exports = connectDB;
