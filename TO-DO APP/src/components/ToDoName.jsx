import React, { useState } from "react";

function ToDoName({onNewItem}) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate);
    setTodoName("");
    setDueDate("");
  };
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };

  return (
    <div className="ToDoContainer">
      <div className="container ">
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter the todo here"
              value={todoName}
              onChange={handleNameChange}
            />
          </div>
          <div className="col-4" value={dueDate} onChange={handleDateChange}>
            <input type="date" />
          </div>

          <div className="col-2">
            <button
              type="button"
              className="btn btn-success hg_button"
              onClick={handleAddButtonClicked}
            >
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoName;
