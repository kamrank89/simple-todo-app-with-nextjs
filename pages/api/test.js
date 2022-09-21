import dbConnect from "../../DataBase/dbConnect";
import Todo from "../../Models/todo";

async function addData(req, res) {
  dbConnect();

  const testmodel = await Todo.create(req.body);
  console.log(testmodel);
  res.json({ testmodel });
}

export default addData;
