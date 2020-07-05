import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
// import About from './About';

function App() {
  return (
    <BrowserRouter> 
        <Route exact path="/" component={Home} />
        {/* <Route path="/about" component={About} /> */}
    </BrowserRouter>
  );
}

export default App;
