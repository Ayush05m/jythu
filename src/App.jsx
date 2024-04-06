import { useState } from 'react'
import Nav from './components/Navbar/nav';
import Front from './components/Front/Front';
import About from './components/About/About';
import Services from './components/Services/Services';
import './App.css';

function App() {

  return (
    <>
      <Nav />
      <Front />
      <div className="otherPages">
        <About />
        <Services />
      </div>
    </>
  )
}

export default App
