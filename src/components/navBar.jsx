import React, { Component } from 'react';
import '../css/navBar.css'; 


const navBar = () => {
    return (
		<div id="navBar">
		<div className="container">
			<div className="link">
				<div className="text">About</div>
			</div>
			<div className="link">
				<div className="text">Resume</div>
			</div>
			<div className="link">
				<div className="text">Projects</div>
			</div>
			<div className="link">
				<div className="text">Contact</div>
			</div>
		</div>
	</div> 
	)		
}

class NavBar extends Component {
	render() {
		var links = document.getElementsByClassName("link");
		for (var i = 0; i <= links.length; i++) addClass(i);

		function addClass(id) {
			setTimeout(function() {
				if (id > 0) links[id - 1].classList.remove("hover");
				links[id].classList.add("hover");
			}, id * 750);
		}
		return (
			<div>
				{ navBar() }
	
			</div>
		)
	}
}

export default NavBar