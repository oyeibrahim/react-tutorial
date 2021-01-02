import React, {useState} from 'react'
import useDocumetTitle from './useDocumetTitle'

//######################
// This component use the useDocumetTitle custom hook
//######################

function DocumentTitleHookUsage() {

    const [count, setCount] = useState(0)

    //call the custom hook and pass in its param
    useDocumetTitle(count)

    return (
        <div>
            <p>Custom Hook Imlementaton - useDocumetTitle custom hook</p>
            <button onClick={() => { setCount(count + 1) }}>Count - {count}</button>
        </div>
    )
}

export default DocumentTitleHookUsage
