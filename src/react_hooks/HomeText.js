// import React from 'react'
import swk_img from '../images/sydewalka-medium.png';
import { Link, NavLink } from 'react-router-dom';

// To set the current link to the class in case doesn't exist, use to make the class
// export an Higher Order Component. See the commented export at the bottom
// import { withRouter } from 'react-router-dom';

//with arrow function
const hText = () => (
    <div>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={swk_img} className="App-logo" alt="logo" />
        <p>
            Sydewalka <code>React Hooks</code> Template.
        </p>
        <p>
            Contains necessary React Hooks usage Demo.
        </p>
        <p>
            IMPORTANT HOOKS RULES - [ Never use Hooks function in another function like loops,
            conditional statement or nested function, always use it at the top level ] ---
            [ Always call Hooks function from React Functional Components,
            don't call them from any regular JavaScript function ]
        </p>
        <p>
            You can still &nbsp;
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
        </p>
        <p>
            To show Normal example, click the link below
        </p>

        <p>Using a tag, Not advisable as it will reload the whole page</p>
        <a href='/'>Show Normal React</a>

        <p>Using Link tag from react-router-dom, won't reload the page so its Good</p>
        <Link to='/'>Show Normal React</Link>

        <p>
            Using NavLink tag from react-router-dom, won't reload the page and also will
            put an "active" class on the current active link. So its good for Navbar
        </p>
        <NavLink to='/'>Show Normal React</NavLink>
    </div>
);


export default hText;

// Using withRouter to make hText an HOC
// export default withRouter(hText);