import logo from './logo.svg';
import './App.css';
import axios  from 'axios';
import { useState } from 'react';
import Home from './component/Pages/Home';
import About from './component/Pages/About';
import Contact from './component/Pages/Contact';
import Navbar from './component/inc/Navbar';
import {BrowserRouter as Router ,Route,Routes} from 'react-router-dom'
import Footer from './component/inc/Footer';
function App() {
  return(
      <>
      <Navbar/>
    <Routes>
      <Route exact Component={Home} path='/' />
      <Route exact Component={About} path='/about' />
      <Route exact Component={Contact} path='/contact' />
           </Routes>

     
      <Footer/>
   
    </>
  

  )
      
      


   
  };
export default App;
