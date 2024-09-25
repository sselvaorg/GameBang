import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Library from './Pages/Library';
import Home from './Pages/Home';
import Todo from '../src/Pages/Todo';

function App(){
  return (
      <>
      <Router>
        <Routes>
          <Route path="lib" element={<Library/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="todo" element={<Todo/>} />
        </Routes>
      </Router>
      </>
  )
}
export default App;