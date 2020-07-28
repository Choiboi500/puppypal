import React, { Component } from 'react';

class Nav extends Component {
    render() {
        return (
            <div className='nav_container'>
                <h1>PuppyPal</h1>
                <div className='links'>
                    Home
                    About
                </div>
            </div>
        );
    }
}

export default Nav;