import React, { Component } from 'react';
import About from './About'
import { Route, Link } from 'react-router-dom';
import './App.css';
import Nav from './Nav';
import FootNav from './FootNav'
import Home from './Home'



class App extends Component {
  
  render() {
    return (
      <div>
        <Nav/>
      
      <FootNav/>
      </div>
     
      
			

			
		);
  }
}

export default App;