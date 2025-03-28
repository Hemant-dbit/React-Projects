function ToDoItem() {
  return (
    <div className="container ">
      <div className="row">
        <div className="col-6">
          <h3>Mechanics</h3>
        </div>
        <div className="col-4">14-01-2025</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger hg_button">
            DELETE
          </button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItem;
