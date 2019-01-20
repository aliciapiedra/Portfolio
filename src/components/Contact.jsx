import React, { Component } from 'react';
import '../css/contact.css'; 

class Contact extends Component {
    render() {
        return (
            <div className="contact-card">
            <div className="color-overlay"></div>
            <div className="title-content">
                <h3>Get In Touch</h3>
            </div>
            <div className="mapbox"></div>
            <div className="informationAboutMe">
            <ul>
            <div className="infoCard">
                <li> <strong>Address:</strong> Miami,FL USA</li>
                <hr />
                <li> <strong>Email:</strong> aliciapiedra98@gmail.com</li>
                <hr />
                <li> <strong>Phone:</strong> +786 532 3764</li>
                <hr />
                <li> <strong>Freelance:</strong> Available</li>
                <hr />
            </div>
            </ul>
            </div>
            <div className="contactForm">
                <h3>Contact Me</h3>
            <div>
                <form>
                <div className="contactMeForm">
                <div className="flex">
                <div className="contactNames">
                    <div className="namesName">
                        <label>Full Name</label>
                    </div>
                    <div className="inputForName">
                        <input type="text" id="fname" name="fullname" placeholder="Your name.." />
                    </div>
                </div>
                <div className="email">
                <div className="emailName">
                    <label>Email</label>
                    </div>
                    <div className="inputForEmail">
                    <input type="email" id="email" name="email" placeholder="Your email.." />
                    </div>
                </div>
                </div>
                </div>
                <div className="subject">
                <div className="subjectName">
                  <label>Subject</label>
                  </div>
                  <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
                </div>
                <div className="submitContact">
                <div className="title-content2">
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