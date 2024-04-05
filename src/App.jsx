import React, { useEffect } from "react";
import "./App.css";
import Navbar from "./comnponents/Navbar";
import Home from "./comnponents/Home";
import Experience from "./comnponents/Experience";
import Skills from "./comnponents/Skills";
import Project from "./comnponents/Project";
import Contact from "./comnponents/Contact";
import Aos from "aos"
import "aos/dist/aos.css"
import data from './comnponents/data/background.json'




function App() {
  useEffect(() => {
    Aos.init();
  
    
  }, [])
  
  return (
    <div className="">
    <img src={`/src/assets/${data.imageSrc}`} alt="" />
      <Navbar />
      <div className="container">
        <Home />
        <Experience/>
        <Skills/>
        <Project/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
