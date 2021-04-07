import React,{useState} from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Stories from "./components/Stories";
import Create from "./components/Create";
import Posts from "./components/Posts";
import Sidebar from "./components/Sidebar";
import Context from "./Global/Context";
function App() {
  const [loading,setLoading]=useState(true);
  setTimeout(()=>setLoading(false),2500);
  return (
    <>
      {loading ? (
      <div className="loadingScreen">
        <img
          src="https://www.freepnglogos.com/uploads/instagram-logo-png-transparent-0.png"
          alt="Instagram Logo"
        />
      </div>
    ) : (
      <Context>
         <Navbar />
         <div className="container">
           <Stories />
           <Create />
           <Posts />
           <Sidebar />
         </div>
         <Model />
       </Context>
    )}


    </>
  );
}

export default App;
