import React, { Component } from 'react'

//######################
// Form handling in React Example.
// For each form element create a state and set the value of the form element to the state and then 
// when their is a  change in the form element, update the state and set the state as
//######################

class Form extends Component {

    constructor(props) {
        super(props)

        this.state = {
            username: '',
            comment: '',
            expert: 'javascript'//you can set default value by putting a value here
        }
    }

    //Check HttpPostRequest for implementation of a Dynamic Handler
    
    //Username input //onchange usually pass the chenge event to the function, so event
    //is available as a parameter
    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    //Comment input
    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    //Expert select
    handleExpertChange = (event) => {
        this.setState({
            expert: event.target.value
        })
    }

    //Submission handler
    handleSubmit = (event)=>{
        //just alert in this example, any other thing can be done, like real submission
        alert(`${this.state.username} ${this.state.comment} ${this.state.expert}`)

        //to prevent page reload after submission
        event.preventDefault();
    }

    render() {

        // OPTIONALLY - you can destructure the state here so that you won't have to be using
        // this.state.{value}, instead you will just use {value}
        // How to destructure:
        // const {username, comment, expert} = this.state;

        return (
            <div>

                <p>Form Handling in React</p>

                <form onSubmit={this.handleSubmit}>

                    <div>
                        <label>Username: </label>
                        <input
                            type='text'
                            value={this.state.username} //for destructured just use: value={username}
                            onChange={this.handleUsernameChange}
                        />
                    </div>

                    <br></br>

                    <div>
                        <label>Comment: </label>
                        <textarea
                            value={this.state.comment} //for destructured just use: value={comment}
                            onChange={this.handleCommentChange}
                        />
                    </div>

                    <br></br>

                    <div>
                        <label>Expert: </label>
                        <select
                            value={this.state.expert} //for destructured just use: value={expert}
                            onChange={this.handleExpertChange}
                        >
                            <option value='java'>Java</option>
                            <option value='javascript'>JavaScript</option>
                            <option value='php'>PHP</option>
                        </select>
                    </div>

                    <br></br>

                    <button type='submit'>Submit</button>

                </form>
            </div>
        )
    }
}

export default Form
