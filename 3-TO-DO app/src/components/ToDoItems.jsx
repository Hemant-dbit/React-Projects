import TodoItem from "./ToDoItem";
// import styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems ,onDeleteClick }) => {

  return (
    <div className="container">
      {todoItems.map((item) => (
        <TodoItem
          todoDate={item.dueDate}
          todoName={item.name}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
