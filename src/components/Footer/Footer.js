import React, { Component } from 'react';

class Footer extends Component {

    // Render is a Method (a function inside a class) which doesn't require
    // function declaration or =>
    // what is returned from render() is what will be on displayed on the DOM
    render() {
        return (
            <footer>
                <p>React Actors</p>
            </footer>
        )
    }

}

export default Footer;