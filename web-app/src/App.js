import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';

class App extends Component {

	state = {
		theme : {
			background : 'white',
			main : 'blue'
		}
	}

	change_background_theme = (color) => {
		this.setState({theme : {
			background : color,
			main : this.state.theme.main
		}})
	}

	change_main_theme = (color) => {
		this.setState({theme : {
			background : this.state.theme.background,
			main : color
		}})
	}

	render() {

		const rootStyle = {
			backgroundColor : this.state.theme.background,
			height : '100vh',
			width : '100vw'
		}

		return (
			<div style = {rootStyle} >
				<Router>
					<Switch>
						<Route path = "/" exact>
							<Header 
								theme = {this.state.theme} 
								change_background_theme = {this.change_background_theme}
								change_main_theme = {this.change_main_theme} 
							/>
							<Home theme = {this.state.theme} />
						</Route>
						<Route>
							<Header 
								theme = {this.state.theme} 
								change_background_theme = {this.change_background_theme}
								change_main_theme = {this.change_main_theme} 
							/>
						</Route>
					</Switch>
				</Router>
			</div>
		);
	}
}

export default App;
