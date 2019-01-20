import React from 'react';
import '../css/cards.css'; 

class About extends React.Component {
	render() {
		return(
			<div className="aboutCard">
			<div className="about-card spring-fever">
  			<div className="title-content">
    			<h3>About Me</h3>
    		<div className="intro">Full Stack Software Developer</div>
  			</div>
			<div className="gradient-overlay"></div>
			<div className="color-overlay"></div>
			<div className="text-box">
				<p><strong>Hello! I’m Alicia Piedra.</strong>	
					<br /> Software Engineer from Miami Beach, Fl, USA.</p>
			</div>
			<hr />
			<div className="flexing">
				<div className="info-list">
				<ul>
					<li><strong>Age:</strong> 20</li> 
					<li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Ruby on Rails</li> 
					<li><strong>Freelance:</strong> Available</li>
					<li><strong>Residence:</strong> Florida, USA</li>
				</ul>
				</div>
				<div className="content services">	
					<div className="title">	
						<span className="first-word">My Services</span></div>
							<div className="row service-items border-line-v">
								<div className="col col-d-6 col-t-6 col-m-12 border-line-h">
									<div className="service-item">
										<div className="icon">
										<i className="fas fa-desktop"></i>
										</div>
							<div class="webName">Web Development</div>
								<p> Modern and mobile-ready websites that will help you reach all of your marketing.</p></div>
						</div>
					</div> 
				</div>
			</div>
			</div>
		</div>		
		)
	}
}

export default About 