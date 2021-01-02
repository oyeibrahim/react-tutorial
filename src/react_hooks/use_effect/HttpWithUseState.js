import React, { useState, useEffect } from 'react'
import axios from 'axios'

//######################
// Making HTTP request using useState as state management
//
// Fetch one post
// Display loading when fetching and result on success or error message on failure 
//######################

function HttpWithUseState() {

    const [loading, setLoading] = useState(true)
    const [post, setPost] = useState({})
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                setLoading(false)
                //set the result gotten to the state
                setPost(res.data)
                setError('')
            })
            .catch((err) => {
                setLoading(false)
                setPost('')
                //set error message to the state
                setError("An HTTP error occured")
            })
    }, [])

    return (
        <div>
            <p>HTTP call with useState</p>
            <p>{loading ? 'Loading' : post.title}</p>
            <p>{error ? error : null}</p>
        </div>
    )
}

export default HttpWithUseState
