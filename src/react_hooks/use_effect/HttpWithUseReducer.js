import React, { useReducer, useEffect } from 'react'
import axios from 'axios'

//######################
// Making HTTP request using useReducer as state management
//
// Fetch one post
// Display loading when fetching and result on success or error message on failure 
//######################

const initialState = {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'FETCH_SUCCESS':
            return {
                loading: false,
                error: '',
                post: action.payload
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                error: 'An HTTP error occured',
                post: {}
            }

        default:
            return state
    }
}

function HttpWithUseReducer() {

    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        axios.get('http://jsonplaceholder.typicode.com/posts/1')
            .then((res) => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch((err) => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    }, [])

    return (
        <div>
            <p>HTTP call with useReducer</p>
            <p>{state.loading ? 'Loading' : state.post.title}</p>
            <p>{state.error ? state.error : null}</p>
        </div>
    )
}

export default HttpWithUseReducer
