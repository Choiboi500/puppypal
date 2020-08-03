import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './FootNav.css';

class FootNav extends Component {
	render() {
		return (
			<div className='footNav'>
				<div className='footNavContent'>
					<div className='footNavLinks'>
						<Link to='/' style={{ color: '#0097a7' }}>
							Home
						</Link>
						<Link to='/about' style={{ color: '#0097a7' }}>
							About
						</Link>
						<a href='https://www.petfinder.com/' style={{ color: '#0097a7' }}>
							Adopt
						</a>
					</div>
				</div>

				<Route path='/about' />
				<Route path='/' />
			</div>
		);
	}
}

export default FootNav;
