import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import About from "./components/About"
import Cv from "./components/Cv"
import Contato from "./components/Contato"

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<About/>}/>
        <Route path='/curriculo' element={<Cv/>}/>
        <Route path='/contato' element={<Contato/>}/>
      </Routes>
    </Router>
  );
}

export default App;
