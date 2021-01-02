import React from 'react'

//######################
// React Fragment Example.
// PURPOSE - Since in JSX, all HTML must be enclosed in a <div>, this will also add the extra <div> node
// and it can create some problem in design, also if we are rendering a table and want to pass in the
// rows from a child component, we must also enclose the rows in a <div>, this will throw a console 
// warning that <div> cannot be a child of <table>
//
// React Fragment helps to enclose the HTML without adding additional node, so it will be pesented on
// the browser as if no node was enclosing it.
//
// The syntax is - <React.Fragment></React.Fragment>
// Or - <></> (Just empty opening and closing tags)
//
//NOTE - when we use <React.Fragment></React.Fragment> we can pass in a key prop for list rendering but
// when we use <></> we can't pass in any prop
//######################

function FragmentDemo() {

    //just to demonstrate how to pass in key prop with React.Fragment
    const listTest = []

    return (
        // <React.Fragment>
        <>
            {
                listTest.map((item) => (
                    <React.Fragment key={item.id}>
                        <p>{item.name}</p>
                        <p>{item.expert}</p>
                    </React.Fragment>
                ))
            }
            <p>
                React Fragment Example
            </p>
            <p>
                NOTE - all this HTML nodes are not enclosed in the usual div
                that is usually enforced by JSX
            </p>
            <p>Third Node</p>
            <p>Forth Node</p>
            <p>Fifth Node</p>
        </>
        // </React.Fragment>
    )
}

export default FragmentDemo
