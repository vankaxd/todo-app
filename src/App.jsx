import TodoWrapper from "./assets/pages/TodoWrapper";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-400 to-purple-500 flex justify-center items-center">
      <div className="border-4 rounded-lg w-6/12 mt-20 p-6 bg-white shadow-xl">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Plan Your Day!
        </h1>
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
