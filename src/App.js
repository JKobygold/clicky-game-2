import React, {useState} from 'react';
import Navbar from  "./components/Navbar";
import Jumbotron from './components/Jumbotron';
import Footer from "./components/Footer";
import Photos from "./components/photos"

function App() {
  return (
    <>
  <Navbar/ >
  <Jumbotron/>
  <Photos/>
<Footer/>
   </>
  )
  
}

export default App;
