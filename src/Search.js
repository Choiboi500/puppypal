import React, { Component } from 'react';

class Search extends Component {
	

	

	render() {
		return (
			<form onSubmit={this.props.onSubmit}>
				<input
					className='input'
					type='text'
					name='breed'
					placeholder='Breed'
					style={{ width: '40%' }}
					value={this.props.breed}
					onChange={this.props.onChange}
				/>
				<br />
				<br />

				<input className='btn' type='submit' value='Search'></input>
			</form>
		);
	}
}

export default Search;
