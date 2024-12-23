import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todo);
    setTodo("");
  };
  return (
    <div className="mt-6">
      <form
        className="flex flex-row justify-center gap-5"
        onSubmit={handleSubmit}
      >
        <input
          className="border-2 border-zinc-600 w-72 h-12 p-2"
          placeholder="Add Todo"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        ></input>
        <button className="border-2 w-16" type="submit">
          Add
        </button>
      </form>
    </div>
  );
}
