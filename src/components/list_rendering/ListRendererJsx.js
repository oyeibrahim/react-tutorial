// import React from 'react'

//######################
// Just to create the HTML for the list
//######################

function ListRendererJsx(props) {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            Name
                        </th>
                        <th>
                            Age
                        </th>
                        <th>
                            Expert
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            {props.person.name}
                        </td>
                        <td>
                            {props.person.age}
                        </td>
                        <td>
                            {props.person.expert}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ListRendererJsx
