import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import Content from "./components/DisplayCounter.jsx";
import Modal from "./components/Modal.jsx";
import Button from "./components/Button.jsx";
function App() {
  return (
    <div>
      <Modal>
      <div className="px-4 py-5 my-5 text-center">
        <Header></Header>
        <Content></Content>
        <Button></Button>
        
      </div>
      </Modal>
    </div>
   
  );
}

export default App;
