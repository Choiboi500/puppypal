import React, { Component } from 'react';

class Search extends Component {
	state = {
		breed: '',
	};

	onChange = (e) => this.setState({ [e.target.breed]: e.target.value });
	onSubmit = (e) => {
		e.preventDefault();
		this.props.changeImg(this.state.breed);
		this.setState({ breed: '' });
	};

	render() {
		console.log(this.breed);

		return (
			<form onSubmit={this.onSubmit}>
				<input
					className='input'
					type='text'
					name='breed'
					placeholder='Breed'
					style={{ width: '40%' }}
					value={this.state.breed}
					onChange={this.onChange}
				/>
				<br />
				<br />

				<input type='submit' value='Search' className='btn'></input>
			</form>
		);
	}
}

export default Search;
