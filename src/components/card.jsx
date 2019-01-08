import React, { Component } from 'react';
import '../css/card.css'; 
import NavBar from '../components/navBar'; 

const Card = () => {
    return (
      <div className="profileCard">
        <div id="wrapper" className="loaded">
        <div id="content">
          <div id="card">
            <div id="front">
              <div id="arrow"><i className="fa fa-arrow-left"></i></div>
              <div id="top-pic"></div>
              <div id="avatar"></div>
              <div id="info-box">
                <div className="info">
                  <div className="myName">Alicia Piedra</div>
                  </div>
                  <div className="statingweb">
                  <div className="webDev">Web Developer</div>
                </div>
              </div>
              <div className="socialMedia">
              <i class="fab fa-github">
                <a href="https://github.com/aliciapiedra"></a></i>
              <i class="fab fa-linkedin">
                <a href="https://www.linkedin.com/in/aliciapiedra/"></a></i>
              <i class="fas fa-envelope-square">
                <a href="mailto:aliciapiedra98@gmail.com"></a></i>
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