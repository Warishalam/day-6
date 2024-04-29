// App.js
import React from "react";
import { Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import Todo from "./components/Todo";
const App = () => {
  return (
      <div>
      <Navbar/>
         <Routes>
             <Route path='/' element={<Home/>}></Route>
             <Route path='/about' element={<About/>}></Route>
             <Route path='/dashboard' element={<Dashboard/>}></Route>
             <Route path="/todo" element={<Todo/>}></Route>
         </Routes>
      </div>
  );
};

export default App;
