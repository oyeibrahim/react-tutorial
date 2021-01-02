// import logo from './logo.svg';
// import './App.css';

import Homepage from './components/Homepage';
import HooksHomepage from './react_hooks/HooksHomepage';

// For routing instal: npm install react-router-dom
// Then import the below
import { BrowserRouter, Route } from 'react-router-dom';


// Implement the router
function App() {
  return (
    <BrowserRouter>
    
      <Route exact path='/' component={Homepage} />
      <Route path='/hooks' component={HooksHomepage} />
      
    </BrowserRouter>
  );
}

// Without Router
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
