const Modal = ({ children }) => {
  return (
    <div className="card mt-5" style={{width: "100%", maxWidth: "600px", margin: "auto" }}>
      <div className="card-body">
        {children}
      </div>
    </div>
  );
};

export default Modal;
