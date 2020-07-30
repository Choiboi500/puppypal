import React, { Component } from 'react';
import './Home.css';
import Search from './Search';
import Img from './Img';


class Home extends Component {
	
	render() {
		return (
			<div className='home'>
				<Img />
				<Search />
				<div className='quote'>
					<h2>"Happiness is a warm puppy"</h2>
					<h5>- Charles Schultz</h5>
				</div>
			</div>
		);
	}
}

export default Home;
