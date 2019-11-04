import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Head from "./components/Head/Head";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
  return (
      <div className="App">
        <Header/>
        <Head/>
        <Services/>
        <Skills/>
        <Contact/>
        <Footer/>
      </div>
  );
}

export default App;
