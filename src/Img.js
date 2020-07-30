import React, { Component } from 'react';
import Search from './Search';

class Img extends Component {
	render() {
		return (
			<div>
				<img src={this.props.currentImg} />
			</div>
		);
	}
}

export default Img;
