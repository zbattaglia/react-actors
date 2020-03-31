import React, { Component } from 'react';

class About extends Component {

    // Render is a Method (a function inside a class) which doesn't require
    // function declaration or =>
    // what is returned from render() is what will be on displayed on the DOM
    render() {
        return (
            <section>
                <h2>About</h2>
                <p>We are actors working with actors and we React to things.</p>
            </section>
        )
    }

}

export default About;