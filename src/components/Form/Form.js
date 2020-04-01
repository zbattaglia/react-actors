import React, { Component } from 'react';

class Form extends Component {

    state = {
        user: {
            firstName: '',
            lastName: '',
            impression: '',
        },
        userList: []
    }

    handleChange = ( event, propName ) => {
        console.log( `${propName} changed to`, event.target.value );

        this.setState({
            user: {
                ...this.state.user,
                [ propName ]: event.target.value,
            }
        })
    }

    handleSubmit = () => {
        console.log( 'In submit', this.state.user )
        if ( this.state.user.firstName !== '' && this.state.user.lastName !== '' && this.state.user.impression !== '' ) {
            this.setState({
                user: {
                    firstName: '',
                    lastName: '',
                    impression: '',
                },
                userList: [ ...this.state.userList, this.state.user ]
            })
            alert( `Thanks for joining us ${ this.state.user.firstName }`)
        }
        else {
            alert( 'Please fill out all fields' );
        }
    }

    render() {
        return (
            <section>
                <form>
                    <input type="text" placeholder="First Name" value={ this.state.user.firstName } onChange={ (event) => this.handleChange( event, 'firstName' ) }></input>
                    <input type="text" placeholder="Last Name" value={ this.state.user.lastName } onChange={ (event) => this.handleChange( event, 'lastName' ) }></input>
                    <input type="text" placeholder="Best Impression" value={ this.state.user.impression } onChange={ (event) => this.handleChange( event, 'impression' ) }></input>
                    <button type="button" onClick={ this.handleSubmit }>Join Us!</button>
                </form>
                <>
                    { this.state.userList.map( (item) => <p key={ item.firstName }>{ item.firstName } { item.lastName }'s best impression is { item.impression }.</p> ) }
                </>
            </section>
        )
    }

}

export default Form;