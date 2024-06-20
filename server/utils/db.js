const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/mern_admin_panel";
// const URI = "mongodb+srv://suyash:MOG1-2024-niki@cluster0.1if2bf9.mongodb.net/mern_admin?retryWrites=true&w=majority&appName=Cluster0";
const URI = process.env.MONGODB_URI;
console.log(URI);

const connectDb = async () => {
  try {
    await mongoose.connect(URI);
    console.log("connection successful to DB");
  } catch (error) {
    console.error("database connection fail");
    process.exit(0);
  }
};

module.exports = connectDb;