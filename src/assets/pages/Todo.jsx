import { FaEdit, FaTrash, FaCheck } from "react-icons/fa";
import { useState } from "react";

export default function Todo({ todo, deleteTodo, updateTodo, completeTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleUpdate = () => {
    updateTodo(todo.id, newText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-center mt-4">
      <div
        className={`flex flex-row items-center justify-between border-2 w-96 h-12 p-4 rounded-lg shadow-lg ${
          todo.completed ? "bg-green-100" : "bg-white"
        }`}
      >
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            className="border rounded p-2 flex-1"
          />
        ) : (
          <p
            className={`flex-1 h-full flex items-center ${
              todo.completed ? "line-through text-gray-400" : "text-gray-800"
            }`}
          >
            {todo.todo}
          </p>
        )}
        <div className="flex flex-row justify-center gap-3 items-center">
          {isEditing ? (
            <button
              onClick={handleUpdate}
              className="text-green-500 font-semibold hover:text-green-700"
            >
              Save
            </button>
          ) : (
            <>
              <FaCheck
                onClick={() => completeTodo(todo.id)}
                className={`cursor-pointer ${
                  todo.completed ? "text-green-500" : "text-gray-500"
                }`}
              />
              <FaEdit
                onClick={handleEdit}
                className="cursor-pointer text-blue-500 hover:text-blue-700"
              />
            </>
          )}
          <FaTrash
            onClick={() => deleteTodo(todo.id)}
            className="cursor-pointer text-red-500 hover:text-red-700"
          />
        </div>
      </div>
    </div>
  );
}
