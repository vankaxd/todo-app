import { FaEdit, FaTrash } from "react-icons/fa";

export default function Todo() {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="flex flex-row items-center justify-between border-2 w-72 text-center p-4">
        <p>Make the Todo App</p>
        <div className="flex flex-row justify-center gap-3">
          <FaEdit />
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
