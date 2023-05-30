import './App.css';
import Landing from "./Landing-page/index"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

function App() {

 return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route path='/product-detail/:id' />  
    </Routes>
  </BrowserRouter>
</div>
 )
}

export default App;
