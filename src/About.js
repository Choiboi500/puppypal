import React, { Component } from 'react';
import './About.css';
import FootNav from './FootNav';

class About extends Component {
	render() {
		return (
			<div className='about'>
				<img
					className='aboutImg'
					src='https://user-images.githubusercontent.com/65630204/88813461-f1c0f900-d186-11ea-8dd1-e1cd2a726d02.jpg'
				/>
				<p>
					PuppyPal is a safe place to find pictures of puppies and dogs of all
					breeds! Our site has helped connect so many people to their new puppy
					pal. And of course, adding smiles to all our visitors!
				</p>
			</div>
		);
	}
}

export default About;
