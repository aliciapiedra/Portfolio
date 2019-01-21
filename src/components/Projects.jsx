import React, { Component } from 'react'; 
import '../css/projects.css';
import GuardianLogo from '../images/widget-logo.png';
import BrewLogo from '../images/rsz_beer_png2330.png';
import Scoreboard from '../images/scoreboard.png';
import ShoppingList from '../images/Shopping_List-512.png';
// import @bootstrap

class Projects extends Component {
    render() {
        return (
          <div className="projectsCard">
          <div class="projects-card spring-fever">
            <div class="title-content">
              <h3>Projects</h3>
          </div>
            <div class="projects-intro">Full Stack Software Developer</div>
              <div className="guardianLogo">
              <a href="https://guardian-app-wyncode.herokuapp.com/"><img src={GuardianLogo} alt="Guardian"></img></a>
                <p>Guardian: React on Rails Application. A digital bodyguard whenever you're feeling unsafe.</p>
              </div>
              <div className="localLogo">
                <a href="https://localbrew.herokuapp.com/"><img className="logoForLocal" src={BrewLogo} alt="Local Brew"></img></a>
                <p>Local Brew: React Application. Find local breweries near you!</p>
              </div>
              <div className="scoreboardLogo">
                <a href="https://github.com/aliciapiedra/React-Scoreboard"><img className="scoreboardImage"src={Scoreboard} alt="Scoreboard"></img></a>
                <p>Scoreboard: React Application.</p>
              </div>
              <div className="shoppingList">
                <a href="https://github.com/aliciapiedra/React-Shopping-List"><img className="shoppingImage" src={ShoppingList} alt="Shopping List"></img></a>
                <p>Shopping List: React Application. Helps you organize your shopping list on your mobile device.</p>
              </div>
          <div class="gradient-overlay"></div>
          <div class="color-overlay"></div>
          </div>
          </div>		
        )
    }
}

export default Projects