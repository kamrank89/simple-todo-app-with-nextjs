import dbConnect from "../DataBase/dbConnect";
import Test from "../Models/testModel";

function Home({ tests }) {
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
  };
  return (
    <div>
      <button className="bg-gray-300 rounded m-24" onClick={createTest}>
        Create a Test
      </button>

      {tests.map((test) => (
        <div className="flex text-green-400" key={test._id}>
          <h1 className="m-3"> Name: {test.name} </h1>
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
  console.log("found the document");
  console.log(tests);

  return { props: { tests: JSON.parse(JSON.stringify(tests)) } };
}
export default Home;
