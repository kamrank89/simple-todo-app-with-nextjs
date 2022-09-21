import { Schema, model, models } from "mongoose";

const todoSchema = new Schema({
  name: String,
});

const Todo = models.Todo || model("Todo", todoSchema);

export default Todo;
