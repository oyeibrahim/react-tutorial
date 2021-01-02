import React, { Component } from 'react'
import axios from 'axios'

//######################
// HTTP GET Request Implementation.
//
// Just import a HTTP request library (axios here) and use it in componentDidMount lifecycle
//
// Using a Fake online REST API (JSON Placeholder) to do this testing
//######################

class HttpGetRequest extends Component {

    constructor(props) {
        super(props)

        //save the data retrieved in posts
        //put error message (in case there is HTTP error) in error
        this.state = {
            posts: [],
            error: []
        }
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                //set the result gotten to the state
                this.setState({
                    posts: res.data
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

        const { posts, error } = this.state

        return (
            <div>
                <p>HTTP GET Request Demo - List below is gotten in an HTTP Request</p>
                {/* Display the posts gotten. I only print 3 */}
                {
                    posts.length ?
                        posts.map((post) => {
                            return (
                                // Print only 3
                                post.id < 4 ?
                                    <p key={post.id}>
                                        {post.title}
                                    </p>
                                    :
                                    null
                            )
                        })
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

export default HttpGetRequest
