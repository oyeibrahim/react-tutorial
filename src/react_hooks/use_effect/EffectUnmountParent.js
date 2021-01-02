import React, { useState } from 'react'
import EffectUnmountChild from './EffectUnmountChild'

//######################
// useEffect as - componentWillUnmount
//
// This can toggle the mount state of the child component
//######################

function EffectUnmountParent() {

    const [mounted, setMounted] = useState(true)

    return (
        <div>
            <p>Use UseEffect with componentWillUnmount() functionality</p>
            <p>Toggle mounting state of the child component by clicking the button below</p>
            <button onClick={() => setMounted(!mounted)}>Toggle Display</button>
            {/* Display the child component only when "mounted" is true */}
            {mounted && <EffectUnmountChild />}
        </div>
    )
}

export default EffectUnmountParent
