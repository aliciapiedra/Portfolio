import React, { Component } from 'react';
import '../css/card.css'; 
import NavBar from './NavBar'; 

const Card = () => {
    return (
      <div className="profileCard">
        <div id="wrapper" className="loaded">
        <div id="content">
          <div id="card">
            <div id="front">
              <div id="top-pic"></div>
              <div id="avatar"></div>
              <div id="info-box">
                <div className="info">
                  <div className="myName">Alicia Piedra</div>
                  </div>
                  <div className="statingweb">
                  <div className="webDev">Web Developer</div>
                  <div className="span">
                  <span className="typed-cursor">|</span>
                  </div>
                </div>
              </div>
              <div className="socialMedia">
              <a href="https://github.com/aliciapiedra"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/aliciapiedra/"><i class="fab fa-linkedin"></i></a>
              <a href="mailto:aliciapiedra98@gmail.com"><i class="fas fa-envelope-square"></i></a>
                <div className="span" >
                <span className="typed-cursor">|</span>
                </div>
              </div>
            </div>
            </div>
          </div>
          <div id="background">
            <div id="background-image"></div>
          </div>
        </div>
      </div>
    )
}

  export default Card