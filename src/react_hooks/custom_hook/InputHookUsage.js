import React from 'react'
import useInput from './useInput'

//######################
// This component use the useInput custom hook
//######################

function InputHookUsage() {

    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault()
        alert(`Hello ${firstName} ${lastName}`)
        //to reset the values after submission
        resetFirstName()
        resetLastName()
    }

    return (
        <div>
            <p>Custom Hook Imlementaton - useInput custom hook</p>

            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    {/* To use the hook's value field and onChange function, use {... bindName} */}
                    {/* so instead of defining value={field} and onChange={function} here, we just */}
                    {/* use the bind object from the custom input which already has both value */}
                    {/* field and onChange function */}
                    <input type='text' {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type='text' {...bindLastName} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default InputHookUsage
