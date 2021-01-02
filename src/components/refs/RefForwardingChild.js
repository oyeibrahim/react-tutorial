import React from 'react'

//######################
// Ref Forwarding Implementation
// Ref Forwarding means - forward ref from parent to child to directly access the child's element
// unlike RefWithClass which uses class to access the child element, this one access the element
// directly. 
// We will make the child component a Functional Component
//######################

//We MUST rewrite the function from the normal way to an arrow function passed into
//React.forwardRef so we can have access th refs parameter
const RefForwardingChild = React.forwardRef((props, ref) => {
    return (
        <div>
            <input type='text' ref={ref} />
        </div>
    )
})

export default RefForwardingChild
