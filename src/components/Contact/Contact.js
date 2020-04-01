import React, { Component } from 'react';

class Contact extends Component {

    // Render is a Method (a function inside a class) which doesn't require
    // function declaration or =>
    // what is returned from render() is what will be on displayed on the DOM
    render() {
        return (
            <section>
                <h2>Contact</h2>
                <p>Phone: 1-800-WE-REACT</p>
                <p>INFO@ReactActors.com</p>
            </section>
        )
    }

}

export default Contact;