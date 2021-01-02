// import React from 'react'

//######################
// Passing props to a Functional Component Example Implementation
//######################

const PassPropsFunc = (props) => {
    // console.log(props);
    return (
        <div>
            <p>
                FUNCTIONAL COMPONENT PROP TEST: Programmer's Name is: {props.name} Expert in: {props.expert}
            </p>
            {/* Passing props of unknown name */}
            {props.children}
        </div>
    );
};

//######################
//props destructure example
//this example destructure the prop in parameter
// const PassPropsDestrParamFunc = ({name, expert, children}) => {
//     return (
//         <div>
//             <p>
//                 FUNCTIONAL COMPONENT PROP TEST: Programmer's Name is: {name} Expert in: {expert}
//             </p>
//             {/* Passing props of unknown name */}
//             {children}
//         </div>
//     );
// };

//######################
//props destructure example
//this example destructure the prop in the function
// const PassPropsDestrFuncFunc = (props) => {

//     const { name, expert, children } = props

//     return (
//         <div>
//             <p>
//                 FUNCTIONAL COMPONENT PROP TEST: Programmer's Name is: {name} Expert in: {expert}
//             </p>
//             {/* Passing props of unknown name */}
//             {children}
//         </div>
//     );
// };

export default PassPropsFunc;
