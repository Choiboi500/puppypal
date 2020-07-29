import React, { Component } from 'react';
import './Home.css';
import FootNav from './FootNav';
class Home extends Component {
	render() {
		return (
			<div className='home'>
				<img
					className='homeImg'
					src='https://user-images.githubusercontent.com/65630204/88725111-95fc5e80-d0f9-11ea-80ff-48392f7a7350.jpg'></img>
				<input type='search' />
				<br />
				<input type='submit' />
				<div className='quote'>
					<h2>"Happiness is a warm puppy"</h2>
					<h5>- Charles Schultz</h5>
				</div>
				
			</div>
		);
	}
}

export default Home;
