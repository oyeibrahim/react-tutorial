import React, { PureComponent } from 'react'

//######################
// Pure Component Class.
//######################

class PureComponentPCD extends PureComponent {
    render() {

        console.log("Pure Component PCD render()")
        
        return (
            <div>
                <p>This is the Pure Component - name is: {this.props.name}</p>
            </div>
        )
    }
}

export default PureComponentPCD
