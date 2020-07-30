import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './FootNav.css'
import About from './About';
import Home from './Home';

class FootNav extends Component {
	render() {
		return (
			<div className='footNav'>
				<div className='footNavContent'>
					<div className='footNavLinks'>
						<Link to='/'>Home</Link>
						<Link to='/about'>About</Link>
						<a href='https://www.petfinder.com/'>Adopt</a>
					</div>
				</div>

				<Route path='/about'/>
				<Route path='/'/>
			</div>
		);
	}
}

export default FootNav;
