import React, { Component } from 'react'

//######################
// This is Child and is just for showing order of Parent Child lifecycles
//######################

class LifecycleChild extends Component {

    // Mounting Lifecycle - First Method
    constructor(props) {
        super(props)

        this.state = {
            name: 'Ibrahim'
        }

        //log
        console.log("LifecycleB Mounting &&& Updating Lifecycle - constructor - First Method")
    }

    // Mounting Lifecycle - Second Method &&& Updating Lifecycle - First Method
    static getDerivedStateFromProps(props, state) {
        console.log("LifecycleB - getDerivedStateFromProps - Mounting Lifecycle [Second Method] &&& Updating Lifecycle [First Method]")
        return null;
    }

    // Mounting Lifecycle - Forth Method
    componentDidMount() {
        console.log("LifecycleB Mounting Lifecycle - componentDidMount - Forth Method")
    }

    //###################### UPDATE Specific

    // Updating Lifecycle - Second Method
    shouldComponentUpdate() {
        console.log("LifecycleB Updating Lifecycle - shouldComponentUpdate - Second Method")
        return true;
    }

    // Updating Lifecycle - Forth Method
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("LifecycleB Updating Lifecycle - getSnapshotBeforeUpdate - Forth Method")
        return null;
    }

    // Updating Lifecycle - Fifth Method
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("LifecycleB Updating Lifecycle - componentDidUpdate - Fifth Method")
    }

    //######################

    // Mounting Lifecycle - Third Method &&& Updating Lifecycle - Third Method
    render() {

        console.log("LifecycleB - render - Mounting Lifecycle [Third Method] &&& Updating Lifecycle [Third Method]")

        return (
            <div>
                <p>
                    Lifecycle Child - LifecycleB (Check Console for result)
                </p>
            </div>
        )
    }
}

export default LifecycleChild
