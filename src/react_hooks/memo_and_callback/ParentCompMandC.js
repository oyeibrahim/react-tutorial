import React, { useState, useCallback } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

//######################
// Memo and UseCallback Implementation
//
// Both are used to optimise the app. So that only children components that have been changed are
// re-rendered. The default is that all children components re-render when parent is re-rendered 
// but that can pose a serious performance issue.
//
// memo is used to export the children components, and when that is done, React automatically optimise
// the component and only re-renders them only when they are changed.
// usage - React.memo(component)
//
// But in some cases as in this example, memo is not enough, when the children components use a code
// in parent, all functions in parent are automatically re-executed and termed as changed on any update
// so the children will re-render even when nothing has changed.
// To prevent this, we use useCallback on the functions in the parent component.
// useCallback accept the function as first param and the variable used by the function as second 
// param
// So if the variable depended on change, the function will be executed, but if not, the function 
// won't be executed, only the cached function will be returned.
//
// NOTE - useCallback caches the Function ////// useMemo caches the return value of the function 
// for useMemo see use_memo/MemoCounter.js
// both useCallback and useMemo are almost same except for what they cache
// Difference: Whenever you need to cache the function use useCallback but if its the return value you
// need to cache the use useMemo
//######################

function ParentCompMandC() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(50000)

    //useCallback in action 
    //first param is the function //second param is the variable the function depends on
    const incrementAge = useCallback(
        () => {
            setAge(age + 1)
        },
        [age],
    )
    const incrementSalary = useCallback(
        () => {
            setSalary(salary + 1000)
        },
        [salary],
    )

    return (
        <div>
            <Title />
            <Count text="Age" count={age} />
            <Button handleClick={incrementAge}>Increment Age</Button>
            <Count text="Salary" count={salary} />
            <Button handleClick={incrementSalary}>Increment Salary</Button>
        </div>
    )
}

export default ParentCompMandC
