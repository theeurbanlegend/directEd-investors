const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_URL, {connectTimeoutMS:10000});
    console.log("Mongo DB Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
module.exports=connectDB