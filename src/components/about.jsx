import React from 'react';
import '../css/cards.css'; 

class About extends React.Component {
	render() {
		return(
			<div className="aboutCard">
				<h2>About Me</h2>
				<div className="line" style={{backgroundColor: this.props.bgc}}></div>
				<p>{this.props.content}</p>
			</div>
		)
	}
}

class Text extends React.Component {
	render() {
		return(
			<a href={this.props.href}>{this.props.text}</a>
		)
	}
}

class Colors extends React.Component {
	constructor() {
		super()
		this.state = {
			yellow: '#fcd000',
			blue: '#0ebeff',
			green: '#47cf73',
			purple: '#ae63e4'
		}
	}
	render() {
		return(
			<div className="aboutContainer">
				<Text title="Title One" bgc={this.state.yellow} content="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus officiis neque, eveniet ab, autem dolore saepe voluptate praesentium sapiente debitis, facere assumenda optio hic! Recusandae, libero. Laudantium ipsum cumque dolores!"/>
			</div>
		)
	}
}

// ReactDOM.render(
// 	<App/>,
// 	document.getElementById('app')
// )

export default About 