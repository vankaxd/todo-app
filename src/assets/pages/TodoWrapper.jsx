import { useState } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";

export default function TodoWrapper() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([
      ...todos,
      { id: Date.now(), text: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  );
}
