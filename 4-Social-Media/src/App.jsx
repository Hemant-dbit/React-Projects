import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Form from "./components/Form";
import { useState } from "react";
import PostList from "./components/PostList";
import PostListProvider from "./store/post-list-store";

function App() {

  const [selectedTab , setSelectedTab] = useState("Home");

  return (
    <PostListProvider>
    <div className = "app-container">
      <div className="side-bar">
        <SideBar selectedTab ={selectedTab}  setSelectedTab = {setSelectedTab}></SideBar>
      </div>
      <div className="main-content">
        <Header></Header>
        { selectedTab === "Home" ?  <PostList></PostList> :<Form></Form>}
        
        <Footer></Footer>
      </div>
    </div>
    </PostListProvider>
  );
}

export default App;
