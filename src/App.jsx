import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home"
import Signup from "./components/Signup";
import Login from "./components/Login";


function App() {
  return (
    
    <BrowserRouter>
      <Routes>
      
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
