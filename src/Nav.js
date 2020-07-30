import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './Nav.css'
import About from './About';
import Home from './Home';

class Nav extends Component {
	render() {
		return (
			<div className='nav'>
				<div className='navContent'>
					<h1>PuppyPal</h1>
					<div className='navLinks'>
						<Link to='/'>Home</Link> {' '}
						<Link to='/about'>About</Link>
					</div>
				</div>


				<Route path='/about' exact component={About} />
				<Route path='/' exact component={Home} />
			</div>
		);
	}
}

export default Nav;
