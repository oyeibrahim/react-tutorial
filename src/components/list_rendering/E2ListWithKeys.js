// import React from 'react'

import ListRendererJsx from "./ListRendererJsx"

//######################
// Example 2, rendering a list with keys
// NOTE: key may not necessarily be id, it MUST just be unique, so it can be the username or even
// name if you are sure that they are unique
// uses ListRendererJsx.js as for creating the jsx html for UI
//######################

function E2ListWithKeys() {

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
    // let title = "List Rendering - List with keys (Normal method to render lists)"
    // const list_html = people.map((person) => (
    //     <p key={person.id}>I am {person.name}, age {person.age}, expert in {person.expert}</p>
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
    let title = "List Rendering - Table list with keys (Normal method to render lists)"
    // NOTE key is not a prop and won't be accessible as prop in the other file, to get id as 
    // prop, just use prop.person.id in the other file since peron already carried id property
    // and person is sent as a prop
    const list_html = people.map((person) => <ListRendererJsx key={person.id} person={person} />)

    return (
        <div>
            <p>{title}</p>
            {list_html}
        </div>
    )
    //######################

}

export default E2ListWithKeys
