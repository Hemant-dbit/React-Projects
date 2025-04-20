import { useDispatch } from "react-redux";
import { useRef } from "react";

const Button = () => {
  const dispatch = useDispatch();

  const addInputRef = useRef();
  const removeInputRef = useRef();

  const handleIncrement = () => {
    dispatch({ type: "INCREMENT" });
  };

  const handleDecrement = () => {
    dispatch({ type: "DECREMENT" });
  };

  const handleAdd = () => {
    dispatch({
      type: "ADD",
      payload: Number(addInputRef.current.value),
    });
    addInputRef.current.value = ""; // optional: clear input
  };

  const handleRemove = () => {
    dispatch({
      type: "REMOVE",
      payload: Number(removeInputRef.current.value),
    });
    removeInputRef.current.value = ""; // optional: clear input
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleIncrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={handleDecrement}
        >
          -1
        </button>
      </div>

      <div className="d-flex justify-content-sm-center gap-3 mt-3 mb-3">
        <input
          type="text"
          placeholder="Enter number"
          className="form-control"
          ref={addInputRef}
          style={{ width: "150px" }}
        />
        <button
          type="button"
          className="btn btn-primary"
          style={{ height: "38px", width: "100px" }}
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="d-flex justify-content-sm-center gap-3 mt-3">
        <input
          type="text"
          placeholder="Enter number"
          className="form-control"
          ref={removeInputRef}
          style={{ width: "150px" }}
        />
        <button
          type="button"
          className="btn btn-success"
          style={{ height: "38px", width: "100px" }}
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default Button;
