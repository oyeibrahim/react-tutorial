import React from 'react'

// STEP 1
import ReactDOM from 'react-dom';

//######################
// Portals Implementation
//
// Portals help us render HTML element into another DOM different from the "root" DOM in index.html
// This is useful when we want to create modal or other elements that will not work well when
// they are contained in the same DOM with other age elements.
//
// We will render the JSX below in "portal-root" in index.html
//######################

function PortalsDemo() {

    // STEP 2
    return ReactDOM.createPortal(
        <div>
            <p>React Portals - Rending out of the "root" DOM</p>
            <p>This HTML is not rendered in the "root" DOM</p>
        </div>,
        document.getElementById('portal-root')
    )
}

export default PortalsDemo
