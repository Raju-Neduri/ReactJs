import Appname from "./Components/Appname";
import AppTodo from "./Components/AppTodo";
import TodoItem1 from "./Components/TodoItem1";

function App() {
  return (
    <>
      <center class="todo-container">
        <Appname />
        <AppTodo />
        <TodoItem1 />
        <TodoItem1 />

        <div class="row">
          <div class="col-6">Learn coding</div>
          <div class="col-4">08-09-2025</div>
          <div class="col-2">
            <button type="button" class="btn btn-danger">
              Delete
            </button>
          </div>
        </div>
      </center>
    </>
  );
}

export default App;
