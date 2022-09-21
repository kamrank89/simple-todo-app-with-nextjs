import dbConnect from "../DataBase/dbConnect";
import Test from "../Models/testModel";
import { useRouter } from "next/router";

function Home({ tests }) {
  const router = useRouter();
  const createTest = async () => {
    const randomNum = Math.floor(Math.random() * 1000);
    const res = await fetch("api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: `test${randomNum}`,
        email: `test${randomNum}@gmail.com`,
      }),
    });
    const data = await res.json();
    console.log(data);
    router.reload();
  };
  const deleteTest = async () => {
    const res = await fetch("api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        _id: tests._id,
      }),
    });
    const data = await res.json();
    console.log(data);
    router.reload();
  };
  return (
    <div>
      <button className="bg-gray-300 rounded m-24" onClick={createTest}>
        Create a Test
      </button>
      <input
        type="text"
        className="m-3 bg-blue-400"
        // value={test._id}
        // onClick={deleteTest}
      />

      {tests.map((test) => (
        <div className="flex text-green-400" key={test._id}>
          <input
            type="checkbox"
            className="m-3"
            value={test._id}
            onClick={deleteTest}
          />
          <h1 className="m-3 text-green-800">Name: {test.name}</h1>
          <br></br>
          <p className="m-3 text-blue-800"> Email: {test.email}</p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();
  console.log("finding the document");
  const tests = await Test.find({});
  console.log(tests);
  console.log("found the document");

  return { props: { tests: JSON.parse(JSON.stringify(tests)) } };
}
export default Home;
