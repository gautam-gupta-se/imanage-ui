import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddProduct from './components/AddProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<ViewProduct/>} />
        <Route path="/add" element={<AddProduct/>} />
        <Route path="/delete" element={<DeleteProduct/>} />
        <Route path="/update" element={<UpdateProduct/>} />
      </Routes>
    </Router>
  );
}

export default App;
