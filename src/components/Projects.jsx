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
                <p>Guardian: React on Rails Application. A digital bodyguard whenever you're feeling unsafe. I built the back-end of this project. The tables, the login and sign up form via BCRYPT. I used the Twilio API to use the calling feature to call 911 in four seconds, giving you the opportunity to only cancel the call with the PIN that you created via the sign up form. I also used a Mapbox API to get the geo-location of the user at all times for her safety, also to update the users's favorite contact's that will send the user's location when they're feeling unsafe.</p>
              </div>
              <div className="localLogo">
                <a href="https://localbrew.herokuapp.com/"><img className="logoForLocal" src={BrewLogo} alt="Local Brew"></img></a>
                <p>Local Brew: React Application. Find local breweries near you! I structured this application, built the carousel, got to render the information of the local breweries to render on the card when clicked with toggling the visibility.</p>
              </div>
              <div className="scoreboardLogo">
                <a href="https://github.com/aliciapiedra/React-Scoreboard"><img className="scoreboardImage"src={Scoreboard} alt="Scoreboard"></img></a>
                <p>Scoreboard: React Application.</p>
              </div>
              <div className="shoppingList">
                <a href="https://github.com/aliciapiedra/React-Shopping-List"><img className="shoppingImage" src={ShoppingList} alt="Shopping List"></img></a>
                <p>Shopping List: React Application. Helps you organize your shopping list on your mobile device. I validated each item to make sure you can't duplicate a product that's in the shopping list/in-cart, you are able to move an item back and forth from shopping list to in cart/in cart to shopping list. Also built a form to add more items.</p>
              </div>
          <div class="gradient-overlay"></div>
          <div class="color-overlay"></div>
          </div>
          </div>		
        )
    }
}

export default Projects