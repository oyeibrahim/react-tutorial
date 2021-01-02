import React, { useState, useEffect } from 'react'
import axios from 'axios'

//######################
// Making HTTP request
//######################

function EffectHttpRequest() {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState("")

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then((res) => {
                console.log(res)
                //set the result gotten to the state
                setPosts(res.data)
            })
            .catch((err) => {
                console.log(err)
                //set error message to the state
                setError("An HTTP error occured")
            })
    }, [])

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

export default EffectHttpRequest
