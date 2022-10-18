import React from 'react';

import './App.css';
import Navbaar from './components/Navbaar';
import Register from './components/Register';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Details from './components/Details';
import Edit from './components/Edit';
function App() {
  return (
    <div>
      <Navbaar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="/view/:id" element={<Details />} />
      </Routes>
      <h1 className="text-center text-danger">Hello World</h1>
      {/* <Home />
      <Register /> */}
    </div>
  );
}

export default App;
