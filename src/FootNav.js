import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';

class FootNav extends Component {
	render() {
		return (
			<div className='footNav'><div className='footNavContent'><div className='footNavLinks'>
					<Link to='/'>Home</Link>
					<Link to='/about'>About</Link>
				</div></div>
				
				<Route path='/about' exact component={About} />
				<Route path='/' exact component={Home} />
			</div>
		);
	}
}

export default FootNav;
