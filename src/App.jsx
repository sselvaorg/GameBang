import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Library from './Pages/Library';

function App(){
  return (
      <>
      <Router>
        <Routes>
          <Route path="lib" element={<Library/>} />
        </Routes>
      </Router>
      </>
  )
}
export default App;