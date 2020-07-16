import React from 'react';
import './App.css';
import {
  Route,
  BrowserRouter,
} from "react-router-dom";
import Header from './Header';
import Home from './Home';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
// import About from './About';

const options = {
  position: 'bottom center',
  timeout: 5000,
  offset: '30px',
  transition: 'scale'
}

function App() {
  return (
    <BrowserRouter basename="Home">
      <AlertProvider template={AlertTemplate} {...options}>
        <Route exact path="/" component={Home} />
      </AlertProvider> 
    </BrowserRouter>
  );
}

export default App;
