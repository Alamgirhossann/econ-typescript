import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Routes , Route} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import Home from './pages/Home';
import Store from './pages/Store';
import About from './pages/About';
import Navbar from './components/Navbar';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
    <Container >
      <Navbar/>
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path='/' element={<Store/>}/>
        {/* <Route path='/about' element={<About/>}/> */}
      </Routes>
    </Container>
    </ShoppingCartProvider>
  );
}

export default App;
