// import React from 'react'

import ListRendererJsx from "./ListRendererJsx"

//######################
// Example 1, rendering a list without keys
// since its without keys it will give waring on console:
// Warning: Each child in a list should have a unique "key" prop.
// uses ListRendererJsx.js as for creating the jsx html for UI
//######################

function E1ListWithoutKeys() {

    //list we want to render
    const people = [
        {
            id: 1,
            name: "Oyetunji Ibrahim",
            age: 26,
            expert: "Java"
        },
        {
            id: 2,
            name: "Raheem Razaq",
            age: 28,
            expert: "JavaScript"
        },
        {
            id: 3,
            name: "Shuaib Mustapha",
            age: 26,
            expert: "PHP"
        },
    ]

    //######################
    //Example 1
    //create the html without using the external ListRendererJsx.js
    // let title = "List Rendering - List without keys (gives warning)"
    // const list_html = people.map((person) => (
    //     <p>I am {person.name}, age {person.age}, expert in {person.expert}</p>
    // ))

    // return (
    //     <div>
    //         <p>{title}</p>
    //         {list_html}
    //     </div>
    // )
    //######################

    //######################
    //Example 2
    //create the html using the external ListRendererJsx.js
    let title = "List Rendering - Table list without keys (gives warning)"
    const list_html = people.map((person) => <ListRendererJsx person={person} />)

    return (
        <div>
            <p>{title}</p>
            {list_html}
        </div>
    )
    //######################

}

export default E1ListWithoutKeys
