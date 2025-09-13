import Appname from "./Components/Appname";
import AppTodo from "./Components/AppTodo";
import TodoItems from "./Components/TodoItems";
import "./App.css";

function App() {
  const todoItems = [
    {
      name: "Go for Running",
      dueDate: "12-09-2025",
    },
    {
      name: "Learn ReactJs",
      dueDate: "12-09-2025",
    },
    {
      name: "Buy Groceries",
      dueDate: "13-09-2025",
    },
    {
      name: "Prepare Presentation",
      dueDate: "14-09-2025",
    },
    {
      name: "Call Mom",
      dueDate: "15-09-2025",
    },
  ];

  return (
    <>
      <center className="todo-container">
        <Appname />
        <AppTodo />
        <TodoItems items={todoItems} />
      </center>
    </>
  );
}

export default App;
