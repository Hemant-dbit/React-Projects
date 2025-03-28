function ToDoName() {
  return (
    <div className="ToDoContainer">
      <div class="container ">
        <div class="row">
          <div class="col-6">
            <input type="text" placeholder="Enter the task here" />
          </div>
          <div class="col-4">
            <input type="date" />
          </div>

          <div class="col-2">
            <button type="button" class="btn btn-success hg_button">
              ADD
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDoName;
