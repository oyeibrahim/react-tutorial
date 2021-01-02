import {useEffect} from 'react'

//######################
// Custom Hook Creation Implementation (First created in this tutorial)
//
// It is possible to create custom hooks in React, this will make shareable code be implemented 
// only once and used in as any component that need it
//
// RULE - any custom hook MUST start with "use" e.g useDocumetTitle
//
// Here we are creating a hook that updates the document title with the count number
//######################

//param will be passed in when we call the hook
function useDocumetTitle(count) {
    useEffect(() => {
        document.title=`Count ${count}`
    }, [count])
}

export default useDocumetTitle
