import React from 'react';
import { BrowserRouter as Router, Route  } from "react-router-dom";
import About from './components/About';
import Store from './components/Store';
import Home from './components/Home'
import './App.css';

function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/store" component={Store} />

    </Router>
  );
}

export default App;
