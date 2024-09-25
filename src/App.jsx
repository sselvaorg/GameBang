import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Library from './Pages/Library';
import Home from './Pages/Home';
import Todo from '../src/Pages/Todo';
import NavBar from "./Components/NavBar";

function App(){
  return (
      <>
      <Router>
        <Routes>
          <Route path="lib" element={<Library/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="todo" element={<Todo/>} />
          <Route path="navbar" element={<NavBar/>}/>
        </Routes>
      </Router>
      </>
  )
}
export default App;
