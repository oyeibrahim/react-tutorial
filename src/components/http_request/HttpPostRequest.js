import React, { Component } from 'react'
import axios from 'axios'

//######################
// HTTP POST Request Implementation.
//
// Just import a HTTP request library (axios here) and use it in componentDidMount lifecycle
//
// Using a Fake online REST API (JSON Placeholder) to do this testing
//######################

class HttpPostRequest extends Component {

    constructor(props) {
        super(props)

        this.state = {
            userId: "",
            title: "",
            body: "",
            result: '',
            error: ''
        }
    }

    //Dynamic handler that can work for all inputs here since the input name is the same as
    //the state name we want to assign them to
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault()

        axios.post('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                //set the result gotten to the state
                this.setState({
                    result: res.data
                })
            })
            .catch((err) => {
                console.log(err)
                //set error message to the state
                this.setState({
                    error: "An HTTP error occured"
                })
            })
    }

    render() {

        const { userId, title, body, result, error } = this.state

        return (
            <div>
                <p>HTTP POST Request Demo</p>
                <p>Fill the form below and submit, it will make a POST request to the REST API used</p>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type='text' name='userId' value={userId} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='title' value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type='text' name='body' value={body} onChange={this.changeHandler} />
                    </div>
                    <button type='submit'>Submit</button>
                </form>

                {/* Display the result gotten */}
                {
                    result ?
                        (
                            <div>
                                <p>
                                    Data posted successfully, ID is: {result.id}
                                </p>
                            </div>
                        )
                        :
                        null
                }
                {/* Display error in case of error */}
                {
                    error ? <div>{error}</div> : null
                }
            </div>
        )
    }
}

export default HttpPostRequest
