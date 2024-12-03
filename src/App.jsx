import TodoWrapper from "./assets/pages/TodoWrapper";

function App() {
  return (
    <div className="flex justify-center ">
      <div className="border-4 w-6/12 mt-20 p-6">
        <h1 className="text-3xl font-bold text-center">Plan Your Day!</h1>
        <TodoWrapper />
      </div>
    </div>
  );
}

export default App;
