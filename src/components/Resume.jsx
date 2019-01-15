import React, { Component }from 'react';
import '../css/resume.css'; 

class Resume extends Component {
    render() {
        return (
            <div className="resumeCard">
			<div className="resume-card spring-fever">
  			<div className="title-content">
    			<h3>Resume</h3>
    		<div class="resume-intro">Full Stack Software Developer</div>
			</div>
			<div class="gradient-overlay"></div>
			<div class="color-overlay"></div>
				<div className="bio">
					<p>Creative and dynamic professional wih a full stack development certifcation, a stellar customer service record, and a superb work ethic. Strong knowledge of a variety of computer applications and programming languages such as React, JavaScript, Ruby on Rail, HTML, CSS, and Github, as well as the principles and techniques of website and front end development.Offering solid coding and designing skills obtained through recent education and self-practice.</p>
				</div>
				<div className="resumeWrapper">
				<div className="Education">
				<div className="title-conent">
				<h3>Education</h3>
				</div>
					<ul>
						<div className="detailsOfEducation">
						<li>Certificate of Completion(Full Stack Developer) -Wyncode Academy | Jan 2019</li>
						<li>High School Diploma -Miami Beach Senior High School | 2017 | GPA: 3.0/4.0</li>
						</div>
					</ul>
				</div>
				<div className="Experience">
				<div className="title-conent">
				<h3>Experience</h3>
				</div>
					<ul>
						<li>
						<div className="titleOfExperience">
						<li>Eden Roc/Nobu Hotel</li>
						</div>
						<div className="detailsOfExperience">
							<li>Managed all aspects of the pool deck and the beach chairs while handling all cash, card,and room-charge transactions.</li>
							<li>Delivered detailed directions to guests to ease and increase the efficieny of navigation throughout the resort.</li>
							<li>Employed effective teamwork skills to accomplish company goals set forth by policy to ensure excellent guest satisfaction.</li>
						</div>
						<div  className="titleOfExperience">
						<li>Boucher Brothers</li>
						</div>
						<div className="detailsOfExperience2">
							<li>Maintained 100% accuracy while operating a cash register for cash, check, and credit card transactions.</li>
							<li>Ensured positive client experience by delivering superior customer service.</li>
							<li>Delivered exceptional support to coworkers while administering all cash and credit transactions.</li>
						</div>
						</li>
					</ul>
				</div>
				</div>
            </div>
			</div>		
        )
    }
}

export default Resume