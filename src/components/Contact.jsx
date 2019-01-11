import React, { Component } from 'react';
import '../css/contact.css'; 

class Contact extends Component {
    render() {
        return (
            <div className="contact-card">
            <div className="getInTouch">
                <h3>Get In Touch</h3>
            </div>
            <div className="mapbox"></div>
            <div className="informationAboutMe">
            <ul>
            <div className="row">
            <div className="col">
                <li> <strong>Address:</strong> Miami,FL USA</li>
                <li> <strong>Email:</strong> aliciapiedra98@gmail.com</li>
                <li> <strong>Phone:</strong> +786 831 7575</li>
                <li> <strong>Freelance:</strong> Available</li>
            </div>
            </div>
            </ul>
            </div>
            <div className="contactForm">
                <h3>Contact Me</h3>
            <div>
                <form action="/action_page.php">
                <div className="contactMeForm">
                <div className="contactNames">
                        <label>First Name</label>
                        <input type="text" id="fname" name="firstname" placeholder="Your name.." />
                        <label>Last Name</label>
                        <input type="text" id="lname" name="lastname" placeholder="Your last name.." />
                </div>
                <div className="email">
                    <label>Email</label>
                    <input type="email" id="email" name="email" placeholder="Your email" />
                </div>
                <div className="subject">
                  <label>Subject</label>
                  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </div>
                <div className="submitContact">
                  <input type="submit" value="Submit" />
                </div>
                </div>
                  </form>
                  </div>
                  </div>
                  </div>
        )
    }
}


export default Contact