import { FaEdit, FaTrash } from "react-icons/fa";

export default function Todo({ text }) {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="flex flex-row items-center justify-between border-2 text-center w-96 h-12">
        <p>{text.text}</p>
        <div className="flex flex-row justify-center gap-3">
          <FaEdit />
          <FaTrash />
        </div>
      </div>
    </div>
  );
}
