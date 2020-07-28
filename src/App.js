import React, { Component } from 'react';
import About from './About'
import { Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
			<div className='navbar'>
				<nav>
					<Link to='/about'>About</Link>
					<Route path='/about' exact component={About} />
				</nav>
			</div>
		);
  }
}

export default App;