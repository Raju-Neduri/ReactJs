import Appname from "./Components/Appname";
import AppTodo from "./Components/AppTodo";
import TodoItem1 from "./Components/TodoItem1";
import "./App.css";

function App() {
  return (
    <div>
      <center className="todo-container">
        <Appname />
        <AppTodo />
        <div className="items-container">
          <TodoItem1 />
          <TodoItem1 />
          <TodoItem1 />
        </div>
      </center>
    </div>
  );
}

export default App;
