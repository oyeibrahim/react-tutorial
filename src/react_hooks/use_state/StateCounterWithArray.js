import React, { useState } from 'react'

//######################
// useState using Object param Implementation
//
// IMPORTANT - use spread operator to merge the array when you update it. Check CounterWithObjectState.js
// for explanation
//######################

function StateCounterWithArray() {

    //using array as @param
    const [items, setItems] = useState([])

    //add a new random number between 1 and 20 to the item array and make the id increment
    const addNumber = () => {
        //use spread operator
        setItems([...items, {
            id: items.length,
            value: Math.floor(Math.random() * 20) + 1
        }])
    }

    return (
        <div>
            <p>UseState using Array Param</p>
            <p>
                Click the button to add a new value to the Array
            </p>
            <button onClick={addNumber}>Add new Number</button>
            <ul>
                {
                    items.map((item) => (
                        <li key={item.id}>id: {item.id} --- value: {item.value}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default StateCounterWithArray
