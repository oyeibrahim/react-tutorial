import React, { Component } from 'react'
import { UserConsumer } from './infoContext'

//######################
// Context Implementation
// ComponentA.js is the top parent, check info there
//
// We are using the normal way here by setting ContextConsumer
//######################

class ComponentC extends Component {
    render() {
        return (
            <UserConsumer>
                {(name) => {
                    return (
                        <div>
                            <p>Context Implementation</p>
                            <p>
                                Context - making info available in all components automatically without using
                                the normal props passing method
                            </p>
                            <p>In Component C - Info passed in: {name}</p>
                        </div>
                    )
                }}
            </UserConsumer>
        )

        //how to use multiple context
        // return (
        //     <UserConsumer>
        //         {(name) => (
        //             <UserConsumer>
        //                 {(username) => {
        //                     return (
        //                         <div>
        //                             <p>Info one: {user}. Info two: {username}</p>
        //                         </div>
        //                     )
        //                 }}
        //             </UserConsumer>
        //         )}
        //     </UserConsumer>
        // )
    }
}

export default ComponentC
