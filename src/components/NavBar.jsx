import React, { Component } from 'react';
import { Link } from "react-router-dom";
import '../css/navBar.css'; 


class NavBar extends Component {
	render() {
		// var links = document.getElementsByClassName("link");
		// for (var i = 0; i <= links.length; i++) addClass(i);

		// function addClass(id) {
		// 	setTimeout(function() {
		// 		if (id > 0) links[id - 1].classList.remove("hover");
		// 		links[id].classList.add("hover");
		// 	}, id * 750);
		// }
		return (
			<div id="navBar">
				<div className="container">
					<div className="link">
						<div className="text"><Link to="/about">About</Link></div>
					</div>
					<div className="link">
						<div className="text"><Link to="/resume">Resume</Link></div>
					</div>
					<div className="link">
						<div className="text"><Link to="/projects">Projects</Link></div>
					</div>
					<div className="link">
						<div className="text"><Link to="/contacts">Contact</Link></div>
					</div>
				</div>
			</div> 
		)
	}
}


export default NavBar