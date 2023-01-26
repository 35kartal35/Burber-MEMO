import React from 'react';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
