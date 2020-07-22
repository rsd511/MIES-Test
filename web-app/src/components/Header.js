import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css'

class Header extends Component {
	render() {

		const themeStyle = {
			backgroundColor : this.props.theme.background,
			color : this.props.theme.main
		}

		const navStyle = {
			backgroundColor : this.props.theme.background
		}

		return (
			<div className = "Nav" style = {navStyle} >
				<ul>
					<li id = "home" >
						<Link to = "/" >
							<i className = "fa fa-home fa-2x" aria-hidden = {true} style = {themeStyle} ></i>
						</Link>
					</li>
					<li id = "theme" >
						<button onClick = {this.props.change_background_theme.bind(this,'white')} ></button>
						<button onClick = {this.props.change_background_theme.bind(this,'black')} ></button>
						<button onClick = {this.props.change_main_theme.bind(this,'red')} ></button>
						<button onClick = {this.props.change_main_theme.bind(this,'orange')} ></button>
						<button onClick = {this.props.change_main_theme.bind(this,'green')} ></button>
						<button onClick = {this.props.change_main_theme.bind(this,'blue')} ></button>
						<button onClick = {this.props.change_main_theme.bind(this,'purple')} ></button>
					</li>
					<li id = "github" >
						<a href = "https://github.com/rsd511/MIES-Test" rel="noopener noreferrer" target = "_blank" >
							<i className = "fa fa-github fa-2x" aria-hidden = {true} style = {themeStyle} ></i>
						</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;