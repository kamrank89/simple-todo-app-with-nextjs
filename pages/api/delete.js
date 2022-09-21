import dbConnect from "../../DataBase/dbConnect";
import Todo from "../../Models/todo";
async function deleteData(req, res) {
  dbConnect();

  const testmodel = await Todo.deleteOne(req.body);

  res.json({ testmodel });
}

export default deleteData;
