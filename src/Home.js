import React, { Component } from 'react';
import './Home.css';
import Search from './Search';
import Img from './Img';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			breed: '',
			breedName: '',
			currentImg: null,
			homeDog: true,
		};
	}

	handleSearch = () => {
		let url = `https://dog.ceo/api/breed/${this.state.breed.toLowerCase()}/images/random`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({ currentImg: res.message });
			});
	};

	onChange = (e) => this.setState({ breed: e.target.value });

	clearForm = () => {
		this.setState({ breed: '' });
	};

	breedName = () => {
		this.setState({ breedName: this.state.breed });
	};

	onNext = () => {
		let url = `https://dog.ceo/api/breed/${this.state.breedName}/images/random`;
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				console.log(res);
				this.setState({ currentImg: res.message });
			});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.setState({ breed: this.state.value, homeDog: false });
		this.handleSearch();
		this.clearForm();
		this.breedName();
	};

	render() {
		return (
			<div className='home'>
				{this.state.homeDog && (
					<img
						className='homeImg'
						src='https://user-images.githubusercontent.com/65630204/88955962-abdd6100-d26a-11ea-870f-017806c4fc08.jpg'
					/>
				)}
				{!this.state.currentImg ===
					'Breed not found (master breed does not exist)' && (
					<Img className='currentImg' currentImg={this.state.currentImg} />
				)}

				{!this.state.homeDog && (
					<input
						className='next'
						type='submit'
						value='Next'
						onClick={this.onNext}
					/>
				)}

				{!this.state.homeDog && <h2>"{this.state.breedName.toLowerCase()}"</h2>}

				{this.state.currentImg ===
					'Breed not found (master breed does not exist)' && (
					<h2>
						Sorry, your search for "{this.state.breedName}" found "0" results.
						Please try again.
					</h2>
				)}

				<Search
					onChange={this.onChange}
					onSubmit={this.onSubmit}
					breed={this.state.breed}
				/>

				{this.state.homeDog && (
					<div className='quote'>
						<h2>"Happiness is a warm puppy"</h2>
						<h5>- Charles Schultz</h5>
					</div>
				)}
			</div>
		);
	}
}

export default Home;
