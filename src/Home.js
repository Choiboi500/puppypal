import React, { Component } from 'react';
import './Home.css';
import Search from './Search';
import Img from './Img';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breed: '',
			currentImg: null,
		};
	}
	handleSearch = () => {
		let url = `https://dog.ceo/api/breed/${this.state.breed}/images/random`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);

				this.setState({ currentImg: res.message });
			});
		
	};
	
	onChange = (e) => this.setState({ breed: e.target.value });
	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ breed: this.state.value });
		this.handleSearch();
	};

	render() {
		return (
			<div className='home'>
				<img className='homeImg' src='https://user-images.githubusercontent.com/65630204/88955962-abdd6100-d26a-11ea-870f-017806c4fc08.jpg' />
				<Img currentImg={this.state.currentImg} />
				<Search onChange={this.onChange} onSubmit={this.onSubmit} />
				<div className='quote'>
					<h2>"Happiness is a warm puppy"</h2>
					<h5>- Charles Schultz</h5>
				</div>
			</div>
		);
	}
}

export default Home;
