import "./App.css";
import UserGreeting from "./userGreeting";

function App() {
  return (
    <>
      <UserGreeting isLogged={true} username="Raju" />
    </>
  );
}

export default App;
