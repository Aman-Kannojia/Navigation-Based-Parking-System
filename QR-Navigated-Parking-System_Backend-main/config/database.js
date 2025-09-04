import mongoose from "mongoose";
import "dotenv/config";

const dbConnect = () => {
  mongoose.connect(process.env.DATABASE_URL)
  .then(() => console.log("DB is Connected Successfully..."))
  .catch((error) => {
    console.log("Issue in DB Connection...");
    console.log(error.message);
    process.exit(1);
  })
};

export default dbConnect;