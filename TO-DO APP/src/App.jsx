import AppName from "./components/AppName";
import ToDoName from "./components/ToDoName";
import ToDoItem from "./components/ToDoItem";
import TodoItems from "./components/ToDoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMessage from "./components/WelcomeMessage";

const todoItemsReducer = (currToDoItem, action) => {
  let newTodoItems = [...currToDoItem];
  if (action.type === "NEW_ITEM") {
    const newTodoItems = [
      ...currToDoItem,
      { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
    ];
    return newTodoItems;
  }else if (action.type === "DELETE_ITEM") {
    newTodoItems = currToDoItem.filter(
      (item) => item.name !== action.payload.itemName
    );
    return newTodoItems;
  }
  
};

function App() {
  // const [todoItems , setTodoItems] = useState([]);
  const [todoItems, dispatchToDoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",
      payload: { itemName: itemName, itemDueDate: itemDueDate },
    };
    dispatchToDoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: { itemName: todoItemName },
    };
    dispatchToDoItems(deleteItemAction);
  };

  return (
    <div className="to-do container">
      <AppName></AppName>
      <ToDoName onNewItem={addNewItem}></ToDoName>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItems} onDeleteClick={deleteItem}></TodoItems>
    </div>
  );
}

export default App;
