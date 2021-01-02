// import React from 'react'

// Using Stylesheet
import './styleSheet.css'


//######################
// CSS styling Example. This example styles based on a condition that can be set with a prop or state
// Only stylesheet and prop is used in this example
//######################



function ConditionalStyling(props) {

    // use make_bold style when make_bold prop is true else don't use make_bold style
    let classString = props.make_bold ? 'set_style make_big make_bold' : 'set_style make_big';

    return (
        <div>
            <p>CSS Styling Example Conditional - Styled with condition</p>

            <p className={classString}>Set using Stylesheets</p>
        </div>
    )
}

export default ConditionalStyling
