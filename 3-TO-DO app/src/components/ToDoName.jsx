import React, { useRef } from "react";
import { MdOutlineAddComment } from "react-icons/md";

function ToDoName({ onNewItem }) {
  const todoNameElement = useRef(null);
  const dueDateElement = useRef(null);

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    if (todoName === "") {
      alert("Please enter a todo name.");
      return;
    }
    if (dueDate === "") {
      alert("Please enter a due date.");
      return;
    }
    if (new Date(dueDate) < new Date()) {
      alert("Due date cannot be in the past.");
      return;
    }
    todoNameElement.current.value = "";
    dueDateElement.current.value = "";
    onNewItem(todoName, dueDate);
    
  };
  

  return (
    <div className="ToDoContainer">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              ref = {todoNameElement}
              placeholder="Enter the todo here"
              
            />
          </div>
          <div className="col-4">
            <input type="date" ref={dueDateElement}   />
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-success hg_button"
              onClick={handleAddButtonClicked}
            >
              <MdOutlineAddComment />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoName;
