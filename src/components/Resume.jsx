import React, { Component }from 'react';
import '../css/cards.css'; 

class Resume extends Component {
    render() {
        return (
            <div className="slideInLeft">
            <div className="aboutCard">
			<div class="blog-card spring-fever">
  			<div class="title-content">
    			<h3>Resume</h3>
    		<div class="intro">Full Stack Software Developer</div>
  			</div>
  			<div class="card-info">
    			Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim... 
				<a href="#">Read Article<span class="licon icon-arr icon-black"></span></a>
			</div>
			<div class="gradient-overlay"></div>
			<div class="color-overlay"></div>
            </div>
			</div>
			</div>			
        )
    }
}

export default Resume