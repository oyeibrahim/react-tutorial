import React, { Component } from 'react'
import MemoFuncComp from './MemoFuncComp'

//######################
// Memo Demo.
// Memo meaning - A functional component that does the same thing a Pure Component does
// Check pure_component for details of Pure Component
// 
// Memo is a system where Fuctional Component is made an Higher Order Component
// with Pure Component feature, whereby it only updates and re-render when change actually occur
// just like Pure Component. So, Memo is a Functional Component with Pure Component
// ability
//######################

class ParentComponentMemo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: 'Ibrahim'
        }
    }

    //since we are performing a side-effect task similar to HTTP request, we place the code in 
    //componentDidMount()
    //commented - uncomment to test
    // componentDidMount() {
    //     setInterval(() => {
    //         this.setState({
    //             name: 'Ibrahim'
    //         })
    //     }, 2000)
    // }

    render() {

        console.log("*************** Parent Component Memo render() ***************")

        return (
            <div>
                <p>Memo Demonstration - Uncomment the componentDidMount() method to test</p>
                <p>
                    A Functinal Component with Pure Component features
                </p>
                <MemoFuncComp name={this.state.name} />
            </div>
        )
    }
}

export default ParentComponentMemo
