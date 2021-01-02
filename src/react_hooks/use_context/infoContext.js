import React from 'react'

//######################
// useContext Hook Implementation
//######################

// We can set a default context value and it will be rendered when there is no override for it
// but if there is override then the override will be displayed.
// How to set a default value
export const InfoContext = React.createContext("Ibrahim (Default)")

// export const InfoContext = React.createContext()

const UserProvider = InfoContext.Provider
const UserConsumer = InfoContext.Consumer

export { UserProvider, UserConsumer }