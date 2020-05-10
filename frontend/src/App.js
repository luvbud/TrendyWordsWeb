// import React, {useState, useEffect} from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   const [message, setMessage] = useState("");
  
//   useEffect(() => {
//     fetch('/index')
//       .then(response => response.text())
//       .then(message => {
//         setMessage(message);
//       });
//   },[])

//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <h1 className="App-title">{message}</h1>
//       </header>
//       <p className="App-intro"> To get started, edit <code>src/App.js</code> and save to reload. </p>
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         {/* <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//     </div>
//   );
// }

// export default App;


import React from 'react';
import AppRouter from './component/route/RouterComponent';
import NavBar from "./component/route/NavBar";

import Container from '@material-ui/core/Container';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <AppRouter />
      </Container>
    </div>
  );
}

export default App;