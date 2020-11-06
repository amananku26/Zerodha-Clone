import React from 'react';
import './App.css';
import Routing from './ReactRouter/Routing'
import NavBar from './Components/NavBar'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routing/>
      <Footer />
    </div>
  );
}

export default App;


// https://reactrouter.com/web/api/NavLink
