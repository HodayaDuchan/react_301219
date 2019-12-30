import React from 'react';
import logo from './logo.svg';
import './App.css';
import {HashRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Link>
        <Switch>
          <Router exact path='/' component={()=>{return <h1>Home Page</h1>}}/>
          <Router exact path='/page2' component={()=>{return <h1>Page 2</h1>}}/>
        </Switch>
        </Link>
      </Router>
    </div>
  );
}

export default App;
