import dbConnect from "../../DataBase/dbConnect";
import Test from "../../Models/testModel";

async function deleteData(req, res) {
  dbConnect();
  console.log("deleting the document");
  const testmodel = await Test.deleteOne(req.body);
  console.log(req.body);
  console.log("deleted the document");
  res.json({ testmodel });
}

export default deleteData;
