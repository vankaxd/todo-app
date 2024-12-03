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

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => {
        return <Todo text={todo} key={index} deleteTodo={deleteTodo} />;
      })}
    </div>
  );
}
