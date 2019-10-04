import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';
import Main from './component/main.js';

function App() {
  return ( 
    <div className="App">
      <Router>
        <Route path='/' component={Main}></Route>
      </Router>
    </div>
  );
}

export default App;
