import Appname from "./Components/Appname";
import AppTodo from "./Components/AppTodo";
import TodoItem from "./Components/TodoItem";
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
  ];
  return (
    <div>
      <center className="todo-container">
        <Appname />
        <AppTodo />
        <div className="items-container">
          <TodoItem todoName={todoItems.name} todoDate="24-11-2025" />
        </div>
      </center>
    </div>
  );
}

export default App;
