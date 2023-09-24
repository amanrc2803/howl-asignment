import React from 'react';
import Navbar from './components/inc/Navbar';
import Cards from './components/inc/Cards';
import SocialMediaFooter from './components/inc/SocialMediaFooter';

import Home from './components/pages/Home';

import Services from './components/pages/Services';
import Policy from './components/pages/Policy';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Error from './components/inc/Error'

import { BrowserRouter as Router , Route, Routes } from 'react-router-dom'


function App() {
  return (
    <>
  
    
  <Router>
   <Navbar/>
   
   <Routes>
   <Route path='' element={<Home/>}></Route>

   <Route path='/contact' element={<Contact/>}> </Route>

   <Route path='/about' element={<About/>}></Route>

   <Route path='/services' element={<Services/>}></Route>

   <Route path='/policy' element={<Policy/>}></Route>

   <Route path='/error' element={<Error/>}></Route>


   </Routes>
    
   
    </Router>
    
      <Cards />
      <SocialMediaFooter/>
      
    
    
    </>
  );
}

export default App;
