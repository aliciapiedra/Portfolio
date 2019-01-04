import React from 'react';
import '../css/card.css';

const Card = () => {
    return (
        <div id="wrapper" className="loaded">
        <div id="content">
          <div id="card">
            <div id="front">
              <div id="arrow"><i class="fa fa-arrow-left"></i></div>
              <div id="top-pic"></div>
              <div id="avatar"></div>
              <div id="info-box">
                <div class="info">
                  <div class="myName">Alicia Piedra</div>
                  </div>
                  <div className="statingweb">
                  <div className="webDev">Web Developer</div>
                </div>
              </div>
              <div className="socialMedia">
                <a href="https://github.com/aliciapiedra">Github</a>
                <a href="https://www.linkedin.com/in/aliciapiedra/">Linked In</a>
                <a href="mailto:aliciapiedra98@gmail.com">Email Me!</a>
              </div>
            </div>
            </div>
          </div>
          <div id="background">
            <div id="background-image"></div>
          </div>
        </div>
    )
}

  export default Card