import React, { Component } from 'react';
import '../css/contact.css'; 

class Contact extends Component {
    render() {
        return (
            <div className="contact-card">
            <div className="contactForm">
                <p>Contact Me</p>
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