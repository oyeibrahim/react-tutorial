// import React from 'react'

// Using Stylesheet
import './styleSheet.css'

// Using CSS Module
// We inport module like a variable
import style from "./styleSheet.module.css";

//######################
// CSS styling Example. This example is without using conditions
// This example demonstrate 3 ways of styling in React:
// 1 - Using Stylesheets
// 2 - Inline Styling
// 3 - Using CSS Modules
//######################


//######################
// For inline Styling, set the style as an object
// the styles will be named in a camel case version of their normal CSS name when the name is in two
// parts like fontSize instead of font-size. If the name is not in two parts then it will just be 
// in small letters
const set_style = {
    padding: '3px',
    color: 'chocolate',
    border: '2px solid lightpink',
    borderRadius: '5px',//camel case version of its CSS name
    fontSize: 'large',//camel case version of its CSS name
    fontWeight: 'bold',//camel case version of its CSS name
}
//######################



function NoConditionStyling() {
    return (
        <div>
            <p>CSS Styling Example - No condition</p>

            {/* 1 - Using Stylesheets */}
            {/* The stylesheet is imported in ./styleSheet.css and the css name is used: set_style */}
            {/* we assign it to className */}
            <p className='set_style make_big make_bold'>Set using Stylesheets</p>

            {/* 2 - Inline Styling */}
            {/* All styles is written in an object (above) and the object is used here and assigned to style */}
            {/* Only one can be used at a time, so you can't give two variables below like style={set_style make_big} */}
            <p style={set_style}>Set using Inline Styling</p>

            {/* Using CSS Modules */}
            {/* Module is imported like a variable above and can then be used here like a variable */}
            {/* NOTE: Module is different from stylesheet because module won't work in child components */}
            {/* it will only work in the current component it was imported in since its a variable only in there. */}
            {/* But stylesheet can work across parent and child components which can result in style conflict. */}
            <p className={`${style.set_style} ${style.make_big} ${style.make_bold}`}>Set using Using CSS Modules</p>
        </div>
    )
}

export default NoConditionStyling
