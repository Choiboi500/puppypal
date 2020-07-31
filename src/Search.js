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
				

				<input 
					className='submit' 
					type='submit' 
					value='Search'/>
			</form>
		);
	}
}

export default Search;
