import React, { Component } from 'react';

class Header extends Component {

    // Render is a Method (a function inside a class) which doesn't require
    // function declaration or =>
    // what is returned from render() is what will be on displayed on the DOM
    render() {
        return (
            <header>
                <h1>React Actors</h1>
            </header>
        )
    }

}

export default Header;