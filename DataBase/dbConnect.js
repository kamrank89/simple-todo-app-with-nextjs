import mongoose from "mongoose";

async function dbConnect() {
  await mongoose.connect("mongodb://localhost:27017/todo-in-next").then(
    () => {
      console.log("database is now connected");
    },
    (err) => {
      console.log(err);
    }
  );
}

export default dbConnect;
