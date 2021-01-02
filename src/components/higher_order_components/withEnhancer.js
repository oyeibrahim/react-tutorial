import React from 'react'

//######################
// Higher Order Component (HOC) Implementation
// HOC - is a Class or Functional Component that has been enhanced by adding new functionalities
// to it that doesn't exist in it before.
//
// It is suitable for sharing common code between many different components
//
// There is another feature that can do just what HOC is doing, that is RenderProps
//
// In this example, we want to implement a count functionality in ClickCounter.js and HoverCounter.js
// so, instead of writing the counting code in those files (and if we have many others files also counting)
// we just implement those code in this enhancer and then make those files HOC by enhancing them
// with this enhancer so they get the counting functionality without implementing the code in them
//
// NOTE - the name convention used here is the best to use and some may result in error if this name 
// convention isn't used
//######################

// To enhance a component, pass in the name of the functions or attributes you want to pass to 
// those components as prop

// withEnhancer - is the enhancer
// @param WrappedComponent - is the component we want to enhance
// @param incrementNo - is OPTIONAL, we pass it in here to make the number we are incrementing the 
// count with dynamic, so that each component using this enhancer will be responsible for explicitly
// stating the number to increment by
const withEnhancer = (WrappedComponent, incrementNo) => {
    // this class WithEnhancer is different from withEnhancer above [take note of that]
    class WithEnhancer extends React.Component {

        //constructor to set state
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }

        //counting function
        incrementCount = () => {
            this.setState((prevState) => {
                //increment by incrementNo passed in
                return { count: prevState.count + incrementNo }
            })
        }

        render() {
            // pass functions in as props
            return (
                <WrappedComponent
                    count={this.state.count}
                    incrementCount={this.incrementCount}
                    // IMPORTANT - always pass down other props in this way
                    // because props pass in from the file we render the components in 
                    // (e.g App.js or Homepage.js) will 
                    // arrive here and not in the components to be enhanced, so the props 
                    // MUST be passed down to the components to be enhanced in this way
                    {... this.props}
                />
            )
        }
    }
    return WithEnhancer
}

export default withEnhancer
