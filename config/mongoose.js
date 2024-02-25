
const mongoose = require("mongoose");

const connectDB = async () => {
   try {
    await mongoose.connect('mongodb+srv://abhayrpawar123:N0QJEgGmhcCf9Bn7@cluster0.yzduzus.mongodb.net/?retryWrites=true&w=majority');

      console.log("MongoDB Connected");
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};
module.exports = connectDB;
