import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./components/card';
import NavBar from './components/navBar';
import About from './components/about'; 

class App extends Component {
  render() {
    return ( 
      <div id="all">
      <div className="renderingNav">
      <NavBar />
      </div>
      <div className="renderingCard">
      <Card />
      </div>
      <div className="aboutCard" >
      <About />
      </div>
      </div> 
    );
  }
}

export default App;
