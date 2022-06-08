import './App.css';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import NavHome from './components/NavHome';

function App() {

  const [mode, setMode] = useState('dark'); //whether dark mode is enabled or not

  return (
    <>
    <Homepage/>
    </>
  );
}

export default App;
