import React from 'react';
// import logo from './logo.svg';
import './App.scss';

import Navbar from './components/Navbar/Navbar';

import TourList from './components/Tourlist'

function App() {
  return (
    <div>
    <Navbar /> 
    {/* <h3> Hello from City Tours, welcome to exciting journey!</h3> */}
    <TourList /> 
    </div>
  );
}

export default App;
