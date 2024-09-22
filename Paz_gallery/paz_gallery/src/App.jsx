import React from 'react';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Gallery from './components/photos/Gallery';
// import Navbar from './components//photos/Navbar';

const App = () => {
  return (
    <Router>
    <div className='min-h-screen
    bg-gradient-to-br from-dark-green
    to-dark-green/70 grid
    place-items-center'>
     {/* <Navbar /> */}
      <Gallery />
    </div></Router>
  )
}

export default App