import dbConnect from "../DataBase/dbConnect";
import { useRouter } from "next/router";
import Todo from "../Models/todo";

function Home({ todos }) {
  const router = useRouter();
  const createTest = async (e) => {
    const data = e.target.todo.value;
    console.log(data);

    const res = await fetch("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: data,
      }),
    });
    const result = await res.json();

    router.reload();
  };
  const deleteTest = async () => {
    const res = await fetch("api/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        _id: todos._id,
      }),
    });

    router.reload();
  };
  return (
    <div>
      {/* <button className="bg-gray-300 rounded m-24" onClick={createTest}>
        Create a Test
      </button> */}
      <form onSubmit={createTest}>
        <input
          spellCheck="off"
          placeholder="todo-items"
          type="text"
          className="m-3 bg-gray-400 placeholder-black placeholder-opacity-50"
          name="todo"

          // onClick={deleteTest}
        />
        <button className="bg-gray-300 rounded m-24" type="submit">
          Submit
        </button>
      </form>

      {todos.map((todo) => (
        <div className="flex text-green-400" key={todo._id}>
          <input
            type="checkbox"
            className="m-3"
            value={todo._id}
            onClick={deleteTest}
          />
          <h1 className="m-3 text-green-800">Name: {todo.name}</h1>
          <br></br>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  await dbConnect();

  const todos = await Todo.find({});

  return { props: { todos: JSON.parse(JSON.stringify(todos)) } };
}
export default Home;
