import AppName from "./components/AppName";
import ToDoName from "./components/ToDoName";
import ToDoItem from "./components/ToDoItem";
import "./App.css";

function App() {
  return (
    <div className="to-do container">
      <AppName></AppName>
      <ToDoName></ToDoName>
      <ToDoItem></ToDoItem>
    </div>
  );
}

export default App;
