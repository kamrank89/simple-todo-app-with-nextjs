import dbConnect from "../../DataBase/dbConnect";
import Test from "../../Models/testModel";

async function addData(req, res) {
  dbConnect();
  console.log("creating the document");
  const testmodel = await Test.create(req.body);
  console.log(req.body);
  console.log("created the document");
  res.json({ testmodel });
}

export default addData;
