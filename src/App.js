import React from 'react';
import './App.css';

//Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Home />
    </div>
  )
}

export default App;
