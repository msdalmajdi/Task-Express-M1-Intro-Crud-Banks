const mongoose = require("mongoose");
const connectDB = async () => {
  const con = await mongoose.connect("", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`Connected to Database: ${con.connection.host} .`);
};
module.exports = connectDB;
